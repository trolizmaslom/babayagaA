import {Component, ElementRef, OnInit} from '@angular/core';
import {ConnectService} from '../../_services/connect.service';
import {Router} from '@angular/router';
import {CustomService} from '../../_services/custom.service';
import {popupAnimation} from '../../_animations/show.hide.popup.animation';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  animations: [popupAnimation]
})
export class PromoComponent implements OnInit {
  pageData;
  stater = 'hide';
  popupData;
  constructor(public conServ: ConnectService,
              public popService: CustomService,
              public router: Router) {}
  ngOnInit() {
    this.conServ.getResult('promo.main.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
  showPopup(article) {
    this.popService.getResult(article, 'promo').subscribe((response) => {
      this.popupData = response;
      this.stater = 'show';
    }, (error) => {
      console.log(error);
    });
  }
  onList(anchor) {
    this.router.navigate([('promolist/' + anchor)]);
  }
}
