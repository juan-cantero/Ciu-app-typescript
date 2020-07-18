import { CollectionComponent } from './CollectionComponent';
import { HasId } from './HasId.interface';

export abstract class CollectionComponentUI<
  T extends CollectionComponent<P>,
  P extends HasId
> {
  constructor(
    protected component: CollectionComponent<P>,
    protected parent: Element
  ) {}

  mapEvents(): { [key: string]: () => void } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsToBind = this.mapEvents();
    for (let eventKey in eventsToBind) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsToBind[eventKey]);
      });
    }
  }

  get setState() {
    return this.component.setState;
  }

  listenState() {
    this.component.on('change', () => {
      this.render();
    });
  }

  abstract template(): string;
  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.parent.append(template.content);
  }
}
