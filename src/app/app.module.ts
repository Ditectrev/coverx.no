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
import { MusicBagsComponent } from './music-bags/music-bags.component';
import { MusicCoversComponent } from './music-covers/music-covers.component';
import { ErrorPageComponent } from './error-page-component/error-page.component';
import { SubcleaningBags1Component } from './subcleaning-bags1/subcleaning-bags1.component';
import { SubcleaningBags2Component } from './subcleaning-bags2/subcleaning-bags2.component';
import { SubmopperBags2Component } from './submopper-bags2/submopper-bags2.component';
import { SubmopperBags1Component } from './submopper-bags1/submopper-bags1.component';
import { StandsBagsComponent } from './stands-bags/stands-bags.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {GalleryConfig, GalleryModule} from 'ng-gallery';
import { NgxGalleryModule } from 'ngx-gallery';

import { MailService } from "./shared/mail.service";

import { AgmCoreModule } from '@agm/core';
import { MomentModule } from "angular2-moment";

import { appRoutes } from "../routes";
import { AutographComponent } from './autograph/autograph.component';

export const config: GalleryConfig = {
  // ...
};

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
    MusicCoversComponent,
    ErrorPageComponent,
    SubcleaningBags1Component,
    SubcleaningBags2Component,
    SubmopperBags2Component,
    SubmopperBags1Component,
    StandsBagsComponent,
    AutographComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule,
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes),
    GalleryModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4C0OuttrXwqjsHNQhIjYvPeQyq7zLvG4'
    })
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
