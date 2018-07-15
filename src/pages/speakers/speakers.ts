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

  speakers: any = [];
  speakers_backup: any = [];
  checkStatus = true;

  constructor(public navCtrl: NavController, public service: BrokerService, public speakersProvider: SpeakersProvider) {
    this.checkStatus = true;
    this.getSpeakers();
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getItems(ev) {
    this.speakers = this.speakers_backup;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.speakers = this.speakers.filter((sp) => {
        return ((sp.name +  ' ' + sp.title + ' ' + sp.company).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(event) {
    this.speakers = this.speakers_backup;
  }

  getSpeakers(){
    this.speakersProvider.getAllSpeakers().then(data => {
      // if (data.length > 0) {
        this.checkStatus = false;
      // }
      this.speakers = data
      this.speakers_backup = data
    }).catch(error => console.log(error));
  }

  openSpeakerDetail(broker) {
    this.navCtrl.push(BrokerDetailPage, broker);
  }

  getPosts() {
    this.service.getSpeakers().subscribe(data => {
        this.speakersProvider.saveSpeakers(data);
        this.speakers = data;
      },
      err => {
        console.log(err);
      });
  }

}
