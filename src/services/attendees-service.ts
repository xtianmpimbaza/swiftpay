import {Injectable} from '@angular/core';
import attendees from "../providers/attendees";
import {Http} from "@angular/http";
import {GlobalVars} from "../providers/global-vars";
import {Storage} from "@ionic/storage";

const STORAGE_KEY = 'delegates';

@Injectable()
export class AttendeesService {

  url: string = 'https://abc2018mailer.herokuapp.com/getdelegates/';

  constructor(private http: Http, public storage: Storage) {

  }

  getDelegates() {
    return this.storage.get(STORAGE_KEY);
  }

  getDels() {
    return this.http.get(this.url).map(res => res.json());
  }

  saveDelegates(delg) {
    return this.storage.set(STORAGE_KEY, delg).then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  findById(id) {
    return Promise.resolve(attendees[id - 1]);
  }

}
