import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {SQLite} from '@ionic-native/sqlite';
import {Toast} from '@ionic-native/toast';
import {IonicStorageModule} from '@ionic/storage';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {ENV} from '@app/env';
import {NgxErrorsModule} from '@ultimate/ngxerrors';

import {LoginPage} from '../pages/login/login';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SamplePage01Page} from "../pages/sample-page01/sample-page01";
import {SampleComponets01Page} from "../pages/sample-componets01/sample-componets01";
import {Sample02Page} from "../pages/sample02/sample02";
import {ExpenseNewDataPage} from "../pages/expense-new-data/expense-new-data";
import {ExpenseEditDataPage} from "../pages/expense-edit-data/expense-edit-data";
import {EnvironmentVariablesPage} from "../pages/environment-variables/environment-variables";
import {AuthService} from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';

@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    HomePage,
    SamplePage01Page,
    SampleComponets01Page,
    Sample02Page,
    ExpenseNewDataPage,
    ExpenseEditDataPage,
    EnvironmentVariablesPage,
    SignupPage
  ],
  imports: [
    AngularFireModule.initializeApp(ENV.firebaseConfig),
    BrowserModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    HomePage,
    SamplePage01Page,
    SampleComponets01Page,
    Sample02Page,
    ExpenseNewDataPage,
    ExpenseEditDataPage,
    EnvironmentVariablesPage,
    SignupPage
  ],
  providers: [
    AngularFireAuth,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast
  ]
})
export class AppModule {

}
