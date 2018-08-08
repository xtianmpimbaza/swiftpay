import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  checkStatus = true;

  constructor(public navCtrl: NavController, public speakersProvider: SpeakersProvider) {
    this.checkStatus = true;
    this.getSpeakers();
    this.loadMerchants();
  }

  ngOnInit(): void {
  }

  getItems(ev) {
    this.merchants = this.merchant_backup;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.merchants = this.merchants.filter((sp) => {
        return ((sp.merchant_name +  ' ' + sp.merchant_code + ' ' + sp.m_business_type + ' ' + sp.m_location).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(event) {
    this.merchants = this.merchant_backup;
  }

  getSpeakers(){
    this.speakersProvider.getAllSpeakers().then(data => {
      this.checkStatus = false;

      this.merchants = data
      this.merchant_backup = data
    }).catch(error => console.log(error));
  }

  openSpeakerDetail(merchant) {
    this.navCtrl.push(BrokerDetailPage, merchant);
  }

  loadMerchants() {
    this.speakersProvider.getSpeakers().subscribe(data => {
        this.speakersProvider.saveLocalMerchants(data);
        this.merchants = data;
      },
      err => {
        console.log(err);
      });
  }
}
