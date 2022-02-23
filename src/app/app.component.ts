import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { SortDirection } from 'aws-amplify';
import {
  APIService,
  CreateUserInput,
  CreateUserMutation,
  ListMessagesQuery,
  Message,
  ModelSortDirection,
} from 'src/API';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'amplify-chat-angular';
  messages: Array<Message>;
  currentSenderUser: CreateUserMutation;
  currentReceipientUser: CreateUserMutation;
  receipientUser: { id: number; name: string };
  username: string;
  users: Array<{ id: number; name: string }> = [
    {
      id: 1,
      name: 'Ravikumar',
    },
    {
      id: 2,
      name: 'Aanand',
    },
    {
      id: 3,
      name: 'Gopal',
    },
    {
      id: 4,
      name: 'Vimal',
    },
    {
      id: 5,
      name: 'Kannan',
    },
    {
      id: 6,
      name: 'Sam',
    },
  ];

  selectedUser: { id: number; name: string };
  constructor(private api: APIService, private router: Router) {}
  onChangeSender(userValue: any): void {
    this.selectedUser = this.users.filter((e) => e.id == userValue)[0];
    if (this.selectedUser) {
      this.createUpdateUser('sender');
    }
  }

  onChangeReceiver(userValue: any): void {
    this.receipientUser = this.users.filter((e) => e.id == userValue)[0];
    if (this.receipientUser) {
      this.createUpdateUser('receiver');
    }
  }

  async createUpdateUser(operation: 'sender' | 'receiver') {
    const existingUser = await this.api.ListUsers(null, {
      appUserId: {
        eq:
          operation == 'sender' ? this.selectedUser.id : this.receipientUser.id,
      },
    });
    if (existingUser.items.length > 0) {
      if (operation == 'sender') {
        this.currentSenderUser = existingUser.items[0];
      } else {
        this.currentReceipientUser = existingUser.items[0];
      }
    } else {
      const createUserInput: CreateUserInput = {
        appUserId:
          operation == 'sender' ? this.selectedUser.id : this.receipientUser.id,
        firstName:
          operation == 'sender'
            ? this.selectedUser.name
            : this.receipientUser.name,
        grades: '9',
        imageUrl: 'Dummy',
        lastName:
          operation == 'sender'
            ? this.selectedUser.name
            : this.receipientUser.name,
        schoolName:
          'New School ' +
          (operation == 'sender'
            ? this.selectedUser.id
            : this.receipientUser.id),
        role: 'ROLE_STUDENT',
      };
      const createdUser = await this.api.CreateUser(createUserInput);
      if (operation == 'sender') {
        this.currentSenderUser = createdUser;
      } else {
        this.currentReceipientUser = createdUser;
      }
    }

    this.listMessages();
  }
  ngOnInit(): void {
    this.onCreateMessage();
  }
  listMessages() {
    if (!this.currentReceipientUser) {
      alert('Please select recepient!');
      return false;
    }

    this.api
      .ListMessages(
        null,
        {
          or: [
            {
              and: [
                { messageSenderUserId: { eq: this.currentSenderUser.id } },
                {
                  messageRecepientUserId: { eq: this.currentReceipientUser.id },
                },
              ],
            },
            {
              and: [
                { messageSenderUserId: { eq: this.currentReceipientUser.id } },
                { messageRecepientUserId: { eq: this.currentSenderUser.id } },
              ],
            },
          ],
        },
        0,
        null,
        ModelSortDirection.ASC
      )
      .then((val: ListMessagesQuery) => {
        console.log(val);
        this.messages = val.items;
      });
  }

  send(event, inputElement: HTMLInputElement): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.currentReceipientUser) {
      alert('Please select recepient!');
    }

    const input = {
      body: inputElement.value.trim(),
      messageSenderUserId: this.currentSenderUser.id,
      messageRecepientUserId: this.currentReceipientUser.id,
    };

    this.api.CreateMessage(input).then((val) => {
      console.log('Send Message Success =>', val);
      inputElement.value = '';
      this.playAudio('sent');
    });
  }

  onCreateMessage(): void {
    this.api.OnCreateMessageListener.subscribe({
      next: (val: any) => {
        console.log(val);
        this.messages.push(val.value.data.onCreateMessage);
        //this.playAudio('received');
      },
    });
  }

  playAudio(fileName: 'sent' | 'seen' | 'received') {
    let audio = new Audio();
    audio.src = `../../../assets/audio/${fileName}.wav`;
    audio.load();
    audio.play();
  }
}
