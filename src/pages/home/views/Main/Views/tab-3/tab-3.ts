import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesServices,category } from '../../../../../Shared/categories/categories.service';


/*
  Generated class for the Tab2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-3',
  templateUrl: 'tab-3.html'
})
export class Tab3 {

  tab:category;
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriesServices:CategoriesServices) {
    //  this.tab = categoriesServices.setTab(2);
    this.tab = {title:'Sports', value:true}

  }

  ngOnInit() {
    // this.categoriesServices.setTab(2);
  }
}
