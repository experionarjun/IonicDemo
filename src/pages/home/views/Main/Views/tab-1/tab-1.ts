import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { category } from '../../../../../Shared/categories/categories.service';

/*
  Generated class for the Tab1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-1',
  templateUrl: 'tab-1.html',

})
export class Tab1 {

  tab:category;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     console.log(navParams);
     this.tab = {title:'Movies', value:true}
  }

  ngOnInit() {

  }

}
