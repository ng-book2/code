/*
 * Utility functions for our browser tests
 */
export function createEvent(eventType: any): Event {
  var evt: Event = document.createEvent('Event');
  evt.initEvent(eventType, true, true);
  return evt;
}

export function dispatchEvent(element: any, eventType: any) {
  element.dispatchEvent(createEvent(eventType));
}

export class ConsoleSpy {
  public logs: string[] = [];
  log(...args) {
    this.logs.push(args.join(' '));
  }
  warn(...args) {
    this.log(...args);
  }
}

