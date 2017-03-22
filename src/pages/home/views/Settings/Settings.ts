import { Component } from '@angular/core';
import { NavController, NavParams , ActionSheetController,AlertController } from 'ionic-angular';
// import { ImagePicker, Camera, NativeStorage } from 'ionic-native';
import { Camera } from 'ionic-native';
import { profilePicService } from '../../../Shared/profile_pic/profile_pic.service'
import { CategoriesServices, category } from '../../../Shared/categories/categories.service';


@Component({
  selector: 'page-settings',
  templateUrl: 'Settings.html'
})

export class Settings {
  img: any;
  categories:category[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private profilePicService: profilePicService, private categoriesServices : CategoriesServices) {
    this.img = null;
    this.initCat();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  pickImage() {
    //     let options = {
    //     destinationType   : Camera.DestinationType.DATA_URL,
    //     sourceType        : Camera.PictureSourceType.PHOTOLIBRARY
    // };

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            let options = {
                quality : 50,
                // allowEdit: true,
                destinationType   : Camera.DestinationType.DATA_URL,
                sourceType        : Camera.PictureSourceType.CAMERA
            };false
            this.takePicture(options);
          }
        },{
          text: 'Gallery',
          handler: () => {
            let options = {
                quality : 50,
                // allowEdit: true,
                destinationType   : Camera.DestinationType.DATA_URL,
                sourceType        : Camera.PictureSourceType.PHOTOLIBRARY
            };
            this.takePicture(options);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(options:any){
    Camera.getPicture(options).then((imageData) => {
      this.img = "data:image/jpeg;base64," + imageData;
    //  this.img = imageData;
      this.profilePicService.updateProfPic(this.img);
    }, (err) => {
          console.log(err);
        });

  }

  initCat(){
        this.categories = this.categoriesServices.getCategories();
        console.log(this.categories);
  }

}








//=======================IMAGE PICKER================================

// let options = {
//   maximumImagesCount: 1,
//   width: 200,
//   height: 200,
//   quality: 100
// };
// ImagePicker.getPictures(options).then((results) => {
//   for (var i = 0; i < results.length; i++) {
//     this.img = results[i];
//     this.profilePicService.updateProfPic(this.img);
//   }
// }, (err) => { });
