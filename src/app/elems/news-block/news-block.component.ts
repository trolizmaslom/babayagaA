import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html'
})
export class NewsBlockComponent {
  @Input() item;
  @Output() send = new EventEmitter();
  constructor(public router: Router ) { }

  showPopup(article) {
    this.send.emit(article);
  }

}
