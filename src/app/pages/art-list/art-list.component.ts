import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../../_services/connect.service';
import {CustomService} from '../../_services/custom.service';
import {popupAnimation} from '../../_animations/show.hide.popup.animation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  animations: [popupAnimation]
})
export class ArtListComponent implements OnInit {
  pageData;
  stater = 'hide';
  popupData;
  type = 'news';
  constructor(public conServ: ConnectService,
              public router: Router,
              public popService: CustomService) {}
  ngOnInit() {
    this.conServ.getResult('art.list.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
  showPopup(article, group = this.type) {
    this.type = group;
    this.popService.getResult(article, this.type).subscribe((response) => {
      this.popupData = response;
      this.stater = 'show';
    }, (error) => {
      console.log(error);
    });
  }
}
