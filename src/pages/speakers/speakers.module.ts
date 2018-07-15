import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakersPage } from './speakers';

@NgModule({
  declarations: [
    SpeakersPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakersPage),
  ],
  exports: [
    SpeakersPage
  ]
})
export class SpeakersPageModule {}
