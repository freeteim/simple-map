import { Component, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import View from 'ol/View';
import * as proj from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  _map: Map = null;
  _company: Array<number> = [126.91946403213575, 37.55493184989369];

  constructor() { }

  ngAfterViewInit() {

    const view: View = this.createView();
    this._map = this.createMap(view);
    this._map.on('moveend', this.getCoordinate.bind(this));
  }

  private createView() {
    return new View({
      center: this.transform(this._company),
      zoom: 14
    })
  }

  private createMap(view: View) {
    return new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: view
    });
  }

  transform(coor: Array<number>) {
    return proj.transform(coor, 'EPSG:4326', 'EPSG:3857')
  }
  
  getCoordinate(mapEvent) {
    const map = mapEvent.map;
    const center = proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
    console.log(center);
    return center;
  }
}
