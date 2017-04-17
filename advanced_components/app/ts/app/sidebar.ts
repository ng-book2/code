/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */
import {
  Component,
  Input
} from '@angular/core';
import { Location } from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { ExampleDef } from './example';

/*
 * SidebarItemComponent
 *
 * Defines a single item in the sidebar. Links to the designated component and
 * marks the current item as active.
 * 
 */
@Component({
  selector: 'sidebar-item',
  template: `
<a class="item" 
  [ngClass]="{ active: isActive() }"
  [routerLink]="[item.path]">
  {{ item.label }}
</a>
  `
})
export class SidebarItemComponent {
  @Input('item') item: ExampleDef;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private location: Location) {
  }

  // Checks if this current example is the selected one
  isActive(): boolean {
    return `/${this.item.path}` === this.location.path();
  }
}

/*
 * SidebarComponent
 *
 * Given a list of ExampleDefs, creates a sidebar for those items.
 * 
 */
@Component({
  selector: 'sidebar',
  template: `
<div class="ui vertical pointing menu">
  <sidebar-item 
    [item]="item"
    *ngFor="let item of items">
    </sidebar-item>
</div>
  `
})
export class SidebarComponent {
  @Input('items') items: ExampleDef[];
}

