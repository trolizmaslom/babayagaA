import { Component } from '@angular/core';
import {firstEnterAnimation} from './_animations/firstEnter.animation';

@Component({
  selector: 'app-root',
  animations: [firstEnterAnimation],
  template: `<main [@firstEnterAnimation]="getState(o)"><router-outlet #o="outlet"></router-outlet></main><app-nav></app-nav>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getState(outlet) {
    const result = outlet.activatedRouteData['state'];
    return result;
  }

}
