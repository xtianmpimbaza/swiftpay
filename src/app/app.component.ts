import {Component, ViewChild} from '@angular/core';
import {Events, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {SpeakersPage} from "../pages/speakers/speakers";
import {PartnersPage} from "../pages/partners/partners";
import {ExhibitorsPage} from "../pages/exhibitors/exhibitors";
import {SponsorsPage} from "../pages/sponsors/sponsors";
import {SchedulePage} from "../pages/schedule/schedule";
import {BreakoutPage} from "../pages/breakout/breakout";
import {HomePage} from "../pages/home/home";
import {ContactUsPage} from "../pages/contact-us/contact-us";
import {UserProvider} from "../providers/user/user";

// import {FCM} from "@ionic-native/fcm";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  helpMenuItems: Array<MenuItem>;

  rootPage: any;


  loggedInPages: MenuItem[] = [
    {title: 'Home', component: HomePage, icon: 'ios-home'},
    {title: 'Merchants', component: HomePage, icon: 'ios-clipboard'},
    {title: 'Promotions', component: HomePage, icon: 'ios-cash'},
    {title: 'Save Codes', component: HomePage, icon: 'ios-bookmarks'},
    {title: 'Make payment', component: HomePage, icon: 'ios-camera'},
    {title: 'Load Airtime', component: HomePage, icon: 'ios-phone-portrait'},
    {title: 'Balance', component: HomePage, icon: 'ios-card'}
  ];
  loggedOutPages: MenuItem[] = [
    {title: 'Home', component: HomePage, icon: 'ios-home'},
    {title: 'Merchants', component: HomePage, icon: 'ios-vclipboard'},
    {title: 'Promotions', component: HomePage, icon: 'ios-cash'},
    {title: 'Save Codes', component: HomePage, icon: 'ios-bookmarks'},
    {title: 'Make payment', component: HomePage, icon: 'ios-camera'},
    {title: 'Load Airtime', component: HomePage, icon: 'ios-phone-portrait'},
    {title: 'Balance', component: HomePage, icon: 'ios-card'}
  ];

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private user: UserProvider,
              private storage: Storage,
              public menu: MenuController,
              public events: Events) {

    // this.initializeApp();
    this.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);
    this.listenToLoginEvents();

    this.helpMenuItems = [
      {title: 'About us', component: AboutPage, icon: 'ios-contact'},
      {title: 'Contact us', component: ContactUsPage, icon: 'ios-text'}
    ];

    storage.get('login_key').then((logged) => {
      if (logged) {
        this.enableMenu(true);
        this.rootPage = HomePage;
        // this.nav.setRoot(HomePage);
      } else {
        this.enableMenu(false);
        this.rootPage = HomePage;
        // this.rootPage = WelcomePage;
      }
      this.platformReady()
    });


  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', (ticket) => {
      console.log("Ticket loged no: ", ticket);
      this.enableMenu(true);
    });
    this.enableMenu(true);
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get('login_key').then((value) => {
      console.log('Is reached');
      return value === true;
    });
  };

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      // this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    // this.navCtrl.push(page.component);
  }

}
