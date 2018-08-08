import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {BrokerDetailPage} from "../broker-detail/broker-detail";
import {BrokerService} from "../../providers/broker-service-mock";
import {SpeakersProvider} from "../../providers/speakers/speakers";


@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage implements OnInit {

  merchants: any = [];
  merchant_backup: any = [];
  checkStatus = true;

  constructor(public navCtrl: NavController, public service: BrokerService, public speakersProvider: SpeakersProvider) {
    this.checkStatus = true;
    this.getSpeakers();
    this.getPosts();
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

  getPosts() {
    this.service.getSpeakers().subscribe(data => {
        this.speakersProvider.saveSpeakers(data);
        this.merchants = data;
      },
      err => {
        console.log(err);
      });
  }

}
