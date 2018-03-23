import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent  {
  @Input() item;
  @Output() send = new EventEmitter();
  constructor( public router: Router) { }
  showPopup(article) {
    this.send.emit(article);
  }
}
