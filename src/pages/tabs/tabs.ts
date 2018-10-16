import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SendPage} from "../send/send";
import {AccountPage} from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SendPage;
  // tab3Root = ReceivePage;
  tab4Root = AccountPage;

  constructor() {

  }
}
