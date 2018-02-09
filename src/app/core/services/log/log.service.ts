import {Injectable} from '@angular/core';
import { environment } from '@environments/environment';

@Injectable()
export class LogService {

  global = ';padding:3px 0;line-height:1.4;text-overflow: ellipsis;font-family:monospace;';

  styles: { [s: string]: string } = {
    subscribe: 'background:#FFD54F;color:black;' + this.global,
    storage: 'background:#6A1B9A;color:white;' + this.global,
    post: 'background:#DCEDC8;color:black;' + this.global,
    yellow: 'background:#FFEB3B;color:black;' + this.global,
    green: 'background:#009688;color:white;' + this.global,
    red: 'background:#E91E63;color:white;' + this.global,
    gray: 'background:#CFD8DC;color:#666;' + this.global,
    init: 'background:#FAFAFA;color:#BDBDBD;' + this.global,
    service: 'background:#90CAF9;color:#000;' + this.global,
  };

  constructor() {
  }

  private static prepare(message) {
    const piece = message
      .replace(/[\s]+$/g, '')
      .replace(/^[\s]*[\n]/g, '')
      .split('\n');
    const length = [].concat(piece)
      .sort((a, b) => b.length - a.length)[0].length;

    const pattern = new Array((length < 100) ? 100 : length).fill(' ');
    return '\n' + piece
      .map((value) => {
        const newString = {
          ...pattern,
          ...value.replace(/^[\s]*/, ' ')
        };
        return Object.keys(newString).map((key: string) => {
          return newString[key];
        }).join('') + '\t';
      })
      .join('\n');
  }

  yellow(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c${LogService.prepare(message)}\n`, this.styles.yellow, ...args);
    }
  }

  green(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c${LogService.prepare(message)}\n`, this.styles.green, ...args);
    }
  }

  red(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c${LogService.prepare(message)}\n`, this.styles.red, ...args);
    }
  }

  subscribe(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c Subscribe: ${LogService.prepare(message)}\n`, this.styles.subscribe, ...args);
    }
  }

  storage(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c Storage: ${LogService.prepare(message)}\n`, this.styles.storage, ...args);
    }
  }

  post(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c POST: ${LogService.prepare(message)}\n`, this.styles.post, ...args);
    }
  }

  gray(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c${LogService.prepare(message)}\n`, this.styles.gray, ...args);
    }
  }

  init(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c Loaded: ${LogService.prepare(message)}\n`, this.styles.init, ...args);
    }
  }

  service(message, ...args): void {
    if (!environment.production) {
      window.console.info(`%c Service: ${LogService.prepare(message)}\n`, this.styles.service, ...args);
    }
  }

}
