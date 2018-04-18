import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {AuthService} from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              public authService: AuthService,
              private menu: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.authService.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }

  login() {
    this.menu.close();
    this.authService.signOut();
    this.nav.setRoot(LoginPage);
  }

  logout() {
    this.menu.close();
    this.authService.signOut();
    this.nav.setRoot(HomePage);
  }

  closeMenu() {
    this.menu.close();
  }

}

