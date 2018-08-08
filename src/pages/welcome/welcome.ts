import {Component} from '@angular/core';
import {AlertController, Events, LoadingController, NavController} from "ionic-angular";
import {GlobalVars} from "../../providers/global-vars";
import {UserProvider} from "../../providers/user/user";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public global: GlobalVars,
    private user: UserProvider,
    private http: Http,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public events: Events) {

    storage.get('login_key').then((logged) => {
      if (logged) {
        this.navCtrl.setRoot(HomePage);
      }
    });

  }

  goToMyPage(page: string) {
    this.navCtrl.push(page);
  }

  login(email, ticket) {
    this.navCtrl.setRoot(HomePage);
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'Email'
        },
        {
          name: 'ticket',
          placeholder: 'Ticket Number',
          type: 'Number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => { }
        },
        {
          text: 'Login',
          handler: data => {
            if (data.ticket.length <= 2) {
              this.global.toast("Invalid ticket", "red");
              return false;
            } else {
              this.login(data.email, data.ticket);
              alert.dismiss();
            }

          }
        }
      ]
    });
    alert.present();
  }


}
