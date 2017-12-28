import {Component, ViewChild} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";
import { fadeAnimation } from "./shared/fade.animation";
import {RouterOutlet} from "@angular/router";
import {NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF} from "ngx-image-gallery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements AfterViewInit {
  title = 'CoverX';

  // @Input() isVisible: boolean = true;
  constructor() { }

  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }

  getRouterOutletState(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }
}
