import {
  TestBed,
  inject,
  async
} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  RequestMethod,
} from '@angular/http';

import { MoreHTTPRequests } from '../app/ts/components/MoreHTTPRequests';

describe('MoreHTTPRequests', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ MoreHTTPRequests ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
                         return new Http(backend, defaultOptions);
                       },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    });
  });

  it('performs a POST',
     async(inject([MockBackend], (backend) => {
       let fixture = TestBed.createComponent(MoreHTTPRequests);
       let comp = fixture.debugElement.componentInstance;

       backend.connections.subscribe(c => {
         expect(c.request.url)
           .toBe('http://jsonplaceholder.typicode.com/posts');
         expect(c.request.method).toBe(RequestMethod.Post);
         c.mockRespond(new Response(<any>{body: '{"response": "OK"}'}));
       });

       comp.makePost();
       expect(comp.data).toEqual({'response': 'OK'});
     }))
  );

  it('performs a DELETE',
     async(inject([MockBackend], (backend) => {
       let fixture = TestBed.createComponent(MoreHTTPRequests);
       let comp = fixture.debugElement.componentInstance;

       backend.connections.subscribe(c => {
         expect(c.request.url)
           .toBe('http://jsonplaceholder.typicode.com/posts/1');
         expect(c.request.method).toBe(RequestMethod.Delete);
         c.mockRespond(new Response(<any>{body: '{"response": "OK"}'}));
       });

       comp.makeDelete();
       expect(comp.data).toEqual({'response': 'OK'});
     }))
    );

  it('sends correct headers',
     async(inject([MockBackend], (backend) => {
       let fixture = TestBed.createComponent(MoreHTTPRequests);
       let comp = fixture.debugElement.componentInstance;

       backend.connections.subscribe(c => {
         expect(c.request.url)
           .toBe('http://jsonplaceholder.typicode.com/posts/1');
         expect(c.request.headers.has('X-API-TOKEN')).toBeTruthy();
         expect(c.request.headers.get('X-API-TOKEN')).toEqual('ng-book');
         c.mockRespond(new Response(<any>{body: '{"response": "OK"}'}));
       });

       comp.makeHeaders();
       expect(comp.data).toEqual({'response': 'OK'});
     }))
    );
});
