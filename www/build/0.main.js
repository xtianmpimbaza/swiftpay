webpackJsonp([0],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recent__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPageModule", function() { return RecentPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecentPageModule = (function () {
    function RecentPageModule() {
    }
    return RecentPageModule;
}());
RecentPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recent__["a" /* RecentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recent__["a" /* RecentPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__recent__["a" /* RecentPage */]
        ]
    })
], RecentPageModule);

//# sourceMappingURL=recent.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_speakers_speakers__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RecentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RecentPage = (function () {
    // checkStatus = true;
    function RecentPage(navCtrl, speakersProvider) {
        this.navCtrl = navCtrl;
        this.speakersProvider = speakersProvider;
        // constructor(public navCtrl: NavController, public navParams: NavParams) {
        // }
        this.merchants = [];
        this.merchant_backup = [];
        // this.saveRecent("new merchant");
        this.getRecentMerchs();
    }
    RecentPage.prototype.ngOnInit = function () {
    };
    RecentPage.prototype.saveRecent = function (merchant) {
        return this.speakersProvider.saveLocalMerchants(merchant);
    };
    RecentPage.prototype.getRecentMerchs = function () {
        var _this = this;
        this.speakersProvider.getRecentMerchants().then(function (data) {
            // this.checkStatus = false;
            if (data != null) {
                // this.merchants.push(data);
                _this.merchants = data;
            }
            // this.merchants.push(data);
            console.log(data);
            console.log(_this.merchants);
            // this.merchant_backup = data
        }).catch(function (error) { return console.log(error); });
    };
    RecentPage.prototype.openSpeakerDetail = function (merchant) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__["a" /* BrokerDetailPage */], merchant);
    };
    RecentPage.prototype.goback = function () {
        this.navCtrl.pop();
        console.log('Click on button Test Console Log');
    };
    return RecentPage;
}());
RecentPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-recent',template:/*ion-inline-start:"E:\ionic\autopay\src\pages\recent\recent.html"*/'<!--\n  Generated template for the RecentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recent merchants</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!--<button ion-item *ngFor="let merchant of merchants" >-->\n    <button ion-item *ngFor="let merchant of merchants" (click)="openSpeakerDetail(merchant)">\n      <!--<ion-avatar item-left>-->\n      <!--<img src="{{speaker.picture}}"/>-->\n      <!--</ion-avatar>-->\n      <h2>{{merchant.merchant_name}}</h2>\n      <p>{{merchant.merchant_code}}</p>\n\n\n    </button>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\autopay\src\pages\recent\recent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_speakers_speakers__["a" /* SpeakersProvider */]])
], RecentPage);

//# sourceMappingURL=recent.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map