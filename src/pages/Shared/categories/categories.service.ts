import {Injectable} from '@angular/core';
import {NativeStorage} from 'ionic-native'

import { Subject }    from 'rxjs/Subject';

@Injectable()

export class CategoriesServices {

  AllCategories:category[];
  TabCategories:category[];

  private isDataLoaded = new Subject<any>();

  _isDataLoaded = this.isDataLoaded.asObservable();

  constructor(){
    this.AllCategories = [
      {title:'Movies' , value: false },
      {title:'Music' , value: false },
      {title:'Sports' , value: false },
      {title:'Gaming' , value: false },
      {title:'Arts' , value: false },
      {title:'Food' , value: false },
      {title:'News' , value: false },
      {title:'Funny' , value: false }
    ]

  }

isLoggedIn(){
  NativeStorage.getItem('TabCategories')
   .then(
   data => {
     this.TabCategories = data;
    //  console.log(data);
     this.isDataLoaded.next(data);
   },
   error =>{
     this.TabCategories = [
       {title:'Movies' , value: true },
       {title:'Music' , value: true },
       {title:'Sports' , value: true }
     ]
     this.isDataLoaded.next(this.TabCategories);
     NativeStorage.setItem('TabCategories',this.TabCategories);
   });
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

getTabs(){
  let titles=[];
  this.TabCategories.forEach( data => {
    titles.push(data.title);
  })
  return titles;
}

  getCategories(){
    this.setCategories();
    return this.AllCategories;
  }

setCategories(){
  this.AllCategories.forEach(all => {
    this.TabCategories.forEach( tab =>{
      if(tab.title == all.title){
        all.value = true;
      }
    })
  })
}

//
// setTab(tab_num){
//   return this.TabCategories[tab_num];
//   // console.log('setTab',this.TabCategories)
// }


}

export interface category {
  title:string,
  value:boolean
}
