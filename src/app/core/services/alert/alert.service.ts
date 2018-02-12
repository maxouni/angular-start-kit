import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  constructor() {
  }

  showToaster(msg: string) {
    window.console.log(msg);
  }
}
