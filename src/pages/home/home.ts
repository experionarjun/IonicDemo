import { Component, ViewChild } from '@angular/core';
import {Nav, NavController, NavParams } from 'ionic-angular';

// path
import { LoginPage } from '../login/login';
import { Main } from './views/Main/Main';
import { Settings } from './views/Settings/Settings';
import { Maps } from './views/maps/maps';

import {CategoriesServices} from '../Shared/categories/categories.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;
  value: number = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriesServices: CategoriesServices) {

    this.pages = [
      { title: 'Home', component: Main },
      { title: 'Settings', component: Settings },
      { title: 'Maps', component: Maps },
      { title: 'Logout', component: LoginPage }
    ];
    this.categoriesServices._isDataLoaded.subscribe(data => {
      if (data != null) {
        this.rootPage = Main;
      }
    })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title != 'Logout') {
      this.nav.setRoot(page.component);
    } else {
      this.navCtrl.setRoot(page.component);
  	 }
  }

  ionViewDidLoad() {
    this.categoriesServices.isLoggedIn()
  }

}
