import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ConnectService {

  private readonly navURL = 'http://localhost:4200/assets/data/';

  constructor(public httpClient: HttpClient) {}
  getResult(file: string) {
    return this.httpClient.get((this.navURL + file));
  }
}
