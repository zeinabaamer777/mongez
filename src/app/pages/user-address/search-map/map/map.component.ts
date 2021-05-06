import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { PositionModel } from '../entity/position.model';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  position: PositionModel = null;
  zoom: number = 1;
  markers = [];

  center: google.maps.LatLngLiteral;
  map: google.maps.Map;

  options: any;

    overlays: any[];
  @Input()
  public set searchedPosition(position: PositionModel) {
    if (position.lat !== undefined) {
      this.position = position;

      this.zoom = 12;

      this.map.setCenter({
        lat: Number(position.lat),
        lng: Number(position.lng)
      });

      // this.map.overlayMapTypes.setValues();

      this.overlays = [
        new google.maps.Marker({position: {lat: position.lat, lng: position.lng}})
        ];


      this.center = { lat: position.lat, lng: position.lng};




    }
  }

  ngOnInit() {

    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };




    // set up current location
    // if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let positionL = new PositionModel();
      positionL.lat = position.coords.latitude;
      positionL.lng = position.coords.longitude;
      this.searchedPosition = positionL;

      this.map.setCenter({
        lat: Number(positionL.lat),
        lng: Number(positionL.lng)
      });

      this.overlays = [
        new google.maps.Marker({position: {lat: positionL.lat, lng: positionL.lng}})];



      this.center =  { lat: positionL.lat, lng: positionL.lng};



    });
    // }
  }

  setMap(event) {
    this.map = event.map;
}
}
