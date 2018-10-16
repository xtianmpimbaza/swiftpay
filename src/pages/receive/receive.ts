import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import {CallNumber} from "@ionic-native/call-number";
import {GlobalVars} from "../../providers/global-vars";
// import {RequestOptions} from "@angular/common/http";
import {Http} from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {
  coin: any;
  pay: { amount?: any } = {};
  submitted = false;
  data: any = {};

  // url:any = "api_key=3e8c96cbd70a1b01daf2a19abdb382105a788e6bee3e2c2df9bcc2190fdf8aa4&method=acceptdeposit&wallet_id=mpimbaza240&amount=100000&currency=ETH&type=json"

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalVars, public http: Http) {
    this.coin = this.navParams.data;
    console.log(this.coin);

  }

  checkCurrency(coin) {
    if (coin == 'bitcoin') {
      return 'btc';
    }
    if (coin == 'ethereum') {
      return 'eth';
    }
    if (coin == 'litecoin') {
      return 'ltc';
    }
    if (coin == 'stellar') {
      return 'stellar';
    }
    if (coin == 'xrp') {
      return 'xrp';
    }
  }

  acceptDeposit() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    // let options = new RequestOptions({ headers: headers });

    let myData = {
      "api_key": "3e8c96cbd70a1b01daf2a19abdb382105a788e6bee3e2c2df9bcc2190fdf8aa4",
      "method": "acceptdeposit",
      "wallet_id": "mpimbaza240",
      "amount": "100000",
      "currency": this.checkCurrency(this.coin),
      "type": "json"
    }

    var link = 'http://localhost/bitcoinnode/bc/daemon/mobileapi.php';
    // var link = 'http://localhost/bitcoinnode/bc/daemon/apirequest.php';
    console.log(link);
    console.log(myData);
    this.http.post(link, myData)
    // this.http.post(link, myData, options)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!" + error);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivePage');
  }

  isvalid() {
    if (this.pay.amount.empty) {
      this.global.toast("Enter amount first", "red");
      return false;
    } else {
      return true;
    }
  }

  executeMerchant() {

    if (this.isvalid()) {
      // this.http.post("http://127.0.0.1:3000/savereason", {reason: this.pay.reason}).map(res => res.json()).subscribe(data => {
      // this.http.post("http://142.93.42.153:3000/savereason", {reason: this.pay.reason}).map(res => res.json()).subscribe(data => {
      //   console.log(data);

      // this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
      // this.callNumber.callNumber(this.ussdcode, true);
      //   this.merchants.push({merchant_code: this.pay.merchant});
      //   // this.saveRecent(this.merchants);
      //
      //   this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
      //   this.callNumber.callNumber(this.ussdcode, true);
      //   this.goback();
      //
      // }, err => {
      //   console.log('error' + err);
      //   this.merchants.push({merchant_code: this.pay.merchant});
      //   // this.saveRecent(this.merchants);
      //
      //   this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
      //   this.callNumber.callNumber(this.ussdcode, true);
      //   this.goback();
      console.log('Reached');
    }
  }

}
