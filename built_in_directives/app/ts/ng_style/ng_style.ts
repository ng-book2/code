import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'style-sample-app',
  template: `
    <h4 class="ui horizontal divider header">
      style.background-color
    </h4>

    <div [style.background-color]="'yellow'">
      Uses fixed yellow background
    </div>

    <h4 class="ui horizontal divider header">
      ngStyle literal
    </h4>

    <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
      Uses fixed white text on blue background
    </div>

    <h4 class="ui horizontal divider header">
      ngStyle literal and style.font-size.px
    </h4>

    <div>
      <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
        red text
      </span>
    </div>

    <h4 class="ui horizontal divider header">
      ngStyle with an object
    </h4>

    <div [ngStyle]="style"></div>

    <h4 class="ui horizontal divider header">
      ngStyle with object property from variable
    </h4>

    <div>
      <span [ngStyle]="{color: color}">
        {{ color }} text
      </span>
    </div>

    <h4 class="ui horizontal divider header">
      style from variable
    </h4>

    <div [style.background-color]="color"
         style="color: white;">
      {{ color }} background
    </div>

    <h4 class="ui horizontal divider header">
      Play with the color and font-size here
    </h4>

    <div class="ui input">
      <input type="text" name="color" value="{{color}}" #colorinput>
    </div>

    <div class="ui input">
      <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
    </div>

    <button class="ui primary button" (click)="apply(colorinput.value, fontinput.value)">
      Apply settings
    </button>
  `
})
export class NgStyleSampleApp {
  color: string;
  fontSize: number;
  style: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() {
    this.fontSize = 16;
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '30px'
    };
  }

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
}

@NgModule({
  declarations: [ NgStyleSampleApp ],
  exports: [ NgStyleSampleApp ],
  imports: [ BrowserModule ]
})
export class NgStyleSampleAppModule {}

