import { Component } from '../lib/Component';
import Axios from 'axios';
import { UserList, UserProps } from './UserList';
import { CollectionState } from '../lib/CollectionState';
import { Sync } from '../lib/Sync';
import { Eventing } from '../lib/Eventing';
import { State } from '../lib/State';

export interface Application {
  id: number;
  fecha: string;
  descripcion: string;
  estado: string;
  checked: boolean;
}
const url = 'https://my-json-server.typicode.com/juan-cantero/demo/usuarios';

export class User extends Component<UserProps> {
  constructor(
    public state: State<UserProps>,
    public sync: Sync,
    public events: Eventing
  ) {
    super(state, sync, events);
  }
  static async buildUser(userId: number) {
    const response = await Axios.get(`${url}/${userId}`);
    const user = new User(
      new State<UserProps>(response.data),
      new Sync(`${url}/${userId}`),
      new Eventing()
    );

    return user;
  }

  get applications(): Application[] {
    return this.getState().solicitudes;
  }
}
