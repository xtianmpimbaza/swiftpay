import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {BrokerDetailPage} from "../broker-detail/broker-detail";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  viewMode: string = "home";
  slideData = [
    { image: "assets/img/slider5.jpg", merchant_name: "KFC", merchant_code: "12345", m_business_type: "Restaurant", m_location: "Lugogo", contact: "0312532532"},
    { image: "assets/img/slide6.jpg", merchant_name: "MTN", merchant_code: "12345", m_business_type: "Telcom", m_location: "Shoprite", contact: "123"},
    { image: "assets/img/slide7.jpg", merchant_name: "TAG TEAM", merchant_code: "12345", m_business_type: "Pizza", m_location: "Lugogo", contact: "0800273030"},
    { image: "assets/img/slide8.jpg", merchant_name: "Plater", merchant_code: "12345", m_business_type: "Motel", m_location: "Lugogo", contact: "256706111110"}
    ];
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
  openSpeakerDetail(merchant) {
    this.navCtrl.push(BrokerDetailPage, merchant);
  }
  goToMyPage(page:string) {
    // go to the MyPage component
    this.navCtrl.push(page);

  }



}
