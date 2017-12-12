import {Component, Input, OnChanges} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class AppComponent implements AfterViewInit, OnChanges {
  title = 'CoverX';
  isVisible: boolean = true;
  visibility = 'shown';
  // elem = document.getElementsByClassName('back-to-top');

  // @Input() isVisible: boolean = true;

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
}
