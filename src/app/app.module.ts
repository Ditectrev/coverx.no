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
import { SpecialistBagsComponent } from './specialist-bags/specialist-bags.component';
import { BoatsComponent } from './boats/boats.component';
import { CoversComponent } from './covers/covers.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { WINDOW_PROVIDERS } from './shared/window.service';
import { MailService } from "./shared/mail.service";

import { AgmCoreModule } from '@agm/core';
import { NgxImageGalleryModule } from "ngx-image-gallery";

import { appRoutes } from "../routes";

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
    SpecialistBagsComponent,
    BoatsComponent,
    CoversComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxImageGalleryModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4C0OuttrXwqjsHNQhIjYvPeQyq7zLvG4'
    })
  ],
  providers: [WINDOW_PROVIDERS, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
