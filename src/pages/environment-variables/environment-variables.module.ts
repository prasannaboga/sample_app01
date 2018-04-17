import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvironmentVariablesPage } from './environment-variables';

@NgModule({
  declarations: [
    EnvironmentVariablesPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvironmentVariablesPage),
  ],
})
export class EnvironmentVariablesPageModule {}
