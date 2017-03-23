import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

//Main
import { Main } from '../pages/home/views/Main/Main';
//Tabs
import { Tab1 } from '../pages/home/views/Main/Views/tab-1/tab-1'
import { Tab2 } from '../pages/home/views/Main/Views/tab-2/tab-2'
import { Tab3 } from '../pages/home/views/Main/Views/tab-3/tab-3'


import { Settings } from '../pages/home/views/Settings/Settings';
import { DetailsPage } from '../pages/home/views/details/details';
import { Maps } from '../pages/home/views/maps/maps';

//Shared Components
import {profilePicComponent} from '../pages/Shared/profile_pic/profile_pic.component'
import {profilePicService} from '../pages/Shared/profile_pic/profile_pic.service'

import {TabsContentComponent} from '../pages/Shared/TabsContent/tabsContent.component'
import {CategoriesServices} from '../pages/Shared/categories/categories.service'




@NgModule({
  declarations: [
    MyApp,
    //Main Modules
    LoginPage,
    HomePage,
    //Home Components
    Main,
    //Tabs
    Tab1,
    Tab2,
    Tab3,

    Settings,
    DetailsPage,
    Maps,
    // Shared Components
    profilePicComponent,
    TabsContentComponent
  ],
  imports: [
        IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,

    HomePage,

    Main,
    Tab1,
    Tab2,
    Tab3,

    Settings,
    DetailsPage,
    Maps,

    profilePicComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},profilePicService, CategoriesServices]
})
export class AppModule {}
