/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

import {
  Component
} from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {
  createStore,
  Store,
  StoreEnhancer
} from 'redux';
import { counterReducer } from './counter-reducer';
import { AppState } from './app-state';
import { AppStore } from './app-store';
import CounterComponent from './CounterComponent';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);

@Component({
  selector: 'minimal-redux-app',
  template: `
  <div>
    <counter-component>
    </counter-component>
  </div>
  `
})
class CounterApp {
}

@NgModule({
  declarations: [
    CounterApp,
    CounterComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [ CounterApp ],
  providers: [
    {provide: AppStore, useValue: store }
  ]

})
class CounterAppAppModule {}

platformBrowserDynamic().bootstrapModule(CounterAppAppModule)
  .catch(err => console.error(err));

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
// require('../app/ts/vendor');
require('./app-store');
require('./app-state');
require('./counter-reducer');
require('./counter-action-creators');
require('./CounterComponent');
