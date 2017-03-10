import { Component,ViewChild } from '@angular/core';
import {Nav, NavController, NavParams } from 'ionic-angular';

// path
import { LoginPage } from '../login/login';
import { Page1 } from './views/page1/page1';
import { Page2 } from './views/page2/page2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1; 

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
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







