import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { ServicesComponent } from './services/services.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { BoatCoversComponent } from './boat-covers/boat-covers.component';
import { BoatChairsComponent } from './boat-chairs/boat-chairs.component';
import { FooterComponent } from './footer/footer.component';
import { CleaningBagsComponent } from './cleaning-bags/cleaning-bags.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { WINDOW_PROVIDERS } from './shared/window.service';
import { ImageService } from './shared/image.service';
import { ImageFilterPipe } from './shared/filter.pipe';

import { SmoothScrollToDirective, SmoothScrollDirective } from "../../node_modules/ng2-smooth-scroll";
import { AgmCoreModule } from '@agm/core';
// import { CountoModule } from 'angular2-counto';

import { appRoutes } from "../routes";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoPlayerComponent,
    AboutComponent,
    CounterComponent,
    ServicesComponent,
    CallToActionComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
    BoatCoversComponent,
    BoatChairsComponent,
    FooterComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    CleaningBagsComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CountoModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4C0OuttrXwqjsHNQhIjYvPeQyq7zLvG4'
    })
  ],
  providers: [WINDOW_PROVIDERS, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
