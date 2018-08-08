import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {CallNumber} from "@ionic-native/call-number";
import {HomePage} from "../home/home";
import {GlobalVars} from "../../providers/global-vars";

@Component({
  selector: 'page-broker-detail',
  templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

  speaker: any;
  ussdcode : any;

  constructor(public navCtrl: NavController, public global: GlobalVars, public navParams: NavParams, private alertCtrl: AlertController, public service: BrokerService, private callNumber: CallNumber) {
    this.speaker = this.navParams.data;
  }


  executeMerchant(merchant, amount) {
    // if (this.isvalid()) {
      this.ussdcode = `*165*3*`+merchant+`*`+amount+`#`;
      this.callNumber.callNumber(this.ussdcode, true);
    // }
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter amount',
      inputs: [
        {
          name: 'amount',
          placeholder: 'Amount',
          type: 'Number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => { }
        },
        {
          text: 'Pay',
          handler: data => {
            if (Number(data.amount) <= 500) {
              this.global.toast("Amount is less", "red");
              return false;
            } else {
              this.executeMerchant(this.speaker.merchant_code, data.ticket);
              alert.dismiss();
            }

          }
        }
      ]
    });
    alert.present();
  }


}
