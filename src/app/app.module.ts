import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {AboutPage} from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {EmailComposer} from "@ionic-native/email-composer";

import {GlobalVars} from "../providers/global-vars";
import {HomePageModule} from "../pages/home/home.module";
import {ContactUsPageModule} from "../pages/contact-us/contact-us.module";
import {SpeakersPageModule} from "../pages/speakers/speakers.module";
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import {UserProvider} from "../providers/user/user";
import { SpeakersProvider } from '../providers/speakers/speakers';
import {CallNumber} from "@ionic-native/call-number";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    // PropertyDetailPage,
    BrokerDetailPage,
    WelcomePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomePageModule,
    ContactUsPageModule,
    SpeakersPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    BrokerDetailPage,
    WelcomePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    UserProvider,
    SpeakersProvider,
    GlobalVars,
    SQLitePorter,
    SQLite,
    CallNumber,
    // FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
