import {
  Component,
  Input,
  Directive,
  ElementRef
} from '@angular/core';

@Component({
  selector: '[message]',
  host: {
    'class': 'ui message'
  },
  template: `
    <div class="header">
      {{ header }}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export class Message {
  @Input() header: string;

  ngOnInit(): void {
    console.log('header', this.header);
  }
}

@Component({
  selector: 'content-projection-sample-app',
  template: `
  <div message header="My Message">
    This is the content of the message
  </div>
  `
})
export class ContentProjectionSampleApp {
}


