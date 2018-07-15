import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    speaker: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: BrokerService) {
        this.speaker = this.navParams.data;
    }

}
