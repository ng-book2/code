import { NgModule } from '@angular/core';
import { Component, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[popup]'
})
class Popup {
  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
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

  <i class="alarm icon" popup></i>
  `
})
export class HostSampleApp2 {
}

@NgModule({
  declarations: [
    HostSampleApp2,
    Popup
  ],
  exports: [ HostSampleApp2 ]
})
export class HostSampleApp2Module {}


