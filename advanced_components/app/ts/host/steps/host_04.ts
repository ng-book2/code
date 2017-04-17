import { NgModule } from '@angular/core';
import { Component, Input, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup',
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
  <div class="ui message" popup #popup1="popup"
       message="Clicked the message">
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>

  <i class="alarm icon" popup #p2="popup"
     message="Clicked the alarm icon"></i>

  <div style="margin-top: 20px;">
    <button (click)="popup1.displayMessage()" class="ui button">
      Display popup for message element
    </button>

    <button (click)="p2.displayMessage()" class="ui button">
      Display popup for alarm icon
    </button>
  </div>
  `
})
export class HostSampleApp4 {
}

@NgModule({
  declarations: [
    HostSampleApp4,
    Popup
  ],
  exports: [ HostSampleApp4 ]
})
export class HostSampleApp4Module {}


