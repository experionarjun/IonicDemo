import { Component , OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { HomeContentServices } from '../../services/homeContent'
import {DetailsPage} from '../details/details'


/*
  Generated class for the Page1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-Main',
  templateUrl: 'Main.html',
  providers : [HomeContentServices]
})
export class Main implements OnInit{

  category:string;
  limit:number;
  posts:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,private HCService : HomeContentServices) {
    this.category = 'movies';
    this.limit = 10;
  }

  ngOnInit(){
    let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration : 3000
   })
   loader.present();
    this.HCService.getPost(this.category,this.limit).subscribe(res => {
      loader.dismiss();
      this.posts = res.data.children;
    })
  }

  showDetails(post){
    this.navCtrl.push(DetailsPage,{
      post:post
    })
  }

  newCat(){
    let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration : 3000
   })

    loader.present();
    this.HCService.getPost(this.category,this.limit).subscribe(res => {
      loader.dismiss();
      this.posts = res.data.children;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
