import { Component , OnInit,Input } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TabsContentServices } from './tabsContent.service'
import {DetailsPage} from '../../home/views/details/details'

@Component({
  selector: 'tab-content',
  templateUrl: 'tabsContent.html',
  providers : [TabsContentServices]
})

export class TabsContentComponent implements OnInit{

  @Input() category;

  limit:number;
  posts:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,private TCService : TabsContentServices) {
    this.limit = 5;
  }

  ngOnInit(){
    console.log(this.category);
    let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration : 3000
   })
   loader.present();
    this.TCService.getPost(this.category.title.toLowerCase(),this.limit).subscribe(res => {
      loader.dismiss();
      this.posts = res.data.children;
    })
  }

  showDetails(post){
    this.navCtrl.push(DetailsPage,{
      post:post
    })
  }

  doInfinite(infiniteScroll) {
    console.log("infiniteScroll")
    this.limit = this.limit+10;
    setTimeout(() => {
      this.TCService.getPost(this.category.title.toLowerCase(),this.limit).subscribe(res => {
      this.posts = res.data.children;
    })
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
