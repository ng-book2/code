/*
 * MusicTestHelpers - this file helps configure boilerplate for setting up
 * routing testing for this app. 
 * 
 * See also: https://github.com/angular/angular/blame/9883e19e2e2839043557ae89740a8f6b299680d2/modules/@angular/router/test/integration.spec.ts#L11
 */
import {
  Component,
  NgModule
} from '@angular/core';
import {
  tick,
  TestBed
 } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture } from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
  Routes,
  provideRoutes,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from '../app/ts/components/AlbumComponent';
import { ArtistComponent } from '../app/ts/components/ArtistComponent';
import { SearchComponent } from '../app/ts/components/SearchComponent';
import { TrackComponent } from '../app/ts/components/TrackComponent';
import { MockSpotifyService } from './mocks/spotify';

@Component({
  selector: 'blank-cmp',
  template: ``
})
export class BlankCmp {
}

@Component({
  selector: 'root-cmp',
  template: `<router-outlet></router-outlet>`
})
export class RootCmp {
}

export const routerConfig: Routes = [
  { path: '', component: BlankCmp },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }
];

export function advance(fixture: ComponentFixture<any>): void {
  tick();
  fixture.detectChanges();
}

export function createRoot(router: Router,
                           componentType: any): ComponentFixture<any> {
  const f = TestBed.createComponent(componentType);
  advance(f);
  (<any>router).initialNavigation();
  advance(f);
  return f;
}

export function configureMusicTests() {
  const mockSpotifyService: MockSpotifyService = new MockSpotifyService();

  TestBed.configureTestingModule({
    imports: [
      { // TODO RouterTestingModule.withRoutes coming soon
        ngModule: RouterTestingModule,
        providers: [provideRoutes(routerConfig)]
      },
      TestModule
    ],
    providers: [
      mockSpotifyService.getProviders(),
      {
        provide: ActivatedRoute,
        useFactory: (r: Router) => r.routerState.root, deps: [ Router ]
      }
    ]
  });
}

@NgModule({
  imports: [RouterTestingModule, CommonModule],
  entryComponents: [
    BlankCmp,
    RootCmp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  exports: [
    BlankCmp,
    RootCmp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  declarations: [
    BlankCmp,
    RootCmp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ]
})
class TestModule {
}
