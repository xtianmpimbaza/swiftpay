import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {GlobalVars} from "../providers/global-vars";
import {Storage} from "@ionic/storage";
const STORAGE_KEY = 'exhibitors';
@Injectable()
export class ExhibitorsService {

  url: string = 'https://www.adin.ug/abc2018/api/christian.php?auth=246fb595064db95e76bbdd828cf7207662a6baaf&table=delegates';

  constructor(private http: Http, private global: GlobalVars, public storage: Storage) {
    this.url = this.url;
  }
  getExhibitors() {
    return this.storage.get(STORAGE_KEY);
  }

  getExps() {
    return this.http.get(this.global.exhibitors_url).map(res => res.json());
  }

  saveExhibitors(exh) {
    return this.storage.set(STORAGE_KEY, exh).then(data => {
    }, err => {
      console.log(err);
    });
  }

}
