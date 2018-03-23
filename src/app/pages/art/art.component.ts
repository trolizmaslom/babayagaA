import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../../_services/connect.service';
import {Router} from '@angular/router';
import {CustomService} from '../../_services/custom.service';
import {popupAnimation} from '../../_animations/show.hide.popup.animation';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  animations: [popupAnimation]
})
export class ArtComponent implements OnInit {
  pageData;
  stater = 'hide';
  popupData;
  constructor(public conServ: ConnectService,
              public router: Router,
              public popService: CustomService) {}
  ngOnInit() {
    this.conServ.getResult('art.main.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
  showPopup(article) {
    this.popService.getResult(article, 'news').subscribe((response) => {
      this.popupData = response;
      this.stater = 'show';
    }, (error) => {
      console.log(error);
    });
  }
}
