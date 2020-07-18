import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { CollectionState } from './CollectionState';

interface HasId {
  id: number;
}

export class CollectionComponent<T extends HasId> {
  constructor(
    public state: CollectionState<T>,
    public sync: Sync,
    public events: Eventing
  ) {
    this.setState = this.setState.bind(this);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get getState() {
    return this.state.getState;
  }

  setState(update: T): void {
    this.state.addItem(update);
    this.trigger('change');
  }

  removeItem(id: number): void {
    this.state.removeItem(id);
    this.trigger('change');
  }

  get fetch() {
    return this.sync.fetch;
  }
}
