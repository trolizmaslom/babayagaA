import {Component,  EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [':host{background-color: #e8e9eb; position: absolute; width: 100vw; height: 100vh; overflow-y: auto; left: 0; top: 0; overflow-x: hidden; z-index: 900;transform:translateX(100%);pointer-events: none; display: flex; justify-content: center; align-content: center;}']
})
export class PopupComponent {
  newsSlideConfig = {
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  mediaSlideConfig = {
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  @Input() type;
  @Input() pageData;
  @Output() close = new EventEmitter();
  constructor(public sanitar: DomSanitizer) {}
  closePopup() {
    this.close.emit();
  }
  getYtUrl(item) {
    return this.sanitar.bypassSecurityTrustResourceUrl(item);
  }
}
