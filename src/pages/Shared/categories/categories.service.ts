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

  private isDataLoaded = new Subject<any>();

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
      this.isDataLoaded.next(this.TabCategories);
    } else {
      NativeStorage.getItem('TabCategories')
        .then(
        data => {
          this.TabCategories = data;
          this.isDataLoaded.next(data);
          this.setCategories();
        },
        error => {
          this.TabCategories = [
            'Movies',
            'Music',
            'Sports'
          ]
          this.isDataLoaded.next(this.TabCategories);
          NativeStorage.setItem('TabCategories', this.TabCategories);
          this.setCategories();
        });
    }
  }



  getTabs() {
    return this.TabCategories;
  }

  getCategories() {
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
  newCatgories(newCat){
    this.TabCategories = newCat;
    NativeStorage.setItem('TabCategories', this.TabCategories);
  }


}

export interface category {
  title: string,
  value: boolean
}
