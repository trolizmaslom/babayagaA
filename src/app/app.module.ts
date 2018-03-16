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
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouting

  ],
  providers: [
    ConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
