/*
 * Angular
 */
import { Component } from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

@Component({
  selector: 'more-http',
  template: `
  <h2>More Requests</h2>
  <button type="button" (click)="makePost()">Make Post</button>
  <button type="button" (click)="makeDelete()">Make Delete</button>
  <button type="button" (click)="makeHeaders()">Make Headers</button>
  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>
`
})
export class MoreHTTPRequests {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {
  }

  makePost(): void {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeHeaders(): void {
    let headers: Headers = new Headers();
    headers.append('X-API-TOKEN', 'ng-book');

    let opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe((res: Response) => {
        this.data = res.json();
      });
  }
}
