import { Component } from '@angular/core';
import {
  // ActionSheetController,
  // AlertController,
  IonicPage,
  // ModalController,
  NavController,
  NavParams
} from 'ionic-angular';
// import {EmailComposer} from "@ionic-native/email-composer";
import {AttendeesService} from "../../services/attendees-service";

@IonicPage()
@Component({
  selector: 'page-exhibitors-details',
  templateUrl: 'exhibitors-details.html',
})
export class ExhibitorsDetailsPage {

  attendee: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AttendeesService,
    // private emailComposer: EmailComposer,
    // public actionSheetCtrl: ActionSheetController,
    // public alertCtrl: AlertController,
    // public modalCtrl: ModalController
  ) {
    console.log(this.navParams.data);
    this.attendee = this.navParams.data;
    // service.findById(this.attendee.id).then(
    //   attendee => this.attendee = attendee
    // );
  }

}
