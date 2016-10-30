import { RouterModule } from '@angular/router';

import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';

export const AppRoute = RouterModule.forRoot([
    { path: 'artists', component: ArtistListComponent },
    { path: 'artists/:artistId', component: ArtistDetailComponent },
    { path: '', redirectTo: '/artists', pathMatch: 'full' }  
])