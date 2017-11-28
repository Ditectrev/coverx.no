import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BoatChairsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
