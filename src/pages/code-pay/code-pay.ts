///<reference path="../../providers/global-vars.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {GlobalVars} from "../../providers/global-vars";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, public global: GlobalVars,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePayPage');
  }

  pay: {merchant?: any, amount?: any} = {};
  submitted = false;

  chechBalance() {
    this.callNumber.callNumber(`*131#`, true);
  }

  executeMerchant() {
    if (this.isvalid()) {
      this.ussdcode = `*130*` + this.pay.amount + `#`;
      // this.ussdcode = `*165*3*`+merchant+`*`+amount+`#`;
      this.callNumber.callNumber(this.ussdcode, true);
    }
  }

  loadAirtime() {
    if (this.isvalid()) {
      this.ussdcode = `*130*` + this.pay.amount + `#`;
      this.callNumber.callNumber(this.ussdcode, true);
    }
  }

  isvalid(){
    if (this.pay.merchant.empty || this.pay.amount.empty) {
      this.global.toast("Fill empty fields", "red");
      return false;
    }else {
      return true;
    }
  }

}
