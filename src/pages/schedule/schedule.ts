import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ScheduleOneService} from "../../providers/schedule-service";
import {ScheduleDetailsPage} from "../schedule-details/schedule-details";

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  viewMode: string = "first";
  firstSchedule: Array<any>;
  secondSchedule: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private schOneService: ScheduleOneService) {

    this.getDayOne();
    this.updateProgram();
  }

  getDayOne() {
    this.firstSchedule = [];
    this.secondSchedule = [];
    this.schOneService.getDayOne().then(data => {
      if (data) {
        for (let item of data) {
          if (String(new Date(item.date).getUTCDate()).match('23')) {
            this.firstSchedule.push(item);
          } else if (String(new Date(item.date).getUTCDate()).match('24')) {
            this.secondSchedule.push(item);
          }
        }
      }
    }).catch(error => console.log(error));
  }

  updateProgram() {
    this.schOneService.getUpdate().subscribe(data => {
        this.schOneService.saveUpdate(data);
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
