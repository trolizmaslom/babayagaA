import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocationService} from './location.service';

@Injectable()
export class CustomService {
  relativeUrl;
  navURL;
  constructor(public httpClient: HttpClient,
              public locServ: LocationService) {}
  getResult(file: string, group: string) {
    this.relativeUrl = '/assets/data/' + group + '/';
    this.navURL = this.locServ.getLocation() + this.relativeUrl;
    return this.httpClient.get((this.navURL + file + '.json'));
  }
}
