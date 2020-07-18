import { HasId } from './HasId.interface';

export class CollectionState<T extends HasId> {
  constructor(public data: T[]) {
    this.getState = this.getState.bind(this);
  }

  getState(): T[] {
    return this.data;
  }

  setState(update: T[]) {
    this.data = update;
  }

  addItem(update: T): void {
    this.data = [...this.data, update];
  }

  removeItem(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}
