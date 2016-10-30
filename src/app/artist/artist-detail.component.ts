import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: 'artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit {

  artist;
  // artistId='630662ea-1c7d-4208-99fd-ba3afec20f0c';
  artistId: string;
  constructor(private route: ActivatedRoute, private artistService: ArtistService) {
      console.log("params: ", route.snapshot.params);
      this.artistId = route.snapshot.params['artistId'];
      this.artist = this.artistService.getArtist(this.artistId);
  }

  ngOnInit(){
    
  }
}
