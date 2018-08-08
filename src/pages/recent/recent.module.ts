import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { RecentPage } from './recent';

@NgModule({
  declarations: [
    RecentPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentPage),
  ],
  exports: [
    RecentPage
  ]
})
export class RecentPageModule {}
