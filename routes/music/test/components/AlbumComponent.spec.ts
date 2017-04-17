import {
  inject,
  fakeAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MockSpotifyService } from '../mocks/spotify';
import { SpotifyService } from '../../app/ts/services/SpotifyService';
import {
  advance,
  createRoot,
  RootCmp,
  configureMusicTests
} from '../MusicTestHelpers';

describe('AlbumComponent', () => {
  beforeEach(() => {
    configureMusicTests();
  });

  describe('initialization', () => {
    it('retrieves the album', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        router.navigateByUrl('/albums/1');
        advance(fixture);

        expect(mockSpotifyService.getAlbumSpy).toHaveBeenCalledWith('1');
      })));
  });

  describe('back', () => {
    it('returns to the previous location', fakeAsync(
      inject([Router, Location],
             (router: Router, location: Location) => {
        const fixture = createRoot(router, RootCmp);
        expect(location.path()).toEqual('/');

        router.navigateByUrl('/albums/1');
        advance(fixture);
        expect(location.path()).toEqual('/albums/1');

        const album = fixture.debugElement.children[1].componentInstance;
        album.back();
        advance(fixture);

        expect(location.path()).toEqual('/');
      })));
  });

  describe('renderAlbum', () => {
    it('renders album info', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        let album = {
          name: 'ALBUM NAME',
          artists: [{name: 'ARTIST NAME'}],
          images: [null, {url: 'IMAGE_2'}],
          tracks: {
            items: [{id: 1, name: 'TRACK 1'},{id: 2, name: 'TRACK 2'}]
          }
        };
        mockSpotifyService.setResponse(album);

        router.navigateByUrl('/albums/1');
        advance(fixture);

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h1').innerHTML).toContain('ALBUM NAME');
        expect(compiled.querySelector('h2').innerHTML).toContain('ARTIST NAME');

        var links = compiled.querySelectorAll('a');
        expect(links[0].innerText).toContain('TRACK 1');
        expect(links[1].innerText).toContain('TRACK 2');
      })));
  });
});


