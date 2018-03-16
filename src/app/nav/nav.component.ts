import {Component, Input, OnInit} from '@angular/core';
import {ConnectService} from '../_services/connect.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  navData;
  constructor(public conServ: ConnectService) {}
  ngOnInit() {
    this.conServ.getResult('nav.json').subscribe((response) => {
      this.navData = response;
    }, (error) => {
      console.log(error);
    });
  }
}
