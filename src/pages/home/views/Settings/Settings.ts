import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController,ToastController } from 'ionic-angular';
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
  categories: category[];
  isShowCat: boolean = false;
  categorySelection: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alert: AlertController, public actionSheetCtrl: ActionSheetController, private profilePicService: profilePicService, private categoriesServices: CategoriesServices) {
    this.img = null;
    this.initCat();
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
              quality: 50,
              allowEdit: true,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA
            }; false
            this.takePicture(options);
          }
        }, {
          text: 'Gallery',
          handler: () => {
            let options = {
              quality: 50,
              allowEdit: true,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
              //*************Use SAVEDPHOTOALBUM to get actual gallery*******************
            };
            this.takePicture(options);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(options: any) {
    Camera.getPicture(options).then((imageData) => {
      this.img = "data:image/jpeg;base64," + imageData;
      this.profilePicService.updateProfPic(this.img);
    }, (err) => { });
  }

  initCat() {
    this.categories = this.categoriesServices.getCategories();
    this.categories.forEach(category => {
      if (category.value == true) {
        this.categorySelection.push(category.title);
      }
    })
  }

  showCat() {
    if (this.isShowCat == false) {
      this.isShowCat = true;
    } else {
      this.isShowCat = false;
    }
  }

  saveCat() {
    let newCatgories = [];
    this.categories.forEach(category => {
      if (category.value == true) {
        newCatgories.push(category.title)

      }
    })
    if (newCatgories.length != 3) {
      let alert = this.alert.create({
        title: 'Warning',
        subTitle: 'Only three categories can be selected',
        buttons: ['Dismiss']
      })
      alert.present();
    } else {
      this.categoriesServices.newCatgories(newCatgories);
      this.isShowCat = false;
      let toast = this.toastCtrl.create({
        message: 'Categories Changed',
        duration: 1000,
        position: 'top'
      });
      toast.present(toast);
    }
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
