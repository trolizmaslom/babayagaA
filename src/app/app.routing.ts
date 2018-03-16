import {NewsComponent} from './pages/news/news.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {P404Component} from './p404/p404.component';
import {PromoComponent} from './pages/promo/promo.component';
import {MediaComponent} from './pages/media/media.component';
import {ArtComponent} from './pages/art/art.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: StartScreenComponent},
  {path: 'news', component: NewsComponent, data: {state: 'news'}},
  {path: 'media', component: MediaComponent, data: {state: 'media'}},
  {path: 'promo', component: PromoComponent, data: {state: 'promo'}},
  {path: 'art', component: ArtComponent, data: {state: 'art'}},
  {path: 'contacts', component: ContactsComponent, data: {state: 'contacts'}},
  {path: '**', component: P404Component}
];

export const AppRouting = RouterModule.forRoot(routes);
