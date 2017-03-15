import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker, Camera, NativeStorage } from 'ionic-native';

@Component({
  selector: 'page-About',
  templateUrl: 'About.html'
})

export class About {
  img: any;
  currentUser: string = 'hey';

  @Output() updateProfPic = new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  pickImage() {
    //     let options = {
    //     destinationType   : Camera.DestinationType.DATA_URL,
    //     sourceType        : Camera.PictureSourceType.PHOTOLIBRARY
    // };
    console.log(this.updateProfPic);

    this.updateProfPic.emit(this.img)
    let options = {
      maximumImagesCount: 1,
      width: 200,
      height: 200,
      quality: 100
    };
    ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.img = results[i];
        NativeStorage.setItem('profile_pic', this.img);
      }
    }, (err) => { });

  }

}
