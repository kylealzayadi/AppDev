import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { initDomAdapter } from '../../../node_modules/@angular/platform-browser/src/browser';
import { GESTURE_PRIORITY_TOGGLE } from '../../../node_modules/ionic-angular/umd/gestures/gesture-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild('map') mapElement;
map: any;

  constructor(public navCtrl: NavController) {

  }


ionViewDidLoad(){
  this.initMap();
}

initMap(){
  let latLng = new google.maps.LatLng(-34,0224, 118,2851);
  
  let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
}

}
