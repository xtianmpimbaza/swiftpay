import { Component } from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  my_url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitize: DomSanitizer) {

  }

  urlpaste(){
    this.my_url = "https://africanblockchain.org/book-a-seat/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
  }

}
