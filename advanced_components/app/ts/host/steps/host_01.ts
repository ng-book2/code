import { NgModule } from '@angular/core';
import { Component, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]'
})
class Popup {
  constructor() {
    console.log('Directive bound');
  }
}

@Component({
  selector: 'host-sample-app',
  template: `
  <div class="ui message" popup>
    <div class="header">
      Learning Directives
    </div>

    <p>
      This should use our Popup diretive
    </p>
  </div>
  `
})
export class HostSampleApp1 {
}

@NgModule({
  declarations: [
    HostSampleApp1,
    Popup
  ],
  exports: [ HostSampleApp1 ]
})
export class HostSampleApp1Module {}


