import { Routes } from "@angular/router";
import {AboutComponent} from "./app/about/about.component";
import {BagsComponent} from "./app/bags/bags.component";
import {BoatChairsComponent} from "./app/boat-chairs/boat-chairs.component";
import {BoatCoversComponent} from "./app/boat-covers/boat-covers.component";
import {BoatsComponent} from "./app/boats/boats.component";
import {CleaningBagsComponent} from "./app/cleaning-bags/cleaning-bags.component";
import {ContactComponent} from "./app/contact/contact.component";
import {MopperBagsComponent} from "./app/mopper-bags/mopper-bags.component";
import {CoversComponent} from "./app/covers/covers.component";
import {HomeComponent} from "./app/home/home.component";
import {MusicBagsComponent} from "./app/music-bags/music-bags.component";
import {MusicCoversComponent} from "./app/music-covers/music-covers.component";

export const appRoutes:Routes = [
  { path: 'om-meg', component: AboutComponent, data: { animation: 'page1' } },
  { path: 'vesker', component: BagsComponent, data: { animation: 'page2' } },
  { path: 'batputer', component: BoatChairsComponent, data: { animation: 'page3' } },
  { path: 'batkalesjer', component: BoatCoversComponent, data: { animation: 'page4' } },
  { path: 'battilbehor', component: BoatsComponent, data: { animation: 'page5' } },
  { path: 'rengjoringvesker', component: CleaningBagsComponent, data: { animation: 'page6' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page7' } },
  { path: 'overtrekker', component: CoversComponent, data: { animation: 'page8' } },
  { path: '', component: HomeComponent, data: { animation: 'page9' } },
  { path: 'mopperveske', component: MopperBagsComponent, data: { animation: 'page10' } },
  { path: 'musikkvesker', component: MusicBagsComponent, data: { animation: 'page12' } },
  { path: 'musikkovertrekker', component: MusicCoversComponent, data: { animation: 'page13' } },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];