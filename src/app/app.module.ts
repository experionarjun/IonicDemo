import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { Main } from '../pages/home/views/Main/Main';
import { About } from '../pages/home/views/About/About';
import { DetailsPage } from '../pages/home/views/details/details';
import { Maps } from '../pages/home/views/maps/maps';

//Shared Components
import {profilePicComponent} from '../pages/Shared/profile_pic/profile_pic.component'
import {profilePicService} from '../pages/Shared/profile_pic/profile_pic.service'




@NgModule({
  declarations: [
    MyApp,
    //Main Modules
    LoginPage,
    HomePage,
    //Home Components
    Main,
    About,
    DetailsPage,
    Maps,
    // Shared Components
    profilePicComponent
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
    About,
    DetailsPage,
    Maps
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},profilePicService]
})
export class AppModule {}
