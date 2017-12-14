import { Routes } from "@angular/router";
import { GalleryComponent } from "./app/gallery/gallery.component";
import { ImageDetailComponent } from "./app/image-detail/image-detail.component";
import {AboutComponent} from "./app/about/about.component";
import {BagsComponent} from "./app/bags/bags.component";
import {BoatChairsComponent} from "./app/boat-chairs/boat-chairs.component";
import {BoatCoversComponent} from "./app/boat-covers/boat-covers.component";
import {BoatsComponent} from "./app/boats/boats.component";
import {BreakfastBagsComponent} from "./app/breakfast-bags/breakfast-bags.component";
import {CleaningBagsComponent} from "./app/cleaning-bags/cleaning-bags.component";
import {ContactComponent} from "./app/contact/contact.component";
import {MopperBagsComponent} from "./app/mopper-bags/mopper-bags.component";
import {SpecialistBagsComponent} from "./app/specialist-bags/specialist-bags.component";
import {DraftsComponent} from "./app/drafts/drafts.component";
import {HomeComponent} from "./app/home/home.component";

export const appRoutes:Routes = [
  { path: 'om-meg', component: AboutComponent, data: { animation: 'page1' } },
  { path: 'vesker', component: BagsComponent, data: { animation: 'page2' } },
  { path: 'batputer', component: BoatChairsComponent, data: { animation: 'page3' } },
  { path: 'batkalesjer', component: BoatCoversComponent, data: { animation: 'page4' } },
  { path: 'battilbehor', component: BoatsComponent, data: { animation: 'page5' } },
  { path: 'frokostveske', component: BreakfastBagsComponent, data: { animation: 'page6' } },
  { path: 'rengjoringvesker', component: CleaningBagsComponent, data: { animation: 'page7' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page8' } },
  { path: 'overtrekker', component: DraftsComponent, data: { animation: 'page9' } },
  { path: 'galeria', component: GalleryComponent, data: { animation: 'page10' } },
  { path: '', component: HomeComponent, data: { animation: 'page11' } },
  { path: 'mopperveske', component: MopperBagsComponent, data: { animation: 'page12' } },
  { path: 'verktoyveske', component: SpecialistBagsComponent, data: { animation: 'page13' } },
  { path: 'image/:id', component: ImageDetailComponent, data: { animation: 'page14' } },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];