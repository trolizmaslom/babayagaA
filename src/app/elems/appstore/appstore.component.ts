import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../../_services/connect.service';

@Component({
  selector: 'app-appstore',
  templateUrl: './appstore.component.html',
  styles: [':host{width: 100% }']
})
export class AppstoreComponent implements OnInit {
  pageData;
  constructor(public conServ: ConnectService) {}
  ngOnInit() {
    this.conServ.getResult('appstore.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
}
