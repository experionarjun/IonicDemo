import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Tab2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-2',
  templateUrl: 'tab-2.html',

})
export class Tab2 {

  tab: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab = navParams.data;
  }

}
