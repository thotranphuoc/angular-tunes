import { Component } from '@angular/core';

@Component({
  selector: 'angular-tunes',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  state = 'artist-list';
  selectedArtistId;
  showArtistDetail(artistId) {
    this.selectedArtistId = artistId;
    this.state = 'artist-detail';
    console.log('artist detail');
  }
}
