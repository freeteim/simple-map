import { Injectable } from '@angular/core';
import Map from 'ol/Map';

@Injectable()
export class MapService {

  _map: Map;

  constructor() { }

  set map(value: Map) {
    this._map = value;
  }
  get map() {
    return this._map;
  }

}
