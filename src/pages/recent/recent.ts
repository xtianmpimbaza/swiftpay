import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {SpeakersProvider} from "../../providers/speakers/speakers";
import {BrokerDetailPage} from "../broker-detail/broker-detail";

/**
 * Generated class for the RecentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html',
})
export class RecentPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  merchants: any = [];
  merchant_backup: any = [];
  // checkStatus = true;

  constructor(public navCtrl: NavController, public speakersProvider: SpeakersProvider) {
    // this.saveRecent("new merchant");
    this.getRecentMerchs();
  }

  ngOnInit(): void {
  }

  saveRecent(merchant){
    return this.speakersProvider.saveLocalMerchants(merchant);
  }

  getRecentMerchs(){
    this.speakersProvider.getRecentMerchants().then(data => {
      // this.checkStatus = false;
      if(data != null){
        // this.merchants.push(data);
        this.merchants = data;
      }

      // this.merchants.push(data);
      console.log(data);
      console.log(this.merchants);
      // this.merchant_backup = data
    }).catch(error => console.log(error));
  }

  openSpeakerDetail(merchant) {
    this.navCtrl.push(BrokerDetailPage, merchant);

  }

  goback() {
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
  }
}
