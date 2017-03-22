import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Tab2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-3',
  templateUrl: 'tab-3.html',
})
export class Tab3 {

  tab:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab = navParams.data;
  }

}
