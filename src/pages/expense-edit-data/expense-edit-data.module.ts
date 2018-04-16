import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseEditDataPage } from './expense-edit-data';

@NgModule({
  declarations: [
    ExpenseEditDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseEditDataPage),
  ],
})
export class ExpenseEditDataPageModule {}
