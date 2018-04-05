import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SamplePage01Page } from './sample-page01';

@NgModule({
  declarations: [
    SamplePage01Page,
  ],
  imports: [
    IonicPageModule.forChild(SamplePage01Page),
  ],
})
export class SamplePage01PageModule {}
