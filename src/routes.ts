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
  { path: '', component: HomeComponent, data: { animation: 'page9' } },
  { path: 'om-meg', component: AboutComponent, data: { animation: 'page1' } },
  { path: 'overtrekker', component: CoversComponent, data: { animation: 'page8' } },
  { path: 'musikkovertrekker', component: MusicCoversComponent, data: { animation: 'page13' } },
  { path: 'battilbehor', component: BoatsComponent, data: { animation: 'page5' } },
  { path: 'batkalesjer', component: BoatCoversComponent, data: { animation: 'page5' } },
  { path: 'batputer', component: BoatChairsComponent, data: { animation: 'page5' } },
  { path: 'vesker', component: BagsComponent, data: { animation: 'page2' } },
  { path: 'rengjoringvesker', component: CleaningBagsComponent, data: { animation: 'page6' } },
  { path: 'moppervesker', component: MopperBagsComponent, data: { animation: 'page10' } },
  { path: 'musikkvesker', component: MusicBagsComponent, data: { animation: 'page12' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page7' } },
  { path: '', redirectTo: '/', pathMatch: 'full' }
  // TODO
   /*{
    path: 'not-found',
    component: ErrorPageComponent,
    data: {message: 'Page not found!'}
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: '/not-found' // Alternative to component in routes, which redirects to specific path.
  } */
];