import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SlickModule} from 'ngx-slick';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import {ConnectService} from './_services/connect.service';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { StartLogoComponent } from './start-logo/start-logo.component';
import { P404Component } from './p404/p404.component';
import { NewsComponent } from './pages/news/news.component';
import { MediaComponent } from './pages/media/media.component';
import { PromoComponent } from './pages/promo/promo.component';
import { ArtComponent } from './pages/art/art.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouting} from './app.routing';
import { ScrollPromoDirective } from './_directives/scroll-promo.directive';
import { NewsInnerComponent } from './pages/news-inner/news-inner.component';
import {NewsService} from './_services/news-service.service';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { MediaInnerComponent } from './pages/media-inner/media-inner.component';
import { MediaListComponent } from './pages/media-list/media-list.component';
import { AppstoreComponent } from './elems/appstore/appstore.component';
import { AudioComponent } from './elems/audio/audio.component';
import { NewsBlockComponent } from './elems/news-block/news-block.component';
import { PhotoComponent } from './elems/photo/photo.component';
import {SmoothScrollDirective, SmoothScrollToDirective} from './_directives/ng2-SmoothScroll.directive';
import {MediaService} from './_services/media.service';
import { PromoListComponent } from './pages/promo-list/promo-list.component';
import { PromoInnerComponent } from './pages/promo-inner/promo-inner.component';
import {LocationService} from './_services/location.service';
import {PromoService} from './_services/promo.service';
import { ArtListComponent } from './pages/art-list/art-list.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { MouseWheelDirective } from './_directives/mouse-wheel.directive';
import { PopupComponent } from './elems/popup/popup.component';
import {CustomService} from './_services/custom.service';
import { ScrollNavDirective } from './_directives/scroll-nav.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartScreenComponent,
    StartLogoComponent,
    P404Component,
    NewsComponent,
    MediaComponent,
    PromoComponent,
    ArtComponent,
    ContactsComponent,
    ScrollPromoDirective,
    NewsInnerComponent,
    NewsListComponent,
    MediaInnerComponent,
    MediaListComponent,
    AppstoreComponent,
    AudioComponent,
    NewsBlockComponent,
    PhotoComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    PromoListComponent,
    PromoInnerComponent,
    ArtListComponent,
    MouseWheelDirective,
    PopupComponent,
    ScrollNavDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'yaga' }),
    SlickModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouting

  ],
  providers: [
    ConnectService,
    NewsService,
    MediaService,
    LocationService,
    PromoService,
    CustomService,
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
