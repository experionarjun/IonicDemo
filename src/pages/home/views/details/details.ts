import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Geolocation} from 'ionic-native';


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
  
  post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

}
