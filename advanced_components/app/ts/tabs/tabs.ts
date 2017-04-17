import {
  NgModule,
  Component,
  QueryList,
  AfterContentInit,
  Input,
  ContentChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tab',
  template: `
  <div class="ui bottom attached tab segment"
       [class.active]="active">

    <ng-content></ng-content>

  </div>
  `
})
class Tab {
  @Input() title: string;
  active: boolean = false;
  name: string;
}

@Component({
  selector: 'tabset',
  template: `
  <div class="ui top attached tabular menu">
    <a *ngFor="let tab of tabs"
       class="item"
       [class.active]="tab.active"
       (click)="setActive(tab)">

      {{ tab.title }}

    </a>
  </div>
  <ng-content></ng-content>
  `
})
class Tabset implements AfterContentInit {
  @ContentChildren(Tab) tabs: QueryList<Tab>;

  constructor() {
  }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: Tab) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
}

@Component({
  selector: 'tabs-sample-app',
  template: `
  <tabset>
    <tab title="First tab">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Quibusdam magni quia ut harum facilis, ullam deleniti porro
      dignissimos quasi at molestiae sapiente natus, neque voluptatum
      ad consequuntur cupiditate nemo sunt.
    </tab>
    <tab *ngFor="let tab of tabs" [title]="tab.title">
      {{ tab.content }}
    </tab>
  </tabset>
  `
})
export class TabsSampleApp {
  tabs: any;

  constructor() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }
}

@NgModule({
  declarations: [
    TabsSampleApp,
    Tabset,
    Tab
  ],
  imports: [ CommonModule ],
  exports: [ TabsSampleApp ]
})
export class TabsSampleAppModule {}

