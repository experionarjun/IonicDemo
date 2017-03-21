import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesServices,category } from '../../../../../Shared/categories/categories.service';


/*
  Generated class for the Tab2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-2',
  templateUrl: 'tab-2.html'
})
export class Tab2 {

  tab:category;
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriesServices:CategoriesServices) {
    //  this.tab = categoriesServices.setTab(1);
     console.log(navParams);
     this.tab = {title:'Music', value:true}

  }

  ngOnInit() {
    // this.categoriesServices.setTab(1);
  }

}
