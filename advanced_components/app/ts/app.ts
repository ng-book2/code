/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

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
import { IntroComponent } from './app/intro_component';
import {
  StyleSampleApp,
  StyleSampleAppModule,
} from './styling/styling';
import { HostSampleApp, HostSampleAppModule } from './host/host';
import { HostSampleApp1, HostSampleApp1Module } from './host/steps/host_01';
import { HostSampleApp2, HostSampleApp2Module } from './host/steps/host_02';
import { HostSampleApp3, HostSampleApp3Module } from './host/steps/host_03';
import { HostSampleApp4, HostSampleApp4Module } from './host/steps/host_04';
import { TabsSampleApp, TabsSampleAppModule } from './tabs/tabs';
import {
  LifecycleSampleApp1,
  LifecycleSampleApp1Module
} from './lifecycle-hooks/lifecycle_01';
import {
  LifecycleSampleApp2,
  LifecycleSampleApp2Module
} from './lifecycle-hooks/lifecycle_02';
import {
  LifecycleSampleApp3,
  LifecycleSampleApp3Module
} from './lifecycle-hooks/lifecycle_03';
import {
  LifecycleSampleApp4,
  LifecycleSampleApp4Module
} from './lifecycle-hooks/lifecycle_04';
import {
  ForTemplateSampleApp,
  ForTemplateSampleAppModule
} from './templates/for';
import {
  IfTemplateSampleApp,
  IfTemplateSampleAppModule
} from './templates/if';
import { ContentProjectionSampleApp, Message } from './content-projection/content-projection';
import {
  OnPushChangeDetectionSampleApp,
  DefaultCmp,
  OnPushCmp
} from './change-detection/onpush';
import {
  ObservableChangeDetectionSampleApp,
  ObservableCmp
} from './change-detection/observables';
import { ExampleDef } from './app/example';
import {
  SidebarComponent,
  SidebarItemComponent
} from './app/sidebar';
import './assets';

/*
 * Here's the master list of our examples for this chapter.
 */
let examples: ExampleDef[] = [ /* tslint:disable:max-line-length */
  {label: 'Intro',                            name: 'Root',                       path: '',                       component: IntroComponent},
  {label: 'Styling',                          name: 'Styling',                    path: 'styling',                component: StyleSampleApp },
  {label: 'Modifying the Host (Step 1)',      name: 'Host1',                      path: 'host-step-1',            component: HostSampleApp1, dev: true},
  {label: 'Modifying the Host (Step 2)',      name: 'Host2',                      path: 'host-step-2',            component: HostSampleApp2, dev: true},
  {label: 'Modifying the Host (Step 3)',      name: 'Host3',                      path: 'host-step-3',            component: HostSampleApp3, dev: true},
  {label: 'Modifying the Host (Step 4)',      name: 'Host4',                      path: 'host-step-4',            component: HostSampleApp4, dev: true},
  {label: 'Modifying the Host',               name: 'Host',                       path: 'host-final',             component: HostSampleApp},
  {label: 'Tabs - Component Querying',        name: 'Tabs',                       path: 'tabs',                   component: TabsSampleApp},
  {label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1',                 path: 'lifecycle-hooks-1',      component: LifecycleSampleApp1 },
  {label: 'Lifecycle 2 - OnChanges',          name: 'Lifecycle2',                 path: 'lifecycle-hooks-2',      component: LifecycleSampleApp2 },
  {label: 'Lifecycle 3 - Differs',            name: 'Lifecycle3',                 path: 'lifecycle-hooks-3',      component: LifecycleSampleApp3 },
  {label: 'Lifecycle 4 - Full',               name: 'Lifecycle4',                 path: 'lifecycle-hooks-4',      component: LifecycleSampleApp4 },
  {label: 'ngBookFor',                        name: 'NgBookFor',                  path: 'ng-book-for',            component: ForTemplateSampleApp },
  {label: 'ngBookIf',                         name: 'NgBookIf',                   path: 'ng-book-if',             component: IfTemplateSampleApp },
  {label: 'Content Projection',               name: 'ContentProjection',          path: 'content-projection',     component: ContentProjectionSampleApp },
  {label: 'Change Detection - OnPush',        name: 'ChangeDetectionOnPush',      path: 'change-detection-onpush', component: OnPushChangeDetectionSampleApp },
  {label: 'Change Detection - Observables',   name: 'ChangeDetectionObservables', path: 'change-detection-observ', component: ObservableChangeDetectionSampleApp },
]; /* tslint:enable:max-line-length */

// dynamically configure the router based on our ExampleDefs
const routes: Routes = examples
  .map( (example: ExampleDef) => ({
    path: example.path, component: example.component, pathMatch: 'full'
  }));

@Component({
  selector: 'advanced-components-app',
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
          Angular 2 Advanced Components
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
class AdvancedComponentsApp {
  examples: ExampleDef[];

  constructor(private router: Router) {
    this.examples = examples; // store the outer examples
  }
}

@NgModule({
  declarations: [
    AdvancedComponentsApp,
    IntroComponent,
    ContentProjectionSampleApp,
    Message,
    OnPushChangeDetectionSampleApp,
    DefaultCmp,
    OnPushCmp,
    ObservableChangeDetectionSampleApp,
    ObservableCmp,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // <-- routes
    CommonModule,
    HostSampleAppModule,
    HostSampleApp1Module,
    HostSampleApp2Module,
    HostSampleApp3Module,
    HostSampleApp4Module,
    StyleSampleAppModule,
    LifecycleSampleApp1Module,
    LifecycleSampleApp2Module,
    LifecycleSampleApp3Module,
    LifecycleSampleApp4Module,
    TabsSampleAppModule,
    ForTemplateSampleAppModule,
    IfTemplateSampleAppModule,
  ],
  bootstrap: [ AdvancedComponentsApp ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
class AdvancedComponentsAppModule {}

platformBrowserDynamic().bootstrapModule(AdvancedComponentsAppModule)
  .catch((err: any) => console.error(err));
