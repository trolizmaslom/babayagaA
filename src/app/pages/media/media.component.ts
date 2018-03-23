import {Component, ElementRef, OnInit} from '@angular/core';
import {ConnectService} from '../../_services/connect.service';
import {Router} from '@angular/router';
import {CustomService} from "../../_services/custom.service";
import {popupAnimation} from "../../_animations/show.hide.popup.animation";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  animations: [popupAnimation]
})
export class MediaComponent implements OnInit {
  pageData;
  stater = 'hide';
  popupData;
  constructor(public conServ: ConnectService,
              public popService: CustomService,
              public router: Router) {}
  ngOnInit() {
    this.conServ.getResult('media.main.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
  showPopup(article) {
    this.popService.getResult(article, 'media').subscribe((response) => {
      this.popupData = response;
      this.stater = 'show';
    }, (error) => {
      console.log(error);
    });
  }
  onList(anchor) {
    this.router.navigate([('medialist/' + anchor)]);
  }
}
