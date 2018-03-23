import { Injectable } from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Injectable()
export class LocationService {
  constructor(public  platformLocation: PlatformLocation) {}
  getLocation() {
    return '..';
  }
}
