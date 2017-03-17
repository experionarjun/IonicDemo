import { Component } from '@angular/core';

// import { App, ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

// import {Http, Headers, RequestOptions} from '@angular/http';
// import {Md5} from 'ts-md5/dist/md5';
// import 'rxjs/add/operator/map';
// import {url} from '../../serverConfig'

import {HomePage} from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  fail:boolean = false;
  constructor(public navCtrl: NavController) {
    // console.log(appCtrl.getRootNav())
  }

  login(user,pass){
    // let headers = new Headers({ 'Content-Type': 'application/json', username: user, password: Md5.hashStr(pass) });
    // let options = new RequestOptions({ headers: headers });
    // this.http.get(url+"login",options)
    //   .map(res => res.json())
    //   .subscribe(res => {
    //     if(res.status == 200){
    //       this.navCtrl.setRoot(HomePage);
    //     }else{
    //       this.fail = true;
    //     }
    //   } )
    if(user == 'arjun' && pass == 'l00p123'){
       this.navCtrl.setRoot(HomePage);
    }else{
          this.fail = true;
        }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
