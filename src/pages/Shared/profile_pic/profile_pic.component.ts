import { Component } from '@angular/core';
import {NativeStorage} from 'ionic-native';
// import {About} from '../../home/views/About/About';
import {profilePicService} from './profile_pic.service';

@Component({
  selector: 'profile-pic',
  templateUrl: './profile_pic.html',
  // providers: [About]
})
export class profilePicComponent {

  profile_pic:string;


  constructor(private profilePicService:profilePicService) {
    this.profilePicService.changeDP$.subscribe(data =>{
      this.profile_pic = data;
      NativeStorage.setItem('profile_pic', data);
    })
    NativeStorage.getItem('profile_pic')
      .then(
      data => this.profile_pic = data,
      error => this.profile_pic = '../../assets/profile.png'
      );
  }

  ngOnInit() {}




}
