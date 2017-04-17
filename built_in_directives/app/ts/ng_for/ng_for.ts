import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'ng-for-sample-app',
  template: `
  <h4 class="ui horizontal divider header">
    Simple list of strings
  </h4>

  <div class="ui list" *ngFor="let c of cities">
    <div class="item">{{ c }}</div>
  </div>

  <h4 class="ui horizontal divider header">
    List of objects
  </h4>

  <table class="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tr *ngFor="let p of people">
      <td>{{ p.name }}</td>
      <td>{{ p.age }}</td>
      <td>{{ p.city }}</td>
    </tr>
  </table>

  <h4 class="ui horizontal divider header">
    Nested data
  </h4>

  <div *ngFor="let item of peopleByCity">
    <h2 class="ui header">{{ item.city }}</h2>

    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tr *ngFor="let p of item.people">
        <td>{{ p.name }}</td>
        <td>{{ p.age }}</td>
      </tr>
    </table>
  </div>

  <h4 class="ui horizontal divider header">
    List with index
  </h4>

  <div class="ui list" *ngFor="let c of cities; let num = index">
    <div class="item">{{ num+1 }} - {{ c }}</div>
  </div>
  `
})
export class NgForSampleApp {
  cities: string[];
  people: Object[];
  peopleByCity: Object;

  constructor() {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' }
    ];
    this.peopleByCity = [
      {
        city: 'Miami',
        people: [
          { name: 'John', age: 12 },
          { name: 'Angel', age: 22 }
        ]
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'Felipe', age: 36 }
        ]
      }
    ];
  };
}

@NgModule({
  declarations: [ NgForSampleApp ],
  exports: [ NgForSampleApp ],
  imports: [ BrowserModule ]
})
export class NgForSampleAppModule {}

