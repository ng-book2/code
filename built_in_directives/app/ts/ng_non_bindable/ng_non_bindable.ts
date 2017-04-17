import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'ng-non-bindable-sample-app',
  template: `
  <div class='ngNonBindableDemo'>
    <span class="bordered">{{ content }}</span>
    <span class="pre" ngNonBindable>
      &larr; This is what {{ content }} rendered
    </span>
  </div>
  `
})
export class NgNonBindableSampleApp {
  content: string;

  constructor() {
    this.content = 'Some text';
  }
}

@NgModule({
  declarations: [ NgNonBindableSampleApp ],
  exports: [ NgNonBindableSampleApp ],
  imports: [ BrowserModule ]
})
export class NgNonBindableSampleAppModule {}

