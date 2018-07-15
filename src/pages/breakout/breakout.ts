import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ScheduleOneService} from "../../providers/schedule-service";
import {ScheduleDetailsPage} from "../schedule-details/schedule-details";

@IonicPage()
@Component({
  selector: 'page-breakout',
  templateUrl: 'breakout.html',
})
export class BreakoutPage {

  viewMode: string = "first";
  firstSchedule: Array<any>;

  checkStatus: boolean;
  secondSchedule: Array<any>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private schOneService: ScheduleOneService) {

    this.getDayOne();
    this.updateProgram();
  }

  getDayOne() {
    this.schOneService.getDayOne().then(data => {
      // this.firstSchedule = data;
      this.firstSchedule = [];
      this.secondSchedule = [];

      for (let item of data) {
        var bs = item.activity.toLowerCase().match('breakout session');

        if (String(new Date(item.date).getUTCDate()).match('23') && bs) {
          this.firstSchedule.push(item);
        } else if (String(new Date(item.date).getUTCDate()).match('24') && bs) {
          this.secondSchedule.push(item);
        }
      }
      if (data.length > 0) {
        this.checkStatus = false;
      }
    }).catch(error => console.log(error));
  }

  updateProgram() {
    this.schOneService.getUpdate().subscribe(data => {
        this.schOneService.saveUpdate(data);
        // this.firstSchedule = data;
        this.getDayOne();
      },
      err => {
        console.log(err);
      });
  }

  openDetails(item) {
    this.navCtrl.push(ScheduleDetailsPage, item);
  }
}
