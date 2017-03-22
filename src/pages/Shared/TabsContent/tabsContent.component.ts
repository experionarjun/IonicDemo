import { Component, OnInit, Input } from '@angular/core';
import { App, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';


import { TabsContentServices } from './tabsContent.service'
import {DetailsPage} from '../../home/views/details/details'

@Component({
  selector: 'tab-content',
  templateUrl: 'tabsContent.html',
  providers: [TabsContentServices]
})

export class TabsContentComponent implements OnInit {

  @Input() category: string;


  limit: number;
  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public toastCtrl: ToastController, public loadingCtrl: LoadingController, private TCService: TabsContentServices) {
    this.limit = 10;
  }

  ngOnInit() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    })
    loader.present();
    this.TCService.getPost(this.category.toLowerCase(), this.limit).subscribe(res => {
      loader.dismiss();
      this.posts = res.data.children;
    })
  }

  showDetails(post) {
    this.app.getRootNav().push(DetailsPage, {
      post: post
    })
  }

  doInfinite(infiniteScroll) {
    this.limit = this.limit + 10;
    this.TCService.getPost(this.category.toLowerCase(), this.limit).subscribe(res => {
      this.posts = res.data.children;
      infiniteScroll.complete();
    })
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Item Deleted',
      duration: 2000,
      position: 'top'
    });
    toast.present(toast);
  }
}
