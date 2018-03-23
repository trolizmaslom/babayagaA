import {Component, OnInit} from '@angular/core';
import {ConnectService} from '../_services/connect.service';
import {startScreenAnimation} from '../_animations/start.screen.animation';
import {logoAnimation} from '../_animations/logo.animation';
import {Router} from "@angular/router";
import {CustomService} from "../_services/custom.service";
import {popupAnimation} from "../_animations/show.hide.popup.animation";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
  animations: [startScreenAnimation, logoAnimation, popupAnimation]
})
export class StartScreenComponent implements OnInit {
  slideConfig = {
    arrows: false,
    infinite: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true
  };

  pageData;
  stateLogo = 'on';
  stater = 'hide';
  popupData;
  type;

  constructor(public conServ: ConnectService,
              private router: Router,
              private popService: CustomService) {}
  canIGo() {
    if (this.stater !== 'show') {
      this.onScrollButton();
    }
  }
  ngOnInit() {
    this.conServ.getResult('start.screen.json').subscribe((response) => {
      this.pageData = response;
      setTimeout(() => {this.stateLogo = 'off'; } , 1000);
    }, (error) => {
      console.log(error);
    });
  }
  onScrollButton() {
    this.stateLogo = 'on';
    setTimeout(() => {
      this.stateLogo = 'off';
      this.router.navigate(['news']);
      } , 1000);
  }
  showPopup(slide) {
    this.type = slide.listHref;
    this.popService.getResult(slide.article, this.type).subscribe((response) => {
      this.popupData = response;
      this.stater = 'show';
    }, (error) => {
      console.log(error);
    });
  }
}
