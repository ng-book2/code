/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

 /*
  * Services
  */
import {SpotifyService} from 'services/SpotifyService';

@Component({
  selector: 'album',
  template: `
  <div *ngIf="album">
    <h1>{{ album.name }}</h1>
    <h2>{{ album.artists[0].name }}</h2>

    <p>
      <img src="{{ album.images[1].url }}">
    </p>

    <h3>Tracks</h3>
    <ol>
      <li *ngFor="let t of album.tracks.items">
        <a [routerLink]="['/tracks', t.id]">
          {{ t.name }}
        </a>
      </li>
    </ol>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService, // <-- injected
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getAlbum(this.id)
      .subscribe((res: any) => this.renderAlbum(res));
  }

  back(): void {
    this.location.back();
  }

  renderAlbum(res: any): void {
    this.album = res;
  }
}
