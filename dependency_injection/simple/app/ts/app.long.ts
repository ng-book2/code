/*
 * Angular
 */
import {
  Component,
  Inject,
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
 * Services
 */
import {ApiService} from 'services/ApiService';

/*
 * Webpack
 */
require('css/styles.css');
require('images/ng-book-2-minibook.png');

@Component({
  selector: 'di-sample-app',
  template: `
  <button (click)="invokeApi()">Invoke API</button>
  `
})
class DiSampleApp {
  apiService: ApiService;
  constructor(@Inject(ApiService) apiService) {
    this.apiService = apiService;
  }

  invokeApi(): void {
    this.apiService.get();
  }
}

@NgModule({
  declarations: [ DiSampleApp ],
  imports: [ BrowserModule ],
  bootstrap: [ DiSampleApp ],
  providers: [
    { provide: ApiService, useClass: ApiService }
  ]
})
class DiSampleAppAppModule {}

platformBrowserDynamic().bootstrapModule(DiSampleAppAppModule)
  .catch((err: any) => console.error(err));
