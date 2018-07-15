import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {SpeakersProvider} from "../../providers/speakers/speakers";
import {BrokerService} from "../../providers/broker-service-mock";

@IonicPage()
@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {

  partners: any = [];
  partners_backup: any = [];
  loaded: boolean;
  checkStatus: boolean = true;

  constructor(public navCtrl: NavController, public service: BrokerService, public partnersProvider: SpeakersProvider) {
    this.loaded = false;
    this.getPartners();
    this.getPosts();
  }

  getPartners() {
    this.partnersProvider.getAllSponsors().then(data => {
      this.partners = data;
      this.partners_backup = data;
      this.checkStatus = false;
    }).catch(error => alert(JSON.stringify(error)));
  }

  openSpeakerDetail(broker) {
    // this.navCtrl.push(BrokerDetailPage, broker);
    console.log(broker);
  }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
    this.partners = this.partners_backup;

    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.partners = this.partners.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  onCancel(event) {
    // this.findAll();
    console.log("cleaning search");
    // this.service.getAll().then(data => this.attendees = data);
    // this.search = false;
    this.partnersProvider.getAllSponsors().then(data => {
      this.partners = data;
      this.checkStatus = false;
    }).catch(error => console.log(error));
  }

  getPosts() {
    this.service.getSponsors().subscribe(data => {
        this.partnersProvider.saveSponsors(data);
        this.partners = data;
      },
      err => {
        console.log(err);
      });
  }

}
