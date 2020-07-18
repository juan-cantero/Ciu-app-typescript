import { Sync } from '../lib/Sync';
import { CollectionState } from '../lib/CollectionState';
import { Eventing } from '../lib/Eventing';
import { CollectionComponent } from '../lib/CollectionComponent';
import Axios from 'axios';
import { Application } from './User';

export interface UserProps {
  checked: boolean;
  id: number;
  nombre: string;
  avatar: string;
  fecha: string;
  activo: string;
  solicitudes: Application[];
}

const url = 'https://my-json-server.typicode.com/juan-cantero/demo/usuarios';

export class UserList extends CollectionComponent<UserProps> {
  static async buildUserList() {
    const response = await Axios.get(url);
    const userList = new UserList(
      new CollectionState(response.data),
      new Sync(url),
      new Eventing()
    );
    return userList;
  }
}
