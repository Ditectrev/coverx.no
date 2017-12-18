import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BoatCoversComponent } from './boat-covers/boat-covers.component';
import { BoatChairsComponent } from './boat-chairs/boat-chairs.component';
import { FooterComponent } from './footer/footer.component';
import { CleaningBagsComponent } from './cleaning-bags/cleaning-bags.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { BagsComponent } from './bags/bags.component';
import { MopperBagsComponent } from './mopper-bags/mopper-bags.component';
import { BreakfastBagsComponent } from './breakfast-bags/breakfast-bags.component';
import { SpecialistBagsComponent } from './specialist-bags/specialist-bags.component';
import { BoatsComponent } from './boats/boats.component';
import { DraftsComponent } from './drafts/drafts.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { WINDOW_PROVIDERS } from './shared/window.service';
import { ImageService } from './shared/image.service';
import { ImageFilterPipe } from './shared/filter.pipe';

import { SmoothScrollToDirective, SmoothScrollDirective } from "../../node_modules/ng2-smooth-scroll";
import { AgmCoreModule } from '@agm/core';
// import { CountoModule }  from 'angular2-counto';
import { NgxImageGalleryModule } from "ngx-image-gallery";

import { appRoutes } from "../routes";

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoPlayerComponent,
    AboutComponent,
    CounterComponent,
    CallToActionComponent,
    GalleryComponent,
    ContactComponent,
    BoatCoversComponent,
    BoatChairsComponent,
    FooterComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    CleaningBagsComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    BagsComponent,
    MopperBagsComponent,
    BreakfastBagsComponent,
    SpecialistBagsComponent,
    BoatsComponent,
    DraftsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxImageGalleryModule,
    // CountoModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4C0OuttrXwqjsHNQhIjYvPeQyq7zLvG4'
    })
  ],
  providers: [WINDOW_PROVIDERS, ImageService, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
