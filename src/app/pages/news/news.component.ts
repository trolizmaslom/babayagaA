import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../../_services/connect.service';
import {popupAnimation} from "../../_animations/show.hide.popup.animation";
import {Output} from "@angular/compiler/src/core";
import {CustomService} from "../../_services/custom.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  animations: [popupAnimation]
})
export class NewsComponent implements OnInit {
  pageData;
  stater = 'hide';
  popupData;
  constructor(public conServ: ConnectService,
              public popService: CustomService) {}
  ngOnInit() {
    this.conServ.getResult('news.main.json').subscribe((response) => {
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
