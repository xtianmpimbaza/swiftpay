import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AttendeesService} from "../../services/attendees-service";
import {AttendeeDetailsPage} from "../attendee-details/attendee-details";


@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {
  attendees: Array<any>;
  searchKey: string = "";
  search: boolean = false;
  checkStatus = true;
  attendees_backup: any = [];
  url: string = 'http://localhost/appapi/christian.php';

  constructor(public navCtrl: NavController, public service: AttendeesService) {

    this.getDelegates();
    this.getPosts();
  }

  getDelegates(){
    this.service.getDelegates().then(data => {
      this.attendees = data
      this.attendees_backup = data;
      if (data.length > 0) {
        this.checkStatus = false;
      }
    }).catch(error => console.log(error));
  }

  getPosts() {
    this.service.getDels().subscribe(data => {
        this.service.saveDelegates(data);
        this.attendees = data;
      },
      err => {
        console.log(err);
      });
  }

  openSpeakerDetail(delegate) {
    this.navCtrl.push(AttendeeDetailsPage, delegate);
  }

  getItems(ev) {
    this.attendees = this.attendees_backup;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.attendees = this.attendees.filter((delegate) => {
        return ((delegate.first_name +  ' ' + delegate.last_name + ' ' + delegate.company+ ' ' + delegate.position).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(event) {
      this.attendees = this.attendees_backup;
  }

}
