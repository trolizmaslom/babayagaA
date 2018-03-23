import {NewsComponent} from './pages/news/news.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {P404Component} from './p404/p404.component';
import {PromoComponent} from './pages/promo/promo.component';
import {MediaComponent} from './pages/media/media.component';
import {ArtComponent} from './pages/art/art.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {RouterModule} from '@angular/router';
import {NewsInnerComponent} from './pages/news-inner/news-inner.component';
import {NewsListComponent} from './pages/news-list/news-list.component';
import {MediaInnerComponent} from './pages/media-inner/media-inner.component';
import {MediaListComponent} from './pages/media-list/media-list.component';
import {PromoListComponent} from './pages/promo-list/promo-list.component';
import {PromoInnerComponent} from './pages/promo-inner/promo-inner.component';
import {ArtListComponent} from './pages/art-list/art-list.component';

const routes = [
 // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: StartScreenComponent},
  {path: 'home', component: StartScreenComponent},
  {path: 'news', component: NewsComponent, data: {state: 'news'}},
  {path: 'newslist', component: NewsListComponent, data: {state: 'newslist'}},
  {path: 'article/:article/:root', component: NewsInnerComponent, data: {state: 'inner'}},
  {path: 'gallery/:article/:root', component: MediaInnerComponent, data: {state: 'inner'}},
  {path: 'product/:article/:root', component: PromoInnerComponent, data: {state: 'inner'}},
  {path: 'media', component: MediaComponent, data: {state: 'media'}},
  {path: 'medialist', component: MediaListComponent, data: {state: 'medialist'}},
  {path: 'medialist/:anchor', component: MediaListComponent, data: {state: 'medialist'}},
  {path: 'promo', component: PromoComponent, data: {state: 'promo'}},
  {path: 'promolist', component: PromoListComponent, data: {state: 'promolist'}},
  {path: 'promolist/:anchor', component: PromoListComponent, data: {state: 'promolist'}},
  {path: 'art', component: ArtComponent, data: {state: 'art'}},
  {path: 'artlist', component: ArtListComponent, data: {state: 'artlist'}},
  {path: 'contacts', component: ContactsComponent, data: {state: 'contacts'}},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: P404Component}
];

export const AppRouting = RouterModule.forRoot(routes);
