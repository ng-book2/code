/*
 * Angular
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
 * Services
 */
import {ApiService, API_URL} from 'services/ApiService';

/*
 * Webpack
 */
require('css/styles.css');

@Component({
  selector: 'di-value-app',
  template: `
  <button (click)="invokeApi()">Invoke API</button>
  `
})
class DiValueApp {
  constructor(private apiService: ApiService) {
  }

  invokeApi(): void {
    this.apiService.get();
  }
}

const isProduction: boolean = false;

@NgModule({
  declarations: [ DiValueApp ],
  imports: [ BrowserModule ],
  bootstrap: [ DiValueApp ],
  providers: [
    { provide: ApiService, useClass: ApiService },
    {
      provide: API_URL,
      useValue: isProduction ?
        'https://production-api.sample.com' :
        'http://dev-api.sample.com'
    }
  ]
})
class DiValueAppAppModule {}

platformBrowserDynamic().bootstrapModule(DiValueAppAppModule)
  .catch((err: any) => console.error(err));
