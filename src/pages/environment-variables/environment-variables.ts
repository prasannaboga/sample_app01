import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ENV} from '@app/env';

/**
 * Generated class for the EnvironmentVariablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-environment-variables',
  templateUrl: 'environment-variables.html',
})
export class EnvironmentVariablesPage {

  env = ENV;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvironmentVariablesPage');
  }

}
