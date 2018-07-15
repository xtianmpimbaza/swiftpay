import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AttendeesService} from "../../services/attendees-service";

@IonicPage()
@Component({
  selector: 'page-partners-details',
  templateUrl: 'partners-details.html',
})
export class PartnersDetailsPage {

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
    service.findById(this.attendee.id).then(
      attendee => this.attendee = attendee
    );
  }



}
