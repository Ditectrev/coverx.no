import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BoatCoversComponent } from './boat-covers/boat-covers.component';
import { BoatChairsComponent } from './boat-chairs/boat-chairs.component';
import { FooterComponent } from './footer/footer.component';
import { CleaningBagsComponent } from './cleaning-bags/cleaning-bags.component';
import { BagsComponent } from './bags/bags.component';
import { MopperBagsComponent } from './mopper-bags/mopper-bags.component';
import { BoatsComponent } from './boats/boats.component';
import { CoversComponent } from './covers/covers.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {GalleryConfig, GalleryModule} from 'ng-gallery'

import { WINDOW_PROVIDERS } from './shared/window.service';
import { MailService } from "./shared/mail.service";

import { AgmCoreModule } from '@agm/core';

import { appRoutes } from "../routes";
import { MusicBagsComponent } from './music-bags/music-bags.component';
import { MusicCoversComponent } from './music-covers/music-covers.component';


export const config: GalleryConfig = {
  // ...
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoPlayerComponent,
    AboutComponent,
    ContactComponent,
    BoatCoversComponent,
    BoatChairsComponent,
    FooterComponent,
    CleaningBagsComponent,
    BagsComponent,
    MopperBagsComponent,
    BoatsComponent,
    CoversComponent,
    HomeComponent,
    MusicBagsComponent,
    MusicCoversComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    GalleryModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4C0OuttrXwqjsHNQhIjYvPeQyq7zLvG4'
    })
  ],
  providers: [WINDOW_PROVIDERS, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
