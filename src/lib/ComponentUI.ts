import { Component } from './Component';

export abstract class ComponentUI<T extends Component<P>, P> {
  constructor(protected component: Component<P>, protected parent: Element) {}

  listenState() {
    this.component.on('change', () => {
      this.render();
    });
  }

  abstract template(): string;
  abstract render(): void;
}
