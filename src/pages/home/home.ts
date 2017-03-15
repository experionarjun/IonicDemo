import { Component,ViewChild } from '@angular/core';
import {Nav, NavController, NavParams } from 'ionic-angular';

// path
import { LoginPage } from '../login/login';
import { Main } from './views/Main/Main';
import { About } from './views/About/About';
import { Maps } from './views/maps/maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Main; 

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Home', component: Main },
      { title: 'About', component: About },
      { title: 'Maps', component: Maps },
      { title: 'Logout', component: LoginPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title != 'Logout'){
    	this.nav.setRoot(page.component);
	}else{
		this.navCtrl.setRoot(page.component);
	}
  }

}







