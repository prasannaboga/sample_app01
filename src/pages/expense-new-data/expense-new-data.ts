import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Toast} from '@ionic-native/toast';

/**
 * Generated class for the ExpenseNewDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-new-data',
  templateUrl: 'expense-new-data.html',
})
export class ExpenseNewDataPage {

  data = {date: '', type: '', description: '', amount: 0}

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite,
              private toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseNewDataPage');
  }

  saveData() {
    this.sqlite.create({
      name: 'sample_app01.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)', [this.data.date, this.data.type, this.data.description, this.data.amount])
        .then(res => {
          console.dir(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

}
