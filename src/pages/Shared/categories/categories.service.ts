import {Injectable} from '@angular/core';
import {NativeStorage} from 'ionic-native'

import { Subject }    from 'rxjs/Subject';

@Injectable()

export class CategoriesServices {

  AllCategories: category[];
  TabCategories: string[];

//******************************************************************************
//
//Observable is used because Main component and Tabs loads
//before NativeStorage sets value of TabCategories.
//When the values are init the HomePage component sets rootPage as Main
//
//******************************************************************************

  private isDataLoaded = new Subject<boolean>();

  _isDataLoaded = this.isDataLoaded.asObservable();

  constructor() {
    this.AllCategories = [
      { title: 'Movies', value: false },
      { title: 'Music', value: false },
      { title: 'Sports', value: false },
      { title: 'Gaming', value: false },
      { title: 'Arts', value: false },
      { title: 'Food', value: false },
      { title: 'News', value: false },
      { title: 'Funny', value: false }
    ]
  }

  isLoggedIn() {
    if (this.TabCategories) {
      this.isDataLoaded.next(true);
    } else {
      NativeStorage.getItem('TabCategories')
        .then(
        data => {
          this.TabCategories = data;
          this.isDataLoaded.next(true);
        },
        error => {
          this.TabCategories = [
            'Movies',
            'Music',
            'Sports'
          ]
          this.isDataLoaded.next(true);
          NativeStorage.setItem('TabCategories', this.TabCategories);
        });
    }
  }

  // getTabs(){
  //     // if(this.TabCategories){
  //     //   return new Promise (function(resolve,reject){
  //     //     resolve(this.TabCategories);
  //     //   });
  //     // }else{
  //     console.log('getTabs');
  //         return new Promise(function(resolve , reject){
  //           NativeStorage.getItem('TabCategories')
  //             .then(
  //             data => {
  //               resolve(data);
  //             },error => {
  //               let TabCategories = ['Movies','Music','Sports']
  //               // [
  //               //   {title:'Movies' , value: true },
  //               //   {title:'Music' , value: true },
  //               //   {title:'Sports' , value: true }
  //               // ];
  //               resolve(TabCategories)
  //             }
  //         )
  //       })
  //     }
  // }

  getTabs() {
    return this.TabCategories;
  }

  getCategories() {
    this.setCategories();
    return this.AllCategories;
  }

  setCategories() {
    this.AllCategories.forEach(all => {
      this.TabCategories.forEach(tab => {
        if (tab == all.title) {
          all.value = true;
        }
      })
    })
  }

}

export interface category {
  title: string,
  value: boolean
}
