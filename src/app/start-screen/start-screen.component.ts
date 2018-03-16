import {Component, OnInit} from '@angular/core';
import {ConnectService} from '../_services/connect.service';
import {startScreenAnimation} from '../_animations/start.screen.animation';
import {logoAnimation} from '../_animations/logo.animation';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
  animations: [startScreenAnimation, logoAnimation]
})
export class StartScreenComponent implements OnInit {

  slideConfig = {
    arrows: false,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  pageData;
  stateLogo = 'on';
  constructor(public conServ: ConnectService,
              private router: Router) {}
  ngOnInit() {
    this.conServ.getResult('start.screen.json').subscribe((response) => {
      this.pageData = response;
      setTimeout(() => {this.stateLogo = 'off'; console.log(this.stateLogo); } , 1000);
    }, (error) => {
      console.log(error);
    });
  }
  onScrollButton(event) {
    this.stateLogo = 'on';
    setTimeout(() => {
      this.stateLogo = 'off';
      this.router.navigate(['promo']);
      } , 1000);
  }
  log(e) {console.log(e); }
}
