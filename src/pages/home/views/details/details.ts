import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Geolocation} from 'ionic-native';
import {
  Geolocation,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker,
 GoogleMapsMapTypeId
} from 'ionic-native';

declare var google;
/*
  Generated class for the Details page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  
  // @ViewChild('map') mapElement: ElementRef;
  // map: any;

  // post:any;
  // lat:any;
  // long:any;
  // watch: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.post = navParams.get('post');
    // console.log(this.post);
    // Geolocation.getCurrentPosition().then((resp) => {
    //  this.lat = resp.coords.latitude
    //  this.long = resp.coords.longitude
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
    // this.watch = Geolocation.watchPosition();
    // this.watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // this.lat = data.coords.latitude
    // this.long = data.coords.longitude
    // });    
  }
  ngOnInit(){
     this.loadMap();
  }
  // ionViewLoaded(){
   
  // }
 
  // loadMap(){
 
  //  Geolocation.getCurrentPosition().then((position) => {
 
  //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }
 
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  //   }, (err) => {
  //     console.log(err);
  //   });
 
  // }
 
// addMarker(){
 
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
 
//   let content = "<h4>Information!</h4>";          
 
//   this.addInfoWindow(marker, content);
 
// }

// addInfoWindow(marker, content){
 
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
 
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
 
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>
 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');
 let map = new GoogleMap(element);
 // create LatLng object
 let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);
 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };
 // listen to MAP_READY event
 map.one(GoogleMapsEvent.MAP_READY).then(() => {
   // move the map's camera to position
   map.moveCamera(position); // works on iOS and Android
});
 // create new marker
 let markerOptions: GoogleMapsMarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };
 map.addMarker(markerOptions)
   .then((marker: GoogleMapsMarker) => {
      marker.showInfoWindow();
    });
 }



}


