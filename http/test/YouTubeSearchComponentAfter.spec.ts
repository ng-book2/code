/// <reference path="./typings/karma-read-json.d.ts" />
import {
  TestBed,
  inject,
  fakeAsync,
  tick
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

const response = {
  'items': [
    {
      'id': { 'videoId': 'VIDEO_ID' },
      'snippet': {
        'title': 'TITLE',
        'description': 'DESCRIPTION',
        'thumbnails': {
          'high': { 'url': 'THUMBNAIL_URL' }
        }
      }
    }
  ]
};

describe('MoreHTTPRequests (after)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        YouTubeService,
        BaseRequestOptions,
        MockBackend,
        { provide: YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY' },
        { provide: YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL' },
        { provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions] }
      ]
    });
  });

  describe('search', () => {

    function search(term: string, response: any, callback) {
      return inject([YouTubeService, MockBackend],
        fakeAsync((service, backend) => {
          var req;
          var res;

          backend.connections.subscribe(c => {
            req = c.request;
            c.mockRespond(new Response(<any>{body: response}));
          });

          service.search(term).subscribe(_res => {
            res = _res;
          });
          tick();

          callback(req, res);
        })
      )
    }

    it('parses YouTube video id', search('hey', response, (req, res) => {
      let video = res[0];
      expect(video.id).toEqual('VIDEO_ID');
    }));

    it('parses YouTube video title', search('hey', response, (req, res) => {
      let video = res[0];
      expect(video.title).toEqual('TITLE');
    }));

    it('parses YouTube video description', search('hey', response, (req, res) => {
      let video = res[0];
      expect(video.description).toEqual('DESCRIPTION');
    }));

    it('parses YouTube video thumbnail', search('hey', response, (req, res) => {
      let video = res[0];
      expect(video.description).toEqual('DESCRIPTION');
    }));

    it('sends the query', search('term', response, (req, res) => {
      expect(req.url).toContain('q=term');
    }));

    it('sends the API key', search('term', response, (req, res) => {
      expect(req.url).toContain('key=YOUTUBE_API_KEY');
    }));

    it('uses the provided YouTube URL', search('term', response, (req, res) => {
      expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
    }));
  });
});
