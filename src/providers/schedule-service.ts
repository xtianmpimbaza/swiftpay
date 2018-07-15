import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Storage} from "@ionic/storage";
const STORAGE_KEY = 'day_one_program';

@Injectable()
export class ScheduleOneService {

  url: string = 'https://abc2018mailer.herokuapp.com/getprogram/';

  constructor(private http: Http, public storage: Storage) {

  }

  getDayOne() {
    return this.storage.get(STORAGE_KEY);
  }

  saveUpdate(exh) {
    return this.storage.set(STORAGE_KEY, exh).then(data => {
    }, err => {
      console.log(err);
    });
  }

  getUpdate() {
    return this.http.get(this.url).map(res => res.json());
  }

}
