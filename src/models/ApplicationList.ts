import { CollectionComponent } from '../lib/CollectionComponent';
import { Application, User } from './User';
import { CollectionState } from '../lib/CollectionState';
import { Sync } from '../lib/Sync';
import { Eventing } from '../lib/Eventing';
const url = 'https://my-json-server.typicode.com/juan-cantero/demo/usuarios';

export class ApplicationList extends CollectionComponent<Application> {
  constructor(private user: User) {
    super(
      new CollectionState(user.applications),
      new Sync(url),
      new Eventing()
    );
  }

  static BuildApplicationList(user: User) {
    return new ApplicationList(user);
  }
}
