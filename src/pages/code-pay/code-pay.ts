///<reference path="../../providers/global-vars.ts"/>
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import {GlobalVars} from "../../providers/global-vars";
import {Http} from "@angular/http";
import {SpeakersProvider} from "../../providers/speakers/speakers";

/**
 * Generated class for the CodePayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-code-pay',
  templateUrl: 'code-pay.html',
})
export class CodePayPage {
  ussdcode = '';
  merchants: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, public global: GlobalVars, public speakersProvider: SpeakersProvider) {
    this.getRecentMerchs();
  }

  pay: { merchant?: any, amount?: any, reason?: any } = {};
  submitted = false;

  executeMerchant() {

    if (this.isvalid()) {
      // this.http.post("http://127.0.0.1:3000/savereason", {reason: this.pay.reason}).map(res => res.json()).subscribe(data => {
      this.http.post("http://142.93.42.153:3000/savereason", {reason: this.pay.reason}).map(res => res.json()).subscribe(data => {
        console.log(data);

        // this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
        // this.callNumber.callNumber(this.ussdcode, true);
        this.merchants.push({merchant_code: this.pay.merchant});
        // this.saveRecent(this.merchants);

        this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
        this.callNumber.callNumber(this.ussdcode, true);
        this.goback();

      }, err => {
        console.log('error' + err);
        this.merchants.push({merchant_code: this.pay.merchant});
        // this.saveRecent(this.merchants);

        this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
        this.callNumber.callNumber(this.ussdcode, true);
        this.goback();

      });


    }
  }

  goback() {
    this.navCtrl.pop();
    // console.log('Click on button Test Console Log');
  }

  saveRecent(merchant){
    return this.speakersProvider.saveLocalMerchants(merchant);
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

  isvalid() {
    if (this.pay.merchant.empty || this.pay.amount.empty) {
      this.global.toast("Fill empty fields", "red");
      return false;
    } else {
      return true;
    }
  }

}
