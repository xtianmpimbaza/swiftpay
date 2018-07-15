import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { CodePayPage } from './code-pay';

@NgModule({
  declarations: [
    CodePayPage,
  ],
  imports: [
    IonicPageModule.forChild(CodePayPage),
  ],
  exports: [
    CodePayPage
  ]
})
export class CodePayPageModule {}
