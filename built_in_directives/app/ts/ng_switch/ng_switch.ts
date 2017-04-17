import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'ng-switch-sample-app',
  template: `
    <h4 class="ui horizontal divider header">
      Current choice is {{ choice }}
    </h4>

    <div class="ui raised segment">
      <ul [ngSwitch]="choice">
        <li *ngSwitchCase="1">First choice</li>
        <li *ngSwitchCase="2">Second choice</li>
        <li *ngSwitchCase="3">Third choice</li>
        <li *ngSwitchCase="4">Fourth choice</li>
        <li *ngSwitchCase="2">Second choice, again</li>
        <li *ngSwitchDefault>Default choice</li>
      </ul>
    </div>

    <div style="margin-top: 20px;">
      <button class="ui primary button" (click)="nextChoice()">
        Next choice
      </button>
    </div>
  `
})
export class NgSwitchSampleApp {
  choice: number;

  constructor() {
    this.choice = 1;
  }

  nextChoice() {
    this.choice += 1;

    if (this.choice > 5) {
      this.choice = 1;
    }
  }
}

@NgModule({
  declarations: [ NgSwitchSampleApp ],
  exports: [ NgSwitchSampleApp ],
  imports: [ BrowserModule ]
})
export class NgSwitchSampleAppModule {}

