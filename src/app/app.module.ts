import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {SQLite} from '@ionic-native/sqlite';
import {Toast} from '@ionic-native/toast';
import { IonicStorageModule } from '@ionic/storage';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SamplePage01Page} from "../pages/sample-page01/sample-page01";
import {SampleComponets01Page} from "../pages/sample-componets01/sample-componets01";
import {Sample02Page} from "../pages/sample02/sample02";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SamplePage01Page,
    SampleComponets01Page,
    Sample02Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SamplePage01Page,
    SampleComponets01Page,
    Sample02Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast
  ]
})
export class AppModule {

}
