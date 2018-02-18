import {Component} from '@angular/core';
import { fadeAnimation } from "./shared/fade.animation";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'CoverX';

  getRouterOutletState(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }
}
