import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CodePayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-code-pay',
  templateUrl: 'code-pay.html',
})
export class CodePayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePayPage');
  }


  //-----------------------
  pay: {merchant?: any, amount?: any} = {};
  submitted = false;


  onPay() {
    this.submitted = true;

    // if (form.valid) {
      // this.userData.login(this.login.username);
      // this.navCtrl.push(TabsPage);
      return 'tel:*130*'+this.pay.amount+'#';
    // }
  }

  // onSignup() {
  //   this.navCtrl.push(SignupPage);
  // }
}
