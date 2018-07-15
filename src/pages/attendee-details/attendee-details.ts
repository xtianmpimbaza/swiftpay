import {Component} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  ModalController,
  NavController,
  NavParams
} from 'ionic-angular';
import {AttendeesService} from "../../services/attendees-service";
import {EmailComposer} from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-attendee-details',
  templateUrl: 'attendee-details.html',
})
export class AttendeeDetailsPage {

  attendee: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AttendeesService,
    private emailComposer: EmailComposer,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
    console.log(this.navParams.data);
    this.attendee = this.navParams.data;
  }

  send(mail) {

    let email = {
      to: mail.Email,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'African blockchain conference',
      body: '',
      isHtml: true
    };
    console.log(this.attendee.Email);

    this.emailComposer.open(email);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose action',
      buttons: [
        {
          text: 'Send Email',
          handler: () => {
            // this.send('xtianm4@gmail.com');
            this.openModal();
            // this.emailPrompt();

          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
          }
        }
      ]
    });
    actionSheet.present();
  }

  sendMail(){
    this.openModal();
  };

  emailPrompt() {
    let alert = this.alertCtrl.create({
      title: 'add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'amount',
          placeholder: 'amount',
          type: 'number' // here the error
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  public openModal() {
    var data = { mail_receipiennt : this.attendee.email };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
  }

}
