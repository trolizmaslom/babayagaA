import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationService} from './location.service';
@Injectable()
export class ConnectService {

  private readonly relativeUrl = '/assets/data/';
  navURL;
  constructor(public httpClient: HttpClient,
              public locServ: LocationService) {
    this.navURL = this.locServ.getLocation() + this.relativeUrl;
  }
  getResult(file: string) {
    return this.httpClient.get((this.navURL + file));
  }
}
