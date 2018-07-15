import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

const STORAGE_KEY = 'speakers';
const SPONSORS_KEY = 'sponsors';


@Injectable()
export class SpeakersProvider {

  constructor(public http: Http, public storage: Storage) {

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

  getAllSpeakers() {
    return this.storage.get(STORAGE_KEY);
  }

  getAllSponsors() {
    return this.storage.get(SPONSORS_KEY);
  }

}
