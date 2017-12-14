import {Component, HostBinding, ViewChild, OnChanges} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";
import { fadeAnimation } from "./shared/fade.animation";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements AfterViewInit, OnChanges {
  title = 'CoverX';
  isVisible: boolean = true;
  visibility = 'shown';
  // elem = document.getElementsByClassName('back-to-top');

  // @Input() isVisible: boolean = true;
  constructor() { }

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }

  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0; // Scroll to top.
    this.isVisible = !this.isVisible;
    // this.elem.setAttribute("style", "display: none");
  }

  getRouterOutletState(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }
}
