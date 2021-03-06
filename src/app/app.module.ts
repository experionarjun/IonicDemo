import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { Page1 } from '../pages/home/views/page1/page1';
import { Page2 } from '../pages/home/views/page2/page2';
import { DetailsPage } from '../pages/home/views/details/details';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    Page1,
    Page2,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    Page1,
    Page2,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
