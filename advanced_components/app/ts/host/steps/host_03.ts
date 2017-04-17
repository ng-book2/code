import { NgModule } from '@angular/core';
import { Component, Input, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]',
  host: {
    '(click)': 'displayMessage()'
  }
})
class Popup {
  @Input() message: String;

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }

  displayMessage(): void {
    alert(this.message);
  }
}

@Component({
  selector: 'host-sample-app',
  template: `
  <div class="ui message" popup
       message="Clicked the message">
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>

  <i class="alarm icon" popup
     message="Clicked the alarm icon"></i>
  `
})
export class HostSampleApp3 {
}

@NgModule({
  declarations: [
    HostSampleApp3,
    Popup
  ],
  exports: [ HostSampleApp3 ]
})
export class HostSampleApp3Module {}



