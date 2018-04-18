import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SamplePage01Page} from "../sample-page01/sample-page01";
import {Sample02Page} from "../sample02/sample02";
import {SampleComponets01Page} from "../sample-componets01/sample-componets01";
import {ENV} from '@app/env';
import {EnvironmentVariablesPage} from "../environment-variables/environment-variables";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  env = ENV;

  constructor(public navCtrl: NavController) {

  }

  goToSamplePage01() {
    console.log('Clicked Go To Sample Page 01');
    this.navCtrl.push(SamplePage01Page)
  }

  goToSamplePage02() {
    this.navCtrl.push(Sample02Page)
  }

  goToSampleComponets01Page() {
    this.navCtrl.push(SampleComponets01Page)
  }

  goToEnvironmentVariablesPage() {
    this.navCtrl.push(EnvironmentVariablesPage)
  }

  goToLogin() {
    console.log('sfsdf');
    this.navCtrl.push(LoginPage);
  }

}
