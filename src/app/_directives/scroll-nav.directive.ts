import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Directive({
  selector: '[appScrollNav]'
})
export class ScrollNavDirective {
  navArray = ['news', 'media', 'promo', 'art', 'contacts'];
  iterator = 10;
  lastDirection;
  i = 0;
  @Input() stater;
  constructor(public el: ElementRef,
              public router: Router,
              public  platformLocation: PlatformLocation) { }
  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

  mouseWheelFunc(event: any) {
    if (this.stater !== 'show') {
      const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
      if (delta > 0) {
        this.checkNav(-1);
      } else if (delta < 0) {
        this.checkNav(1);
      }
    }
  }
  checkNav(dir) {
    const target = this.el.nativeElement;
    const torso = target.getElementsByClassName('promo__torso')[0];
    const scrollPos = torso.getBoundingClientRect().top;
    const torsoHeight = torso.getBoundingClientRect().height;
    const screenHeight = target.getBoundingClientRect().height;
    if (scrollPos >= 0 && dir < 0) {
      console.log('im in top' + this.i);
      this.navigate(dir);
    } else if (Math.abs(scrollPos) + screenHeight + 5 >= torsoHeight && dir > 0) {
      console.log('im in bottom' + this.i);
      this.navigate(dir);
    }
  }
  navigate(dir) {
    if (this.lastDirection !== dir ) { this.i = 0; }
    this.i++;
    console.log(this.stater);
    if (this.i >= this.iterator) {
        const hash = this.platformLocation.hash.trim().substring(2);
        let ind = this.navArray.indexOf(hash) + dir;
        if (ind < 0 ) {
          ind = this.navArray.length - 1;
        } else if (ind > this.navArray.length - 1 ) {
          ind = 0;
        }
        this.router.navigate([this.navArray[ind]]);

    }
    this.lastDirection = dir;

  }
}
