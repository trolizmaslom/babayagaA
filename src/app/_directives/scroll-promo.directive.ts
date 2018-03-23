import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollPromo]'
})
export class ScrollPromoDirective {
  constructor(public el: ElementRef) {}
  @HostListener('scroll') onScroll() {
    const target = this.el.nativeElement;
    const torso = target.getElementsByClassName('promo__torso')[0];
    const title = target.getElementsByClassName('anim-title')[0];
    const contentTop = torso.getBoundingClientRect().top;
    title.style.opacity = (contentTop <= -40) ? 0.1 : 1;
    const bottom = target.getBoundingClientRect().height;
    const sections = target.getElementsByClassName('list__block');
    const sectionsTitles = target.getElementsByClassName('ts-section-title');
    if (sectionsTitles.length > 0) {
      for (let i = 0; i < sections.length; i++) {
        let bot = sections[i].getBoundingClientRect().top +  sections[i].getBoundingClientRect().height;
        let top = sections[i].getBoundingClientRect().top;
        if ((bot > 300 && top < 300 && top > -10) || (bot < bottom && bot > 0 && top < bottom && top > -10)) {
          for (let j = 0; j < sectionsTitles.length; j++) {
            sectionsTitles[j].classList.remove('active');
          }
          sectionsTitles[i].classList.add('active');
        }
      }
    }
  }
}
