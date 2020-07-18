import Axios, { AxiosPromise } from 'axios';

export class Sync {
  constructor(private url: string) {
    this.fetch = this.fetch.bind(this);
  }

  fetch(): AxiosPromise {
    return Axios.get(this.url);
  }
}
