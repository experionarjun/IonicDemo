import { Component, Input } from '@angular/core';
import {NativeStorage} from 'ionic-native';
import {About} from '../../home/views/About/About';

@Component({
  selector: 'profile-pic',
  templateUrl: './profile_pic.html',
  providers: [About]
})
export class profilePicComponent {
    
  @Input() profile_pic;

  
  
  constructor(private About:About) {  
  }

  ngOnInit() {
      //  console.log(this.user);
      NativeStorage.getItem('profile_pic')
        .then(
        data => this.profile_pic = data,
        error => this.profile_pic = '../../assets/icon/favicon.ico'
        );
    //  this.About.updateProfPic.subscribe((img) =>{
    //       console.log('updateDP called')
    //       this.profile_pic = img;
    //     })
  }

  


}
