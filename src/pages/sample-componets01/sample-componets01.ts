import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the SampleComponets01Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-componets01',
  templateUrl: 'sample-componets01.html',
})
export class SampleComponets01Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleComponets01Page');
  }

  presentActionSheet() {
    this.actionSheet().present();
  }

  setActionSheetTitle() {
    this.actionSheet().setTitle(new Date().toISOString());
    console.log('aa')
    this.actionSheet().present();
  }

  actionSheet() {
    return this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
  }

  basicAlert() {
    let alert = this.alertCtrl.create({
      title: 'My Alert',
      subTitle: 'This basic ionic alert!',
      buttons: ['OK']
    });
    alert.present();
  }

  advancedAlert() {
    let alert = this.alertCtrl.create({
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ]
    });
    alert.setTitle('Lightsaber color');
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });
    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
    alert.present();
  }
}
