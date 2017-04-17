/* 
 * Angular
 */
import {
  Component
} from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

/* 
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');

/* 
 * Our Demos
 */
import {DemoFormSku} from
  './forms/demo_form_sku';
import {DemoFormSkuBuilder} from
  './forms/demo_form_sku_with_builder';
import {DemoFormWithValidationsShorthand} from
  './forms/demo_form_with_validations_shorthand';
import {DemoFormWithValidationsExplicit} from
  './forms/demo_form_with_validations_explicit';
import {DemoFormWithCustomValidations} from
   './forms/demo_form_with_custom_validations';
import {DemoFormWithEvents} from
   './forms/demo_form_with_events';
import {DemoFormNgModel} from
  './forms/demo_form_ng_model';

/*
 * Webpack
 */
@Component({
  selector: 'forms-demo-app',
  template: `
<div>
  <demo-form-ng-model></demo-form-ng-model>
  <demo-form-with-events></demo-form-with-events>
  <demo-form-with-custom-validations></demo-form-with-custom-validations>
  <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
  <demo-form-with-validations-explicit></demo-form-with-validations-explicit>
  <demo-form-sku-builder></demo-form-sku-builder>
  <demo-form-sku></demo-form-sku>
</div>
  `
})
class FormsDemoApp {
}

@NgModule({
  declarations: [
    FormsDemoApp,
    DemoFormSku,
    DemoFormSkuBuilder,
    DemoFormWithValidationsShorthand,
    DemoFormWithValidationsExplicit,
    DemoFormWithCustomValidations,
    DemoFormWithEvents,
    DemoFormNgModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ FormsDemoApp ]
})
class FormsDemoAppModule {}

platformBrowserDynamic().bootstrapModule(FormsDemoAppModule)
  .catch((err: any) => console.error(err));
