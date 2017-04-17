import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'intro',
  template: `
  <div class="intro">
    <p>
    This project shows examples on how to build several advanced components in
    Angular 2. Click on the menu on the right to try out each example!
    </p>

    <p>
    Many of the examples use <span>console.log</span> so make sure you have your
    browser's console open to see the debugging messages. 
    </p>

    <p>
    -- The ng-book team
    </p>
  </div>
  ` // '
})
export class IntroComponent {
}
