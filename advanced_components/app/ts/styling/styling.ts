import { NgModule } from "@angular/core";
import { Component, ViewEncapsulation } from '@angular/core';
let externalCSSUrl: string = require('file-loader!./external.css'); // webpack gives a URL

@Component({
  selector: 'inline-style',
  styles: [`
  .highlight {
    border: 2px solid red;
    background-color: yellow;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    Inline style example
  </h4>

  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `
})
class InlineStyle {
}

@Component({
  selector: 'external-style',
  styleUrls: [externalCSSUrl],
  template: `
  <h4 class="ui horizontal divider header">
    External style example
  </h4>

  <div class="highlight">
    This uses component <code>styleUrls</code>
    property
  </div>
  `
})
class ExternalStyle {
}

@Component({
  selector: `native-encapsulation`,
  styles: [`
  .highlight {
    text-align: center;
    border: 2px solid black;
    border-radius: 3px;
    margin-botton: 20px;
  }`],
  template: `
  <h4 class="ui horizontal divider header">
    Native encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.Native</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.Native
})
class NativeEncapsulation {
}

@Component({
  selector: `no-encapsulation`,
  styles: [`
  .highlight {
    border: 2px dashed red;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    No encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.None</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
class NoEncapsulation {
}

@Component({
  selector: 'style-sample-app',
  template: `
    <inline-style></inline-style>
    <external-style></external-style>
    <native-encapsulation></native-encapsulation>
    <no-encapsulation></no-encapsulation>
  `
})
export class StyleSampleApp {
}


const components = [
  StyleSampleApp,
  InlineStyle,
  ExternalStyle,
  NativeEncapsulation,
  NoEncapsulation 
];

@NgModule({
  declarations: components,
  exports: components
})
export class StyleSampleAppModule {
}

