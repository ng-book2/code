/*
 * Angular
 */
import {
  Component,
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
 * Services
 */
import { ApiService } from 'services/ApiService';

/*
 * Webpack
 */
require('css/styles.css');

@Component({
  selector: 'di-sample-app',
  template: `
  <button (click)="invokeApi()">Invoke API</button>
  `
})
class DiSampleApp {
  constructor(private apiService: ApiService) {
  }

  invokeApi(): void {
    this.apiService.get();
  }
}

@NgModule({
  declarations: [ DiSampleApp ],
  imports: [ BrowserModule ],
  bootstrap: [ DiSampleApp ],
  providers: [ ApiService ]   // <-- here
})
class DiSampleAppAppModule {}

platformBrowserDynamic().bootstrapModule(DiSampleAppAppModule)
  .catch((err: any) => console.error(err));
