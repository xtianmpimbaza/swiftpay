import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';

import {FormBuilder, FormGroup} from "@angular/forms";
// import {Validators, FormBuilder, FormGroup} from "@angular/forms";
// import {GlobalVars} from "../../providers/global-vars";
import {Http} from "@angular/http";
import {EmailComposer} from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage implements OnInit {
  receipient: string;
  data: any = {};
  credentialsForm: FormGroup;

  @ViewChild('myInput') myInput: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private emailComposer: EmailComposer,
    public element: ElementRef,
    private http: Http,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder) {
    this.receipient = this.navParams.get('mail_receipiennt');
    this.credentialsForm = this.formBuilder.group({
      email_to: this.receipient,
      // email_from: ['',Validators.compose([Validators.pattern(
      //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      no_html: ['']
    });
    this.data.response = '';
    // this.ionViewDidLoad();
  }

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

  ngOnInit(): void {
    // setTimeout(() => this.adjust(), 0);
  }

  //
  // adjust(): void {
  //   const textArea = this.myInput['_elementRef'].nativeElement.getElementsByTagName('textarea')[0];
  //   textArea.style.overflow = 'hidden';
  //   textArea.style.height = 'auto';
  //   textArea.style.height = textArea.scrollHeight + 'px';
  // }

  public sendContact() {
    console.log('Form submit');
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  public send() {
    // console.log(this.credentialsForm.value);

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
        console.log("mail available");
      }
    });

    let email = {
      app: 'gmail',
      to: this.credentialsForm.value.email_to,
      subject: 'P2P from Africa Blockchain',
      body: this.credentialsForm.value.no_html,
      isHtml: true
    };

    // this.emailComposer.addAlias('gmail', 'com.google.android.gm');
//
// // then use alias when sending email
//     this.emailComposer.open({
//       app: 'gmail',
//       ...
//     });

// Send a text message using default options
    this.emailComposer.open(email);


    // let loader = this.loadingCtrl.create({
    //   content: "Sending....."
    // });
    // loader.present();
    //
    // new Promise(resolve => {
    //   this.http.post(this.global.api_url, this.credentialsForm.value)
    //     .map(res => res.json())
    //     .subscribe((result) => {
    //         console.log(result);
    //
    //         if (result.feedback =='success') {
    //           this.global.toast("Email sent.", 'toast-error');
    //           loader.dismiss();
    //           this.closeModal();
    //         } else {
    //             this.global.toast("Error occurred, Email not sent", 'toast-error');
    //             loader.dismiss();
    //         }
    //       },
    //       (err) => {
    //         this.global.toast("Error occurred, Check your internet connection", 'toast-error');
    //         loader.dismiss();
    //       });
    // });
    this.closeModal();
  }

  // subject: 'Request to Blockchain conference Attendee',
  //P2P from Africa Blockchain

}
