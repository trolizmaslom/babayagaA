import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../../_services/connect.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  pageData;
  constructor(public conServ: ConnectService) {}
  ngOnInit() {
    this.conServ.getResult('contacts.json').subscribe((response) => {
      this.pageData = response;
    }, (error) => {
      console.log(error);
    });
  }
}
