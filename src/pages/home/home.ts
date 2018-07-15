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
  slideData = [{ image: "assets/img/slide1.jpg" },{ image: "assets/img/slide3.jpg" },{ image: "assets/img/slide4.jpg" },{ image: "assets/img/slide5.jpg" }];
  homeOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction: false
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
