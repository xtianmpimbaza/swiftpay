import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
// import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {AboutPage} from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ScheduleOneService} from "../providers/schedule-service";
import {ScheduleTwoService} from "../providers/scheduletwo-service";
import {EmailComposer} from "@ionic-native/email-composer";
import {AttendeesService} from "../services/attendees-service";
import {GlobalVars} from "../providers/global-vars";
import {PartnersDetailsPage} from "../pages/partners-details/partners-details";
import {HomePageModule} from "../pages/home/home.module";
import {BreakoutPageModule} from "../pages/breakout/breakout.module";
import {ContactUsPageModule} from "../pages/contact-us/contact-us.module";
import {EventPageModule} from "../pages/event/event.module";
import {ExhibitorsPageModule} from "../pages/exhibitors/exhibitors.module";
import {SchedulePageModule} from "../pages/schedule/schedule.module";
import {SpeakersPageModule} from "../pages/speakers/speakers.module";
import {SponsorsPageModule} from "../pages/sponsors/sponsors.module";
import {ExhibitorsDetailsPageModule} from "../pages/exhibitors-details/exhibitors-details.module";
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import {UserProvider} from "../providers/user/user";
import {AttendeeDetailsPageModule} from "../pages/attendee-details/attendee-details.module";
import {PartnersPageModule} from "../pages/partners/partners.module";
import { SpeakersProvider } from '../providers/speakers/speakers';
import {ScheduleDetailsPageModule} from "../pages/schedule-details/schedule-details.module";
import {ExhibitorsService} from "../services/exhibitors-service";
import {BrokerService} from "../providers/broker-service-mock";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    // PropertyDetailPage,
    BrokerDetailPage,
    WelcomePage,
    PartnersDetailsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomePageModule,
    BreakoutPageModule,
    ContactUsPageModule,
    EventPageModule,
    ExhibitorsPageModule,
    SchedulePageModule,
    SpeakersPageModule,
    PartnersPageModule,
    AttendeeDetailsPageModule,
    SponsorsPageModule,
    ExhibitorsDetailsPageModule,
    ScheduleDetailsPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    // PropertyDetailPage,
    PartnersDetailsPage,
    BrokerDetailPage,
    WelcomePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BrokerService,
    ScheduleOneService,
    ScheduleTwoService,
    AttendeesService,
    EmailComposer,
    ExhibitorsService,
    UserProvider,
    SpeakersProvider,
    GlobalVars,
    SQLitePorter,
    SQLite,
    // FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
