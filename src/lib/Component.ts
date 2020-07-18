import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { State } from './State';

export class Component<T> {
  constructor(
    public state: State<T>,
    public sync: Sync,
    public events: Eventing
  ) {}

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
    this.state.addProperty(update);
    this.trigger('change');
  }

  get fetch() {
    return this.sync.fetch;
  }
}
