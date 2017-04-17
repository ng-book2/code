/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

// Load up Angular dependencies
import {
  NgModule,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';

// App Container Dependencies
import { IntroComponent } from './app/intro_component';
import { ExampleDef } from './app/example';
import { SidebarComponent, SidebarItemComponent } from './app/sidebar';
import './assets';

 /* tslint:disable:max-line-length */

// Individual Examples here
import { NgForSampleApp, NgForSampleAppModule } from './ng_for/ng_for';
import { NgSwitchSampleApp, NgSwitchSampleAppModule } from './ng_switch/ng_switch';
import { NgStyleSampleApp, NgStyleSampleAppModule } from './ng_style/ng_style';
import { NgClassSampleApp, NgClassSampleAppModule } from './ng_class/ng_class';
import { NgNonBindableSampleApp, NgNonBindableSampleAppModule } from './ng_non_bindable/ng_non_bindable';

/*
 * Here's the master list of our examples for this chapter.
 */
let examples: ExampleDef[] = [
  {label: 'Intro',          name: 'Root',          path: '',                component: IntroComponent},
  {label: 'NgFor',          name: 'NgFor',         path: 'ng_for',          component: NgForSampleApp },
  {label: 'NgSwitch',       name: 'NgSwitch',      path: 'ng_switch',       component: NgSwitchSampleApp },
  {label: 'NgStyle',        name: 'NgStyle',       path: 'ng_style',        component: NgStyleSampleApp },
  {label: 'NgClass',        name: 'NgClass',       path: 'ng_class',        component: NgClassSampleApp },
  {label: 'NgNonBindable',  name: 'NgNonBindable', path: 'ng_non_bindable', component: NgNonBindableSampleApp },
];

/* tslint:enable:max-line-length */

// dynamically configure the router based on our ExampleDefs
const routes: Routes = examples
  .map( (example: ExampleDef) => ({
    path: example.path, component: example.component, pathMatch: 'full'
  }));

@Component({
  selector: 'built-in-directives-app',
  template: `
  <!-- Menu Bar -->
  <div class="ui menu">
    <div class="ui container">
      <a href="#" class="header item">
        <img class="logo" 
             src="${require('images/logos/ng-book-2-minibook.png')}" />
        ng-book 2
      </a>
      <div class="header item borderless">
        <h1 class="ui header">
          Angular 2 Built-in Directives
        </h1>
      </div>
    </div>
  </div>

  <div class="ui grid container">
    <div class="four wide column">
      <sidebar [items]="examples"></sidebar>
    </div>

    <div class="ui main text container eight wide column">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
class BuiltInDirectivesApp {
  examples: ExampleDef[];

  constructor(private router: Router) {
    this.examples = examples; // store the outer examples
  }
}

@NgModule({
  declarations: [
    BuiltInDirectivesApp,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgForSampleAppModule,
    NgSwitchSampleAppModule,
    NgStyleSampleAppModule,
    NgClassSampleAppModule,
    NgNonBindableSampleAppModule
  ],
  bootstrap: [ BuiltInDirectivesApp ],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
class BuiltInDirectivesAppModule {}

platformBrowserDynamic().bootstrapModule(BuiltInDirectivesAppModule)
  .catch((err: any) => console.error(err));
