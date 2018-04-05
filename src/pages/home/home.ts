import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SamplePage01Page} from "../sample-page01/sample-page01";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSamplePage01() {
    console.log('Clicked Go To Sample Page 01');
    console.log('a')
    this.navCtrl.setRoot(SamplePage01Page);
    this.navCtrl.push(SamplePage01Page)
  }

}
