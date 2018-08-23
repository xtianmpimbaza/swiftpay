import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import {GlobalVars} from "../global-vars";

const STORAGE_KEY = 'speakers';
const SPONSORS_KEY = 'sponsors';
const RECENT_KEY = 'recent_merchants';


@Injectable()
export class SpeakersProvider {

  constructor(public http: Http, public storage: Storage, public global: GlobalVars) {

  }

  saveSpeakers(speakers) {
    return this.storage.set(STORAGE_KEY, speakers).then(data => {
    }, err => {
      console.log(err);
    });
  }

  saveSponsors(sponsor) {
    return this.storage.set(SPONSORS_KEY, sponsor).then(data => {
    }, err => {
      console.log(err);
    });
  }

  getSpeakers() {
    return this.http.get(this.global.api_url).map(res => res.json());
  }

  getAllSpeakers() {
    return this.storage.get(STORAGE_KEY);

  }

  getRecentMerchants() {
    return this.storage.get(RECENT_KEY);
  }

  saveLocalMerchants(merchants) {
    return this.storage.set(RECENT_KEY, merchants).then(data => {
      // console.log(data);
    }, err => {
      console.log(err);
    });
  }

  getAllSponsors() {
    return this.storage.get(SPONSORS_KEY);
  }

}
