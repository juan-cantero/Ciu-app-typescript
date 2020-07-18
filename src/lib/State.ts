export class State<T> {
  constructor(public data: T) {
    this.getState = this.getState.bind(this);
  }

  getState(): T {
    return this.data;
  }

  setState(update: T) {
    this.data = update;
  }

  addProperty(update: T): void {
    this.data = { ...this.data, update };
  }
}
