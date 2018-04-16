import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseNewDataPage } from './expense-new-data';

@NgModule({
  declarations: [
    ExpenseNewDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseNewDataPage),
  ],
})
export class ExpenseNewDataPageModule {}
