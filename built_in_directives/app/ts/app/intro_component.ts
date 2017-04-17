import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  template: `
  <div class="intro">
    <p>
    This project shows examples of Angular's built-in directives. 
    Click on the menu on the right to try out each example!
    </p>

    <p>
    Many of the examples use console.log so make sure you have your
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
