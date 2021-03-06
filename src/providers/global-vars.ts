import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";

@Injectable()
export class GlobalVars {
  public api_url: string = 'http://142.93.42.153:3000/getmerchants/';
  public rates_url: string = 'https://binusu.com/rates.php?json';

  // public sponsors_url: string = 'https://abc2018mailer.herokuapp.com/getsponsors/';
  // public exhibitors_url: string = 'https://abc2018mailer.herokuapp.com/getexhibitors/';
  public username: string;
  public password: string;
  public remote: string;

  constructor(private toastCtrl: ToastController) {
    this.username = '';
    this.password = '';
  }

  // Show a toast
  toast(message: string, style: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000,
      cssClass: style,
    });
    toast.present();
  }

}
