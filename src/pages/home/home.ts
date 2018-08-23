import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  viewMode: string = "home";
  slideData = [{ image: "assets/img/slider5.jpg" },{ image: "assets/img/slide6.jpg" },{ image: "assets/img/slide7.jpg" },{ image: "assets/img/slide8.jpg" }];
  homeOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  onPromoSlideChanged() {
    // alert('ABC');
    // this.promoSlider.options = this.homeOptions;
    // this.promoSlider.rapidUpdate();
    //What should i do in this method?

  };

  goToMyPage(page:string) {
    // go to the MyPage component
    this.navCtrl.push(page);

  }



}
