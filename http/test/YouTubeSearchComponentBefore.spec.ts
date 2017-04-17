import {
  TestBed,
  inject,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response
} from '@angular/http';

import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YouTubeService
} from '../app/ts/components/YouTubeSearchComponent';

describe('MoreHTTPRequests (before)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        YouTubeService,
        BaseRequestOptions,
        MockBackend,
        { provide: YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
        { provide: YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' },
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
                         return new Http(backend, defaultOptions);
                       }, deps: [MockBackend, BaseRequestOptions] }
      ]
    });

  });

  describe('search', () => {
    it('parses YouTube response',
      inject([YouTubeService, MockBackend], fakeAsync((service, backend) => {
        let res;

        backend.connections.subscribe(c => {
          c.mockRespond(new Response(<any>{
            body: `
            {
              "items": [
                {
                  "id": { "videoId": "VIDEO_ID" },
                  "snippet": {
                    "title": "TITLE",
                    "description": "DESCRIPTION",
                    "thumbnails": {
                      "high": { "url": "THUMBNAIL_URL" }
                    }}}]}`
          }));
        });

        service.search('hey').subscribe(_res => {
          res = _res;
        });
        tick();

        let video = res[0];
        expect(video.id).toEqual('VIDEO_ID');
        expect(video.title).toEqual('TITLE');
        expect(video.description).toEqual('DESCRIPTION');
        expect(video.thumbnailUrl).toEqual('THUMBNAIL_URL');
      }))
    )
  });
});
