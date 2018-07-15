import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html',
})
export class ScheduleDetailsPage {
  item : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }


}
