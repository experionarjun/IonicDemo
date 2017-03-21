import {Injectable} from '@angular/core';
import {NativeStorage} from 'ionic-native'

@Injectable()

export class CategoriesServices {

  AllCategories:category[];
  TabCategories:category[];

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
    NativeStorage.getItem('TabCategories')
     .then(
     data => {
       this.TabCategories = data;
       console.log(data);
     },
     error =>{
       this.TabCategories = [
         {title:'Movies' , value: true },
         {title:'Music' , value: true },
         {title:'Sports' , value: true }
       ]
       NativeStorage.setItem('TabCategories',this.TabCategories);
     });
  }



getTabs(){
    // if(this.TabCategories){
    //   return new Promise (function(resolve,reject){
    //     resolve(this.TabCategories);
    //   });
    // }else{
    console.log('getTabs');
        return new Promise(function(resolve , reject){
          NativeStorage.getItem('TabCategories')
            .then(
            data => {
              resolve(data);
            },error => {
              let TabCategories = [
                {title:'Movies' , value: true },
                {title:'Music' , value: true },
                {title:'Sports' , value: true }
              ];
              resolve(TabCategories)
            }
        )
      })
    }
// }


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
