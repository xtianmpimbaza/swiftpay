import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ExhibitorsDetailsPage} from "../exhibitors-details/exhibitors-details";
import {ExhibitorsService} from "../../services/exhibitors-service";

@IonicPage()
@Component({
  selector: 'page-exhibitors',
  templateUrl: 'exhibitors.html',
})
export class ExhibitorsPage {

  exhibitors: Array<any>;
  exhibitors_backup = [];
  searchKey: string = "";
  search: boolean = false;
  checkStatus = true;

  constructor(public navCtrl: NavController, public service: ExhibitorsService) {
    this.getDelegates();
    this.getPosts();
  }

  getDelegates() {
    this.service.getExhibitors().then(data => {
      this.exhibitors = data
      this.exhibitors_backup = data;
      if (data.length > 0) {
        this.checkStatus = false;
      }
    }).catch(error => console.log(error));
  }

  getPosts() {
    this.service.getExps().subscribe(data => {
        this.service.saveExhibitors(data);
        this.exhibitors = data;
      },
      err => {
        console.log(err);
      });
  }

  openSpeakerDetail(exb) {
    // this.navCtrl.push(ExhibitorsDetailsPage, exb);
  }

  onInput(ev) {
    this.exhibitors = this.exhibitors_backup;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.exhibitors = this.exhibitors.filter((delegate) => {
        return (delegate.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(event) {
    this.exhibitors = this.exhibitors_backup;
  }
}
