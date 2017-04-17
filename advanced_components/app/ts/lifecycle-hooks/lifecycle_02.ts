import {
  NgModule,
  Component,
  Input,
  SimpleChange,
  OnInit,
  OnDestroy,
  OnChanges,
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
  selector: 'on-change',
  template: `
  <div class="ui comments">
    <div class="comment">
      <a class="avatar">
        <img src="app/images/avatars/matt.jpg">
      </a>
      <div class="content">
        <a class="author">{{name}}</a>
        <div class="text">
          {{comment}}
        </div>
      </div>
    </div>
  </div>
  `
})
class OnChangeCmp implements OnChanges {
  @Input('name') name: string;
  @Input('comment') comment: string;

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('Changes', changes);
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

  <h4 class="ui horizontal divider header">
    OnChange
  </h4>

  <div class="ui form">
    <div class="field">
      <label>Name</label>
      <input type="text" #namefld value="{{name}}"
             (keyup)="setValues(namefld, commentfld)">
    </div>

    <div class="field">
      <label>Comment</label>
      <textarea (keyup)="setValues(namefld, commentfld)"
                rows="2" #commentfld>{{comment}}</textarea>
    </div>
  </div>

  <on-change [name]="name" [comment]="comment"></on-change>
  `
})
export class LifecycleSampleApp2 {
  display: boolean;
  name: string;
  comment: string;

  constructor() {
    this.display = true;
    this.name = 'Felipe Coury';
    this.comment = 'I am learning so much!';
  }

  setValues(namefld, commentfld): void {
    this.name = namefld.value;
    this.comment = commentfld.value;
  }

  toggle(): void {
    this.display = !this.display;
  }
}

@NgModule({
  declarations: [
    LifecycleSampleApp2,
    OnInitCmp,
    OnChangeCmp
  ],
  imports: [ CommonModule ],
  exports: [ LifecycleSampleApp2 ]
})
export class LifecycleSampleApp2Module {}



