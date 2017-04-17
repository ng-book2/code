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

describe('ArtistComponent', () => {
  beforeEach(() => {
    configureMusicTests();
  });

  describe('initialization', () => {
    it('retrieves the artist', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        router.navigateByUrl('/artists/2');
        advance(fixture);

        expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith('2');
      })));
  });

  describe('back', () => {
    it('returns to the previous location', fakeAsync(
      inject([Router, Location],
             (router: Router, location: Location) => {
        const fixture = createRoot(router, RootCmp);
        expect(location.path()).toEqual('/');

        router.navigateByUrl('/artists/2');
        advance(fixture);
        expect(location.path()).toEqual('/artists/2');

        const artist = fixture.debugElement.children[1].componentInstance;
        artist.back();
        advance(fixture);

        expect(location.path()).toEqual('/');
      })));
  });

  describe('renderArtist', () => {
    it('renders album info', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        let artist = {name: 'ARTIST NAME', images: [{url: 'IMAGE_1'}]};
        mockSpotifyService.setResponse(artist);

        router.navigateByUrl('/artists/2');
        advance(fixture);

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h1').innerHTML).toContain('ARTIST NAME');
        expect(compiled.querySelector('img').src).toContain('IMAGE_1');
      })));
  });
});
