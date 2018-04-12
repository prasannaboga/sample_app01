import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite'

/**
 * Generated class for the Sample02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample02',
  templateUrl: 'sample02.html',
})
export class Sample02Page {

  expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ans');
    this.getData();
  }

  ionViewWillEnter() {
    //console.log('as')
    //this.getData();
  }

  getData() {
    console.log('getData');
    this.sqlite.create({
      name: 'sample_app01.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('inside...')
      // create database
      db
        .executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => function (e) {
          console.log('getData error');
          console.log(e);
        });

      // get records
      db.executeSql('SELECT * FROM expense ORDER BY rowid DESC', {})
        .then(res => {
          this.expenses = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.expenses.push({
              rowid: res.rows.item(i).rowid,
              date: res.rows.item(i).date,
              type: res.rows.item(i).type,
              description: res.rows.item(i).description,
              amount: res.rows.item(i).amount
            })
          }
        })
        .catch(e => console.log(e));

      db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
        .then(res => {
          if (res.rows.length > 0) {
            this.totalIncome = parseInt(res.rows.item(0).totalIncome);
            this.balance = this.totalIncome - this.totalExpense;
          }
        })
        .catch(e => console.log(e));

      db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
        .then(res => {
          if (res.rows.length > 0) {
            this.totalExpense = parseInt(res.rows.item(0).totalExpense);
            this.balance = this.totalIncome - this.totalExpense;
          }
        }).catch(e => console.log(e));
    }).catch(e => function (e) {
      console.log('getData error');
      console.log(e);
    });
  }
}
