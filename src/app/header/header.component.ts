import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'
import {WINDOW} from '../shared/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public fixed: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let num = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    if (num > 600) {
      this.fixed = true;
    } else if (this.fixed && num < 600) {
      this.fixed = false;
    }
  }
}
