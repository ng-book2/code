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

describe("TrackComponent", () => {
  beforeEach(() => {
    configureMusicTests();
  });

  describe('initialization', () => {
    it('retrieves the track', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);
        advance(fixture);

        router.navigateByUrl('/tracks/1');
        advance(fixture);

        expect(mockSpotifyService.getTrackSpy).toHaveBeenCalledWith('1');
      })));
  });


  describe('back', () => {
    it('returns to the previous location', fakeAsync(
      inject([Router, Location],
             (router: Router, location: Location) => {
        const fixture = createRoot(router, RootCmp);
        expect(location.path()).toEqual('/');

        router.navigateByUrl('/tracks/1');
        advance(fixture);
        expect(location.path()).toEqual('/tracks/1');

        const album = fixture.debugElement.children[1].componentInstance;
        album.back();
        advance(fixture);

        expect(location.path()).toEqual('/');
      })));
  });

  describe('renderTrack', () => {
    it('renders track info', fakeAsync(
      inject([Router, SpotifyService],
             (router: Router,
              mockSpotifyService: MockSpotifyService) => {
        const fixture = createRoot(router, RootCmp);

        let response = {
          name: 'TRACK NAME',
          album: { images: [{url: 'IMAGE_0.png'}, {url: 'IMAGE_1.png'}] } };
        mockSpotifyService.setResponse(response);

        router.navigateByUrl('/tracks/1');
        advance(fixture);

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').innerText).toContain('TRACK NAME');
      })));
  });
});
