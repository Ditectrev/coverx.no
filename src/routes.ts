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
  { path: 'om-meg', component: AboutComponent },
  { path: 'vesker', component: BagsComponent },
  { path: 'batputer', component: BoatChairsComponent },
  { path: 'batkalesjer', component: BoatCoversComponent },
  { path: 'battilbehor', component: BoatsComponent },
  { path: 'frokostveske', component: BreakfastBagsComponent },
  { path: 'rengjoringvesker', component: CleaningBagsComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'overtrekker', component: DraftsComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: '', component: HomeComponent },
  { path: 'mopperveske', component: MopperBagsComponent },
  { path: 'verktoyveske', component: SpecialistBagsComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];