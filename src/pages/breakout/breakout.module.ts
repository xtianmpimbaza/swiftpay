import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { BreakoutPage } from './breakout';

@NgModule({
  declarations: [
    BreakoutPage,
  ],
  imports: [
    IonicPageModule.forChild(BreakoutPage)
  ],
  exports: [
    BreakoutPage
  ]
})
export class BreakoutPageModule {}
