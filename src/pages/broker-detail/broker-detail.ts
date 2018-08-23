import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
// import {BrokerService} from '../../providers/broker-service-mock';
import {CallNumber} from "@ionic-native/call-number";
// import {HomePage} from "../home/home";
import {GlobalVars} from "../../providers/global-vars";
import {SpeakersProvider} from "../../providers/speakers/speakers";

@Component({
  selector: 'page-broker-detail',
  templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

  speaker: any;
  ussdcode : any;
  merchants: any = [];

  constructor(public navCtrl: NavController, public service: SpeakersProvider, public speakersProvider: SpeakersProvider, public global: GlobalVars, public navParams: NavParams, private alertCtrl: AlertController, private callNumber: CallNumber) {
    this.speaker = this.navParams.data;
    this.getRecentMerchs();
  }

  getRecentMerchs(){
    this.speakersProvider.getRecentMerchants().then(data => {
      // this.checkStatus = false;
      // this.merchants = data;

      if(data != null){
        this.merchants = data;
      }
      console.log(data);
      // this.merchant_backup = data
    }).catch(error => console.log(error));
  }

  executeMerchant(merchant, amount) {
    // if (this.isvalid()) {
      this.ussdcode = `*165*3*`+merchant+`*`+amount+`#`;
      // console.log(this.ussdcode);

    this.merchants.push(this.speaker);
    // this.merchants.concat([this.speaker]);
    this.saveRecent(this.merchants);

      this.callNumber.callNumber(this.ussdcode, true);
      // this.saveRecent(merchant);
    this.goback();
    // }
  }
  goback() {
    this.navCtrl.pop();
  }

  saveRecent(merchant){
    return this.service.saveLocalMerchants(merchant);
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter amount',
      inputs: [
        {
          name: 'amount',
          placeholder: 'Amount',
          type: 'Number'
        },{
          name: 'reason',
          placeholder: 'Reason',
          type: 'text'
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
              this.executeMerchant(this.speaker.merchant_code, data.amount);
              alert.dismiss();
            }

          }
        }
      ]
    });
    alert.present();
  }


}
