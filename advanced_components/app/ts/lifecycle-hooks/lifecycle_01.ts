import {
  NgModule,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'on-init',
  template: `
  <div class="ui label">
    <i class="cubes icon"></i> Init/Destroy
  </div>
  `
})
class OnInitCmp implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }
}

@Component({
  selector: 'lifecycle-sample-app',
  template: `
  <h4 class="ui horizontal divider header">
    OnInit and OnDestroy
  </h4>

  <button class="ui primary button" (click)="toggle()">
    Toggle
  </button>
  <on-init *ngIf="display"></on-init>
  `
})
export class LifecycleSampleApp1 {
  display: boolean;

  constructor() {
    this.display = true;
  }

  toggle(): void {
    this.display = !this.display;
  }
}

@NgModule({
  declarations: [
    LifecycleSampleApp1,
    OnInitCmp
  ],
  imports: [ CommonModule ],
  exports: [ LifecycleSampleApp1 ]
})
export class LifecycleSampleApp1Module {}


