import {Component, ElementRef, OnInit} from '@angular/core';
import {ConnectService} from '../../_services/connect.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html'
})
export class PromoComponent implements OnInit {
  pageData;
  constructor(public conServ: ConnectService) {}
  ngOnInit() {
    this.conServ.getResult('promo.main.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
  onScroll(event) {
    const torso = event.target.getElementsByClassName('promo__torso')[0];
    const contentTop = torso.getBoundingClientRect().top;
    const contentHeight = torso.getBoundingClientRect().height;
    const containerHeight = event.target.getBoundingClientRect().height;


  }
}
