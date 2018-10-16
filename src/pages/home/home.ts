import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ReceivePage} from "../receive/receive";
import {BinusuProvider} from "../../providers/binusu/binusu";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  rates: any = [];
  bitcoinSell: any = 0;
  binusuSell: any = 0;
  litecoinSell: any = 0;
  etherSell: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public binusuProvider: BinusuProvider) {
    this.loadMerchants();
  }

  loadMerchants() {
    this.binusuProvider.getRates().subscribe(data => {
        this.rates = data;
        this.bitcoinSell = data[0].Sell;
        this.binusuSell = data[1].Sell;
        this.etherSell = data[2].Sell;
        this.litecoinSell = data[3].Sell;
        console.log(this.bitcoinSell);
      },
      err => {
        console.log(err);
      });
  }

  openReceive(coin) {
    this.navCtrl.push(ReceivePage, coin);
  }

  goToMyPage(page:string) {
    this.navCtrl.push(page);
  }

}
