import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import {Events} from "ionic-angular";


@Injectable()
export class UserProvider {

  ticket = 'log_status';

  constructor(public http: Http, public storage: Storage, public events: Events) {

  }


  saveUserLog(ticket: string):void {
    // return this.getLoginTicket().then(result => {
    this.storage.set('login_key', ticket);
    this.events.publish('user:login', ticket);

    // });
  }


}
