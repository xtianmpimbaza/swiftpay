webpackJsonp([8],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_pay__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePayPageModule", function() { return CodePayPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CodePayPageModule = (function () {
    function CodePayPageModule() {
    }
    return CodePayPageModule;
}());
CodePayPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__code_pay__["a" /* CodePayPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__code_pay__["a" /* CodePayPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__code_pay__["a" /* CodePayPage */]
        ]
    })
], CodePayPageModule);

//# sourceMappingURL=code-pay.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_vars__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_speakers_speakers__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePayPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../providers/global-vars.ts"/>






/**
 * Generated class for the CodePayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CodePayPage = (function () {
    function CodePayPage(http, navCtrl, navParams, callNumber, global, speakersProvider) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.global = global;
        this.speakersProvider = speakersProvider;
        this.ussdcode = '';
        this.merchants = [];
        this.pay = {};
        this.submitted = false;
        this.getRecentMerchs();
    }
    CodePayPage.prototype.executeMerchant = function () {
        var _this = this;
        if (this.isvalid()) {
            // this.http.post("http://127.0.0.1:3000/savereason", {reason: this.pay.reason}).map(res => res.json()).subscribe(data => {
            this.http.post("http://142.93.42.153:3000/savereason", { reason: this.pay.reason }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                // this.ussdcode = `*165*3*` + this.pay.merchant + `*` + this.pay.amount + `#`;
                // this.callNumber.callNumber(this.ussdcode, true);
                _this.merchants.push({ merchant_code: _this.pay.merchant });
                // this.saveRecent(this.merchants);
                _this.ussdcode = "*165*3*" + _this.pay.merchant + "*" + _this.pay.amount + "#";
                _this.callNumber.callNumber(_this.ussdcode, true);
                _this.goback();
            }, function (err) {
                console.log('error' + err);
                _this.merchants.push({ merchant_code: _this.pay.merchant });
                // this.saveRecent(this.merchants);
                _this.ussdcode = "*165*3*" + _this.pay.merchant + "*" + _this.pay.amount + "#";
                _this.callNumber.callNumber(_this.ussdcode, true);
                _this.goback();
            });
        }
    };
    CodePayPage.prototype.goback = function () {
        this.navCtrl.pop();
        // console.log('Click on button Test Console Log');
    };
    CodePayPage.prototype.saveRecent = function (merchant) {
        return this.speakersProvider.saveLocalMerchants(merchant);
    };
    CodePayPage.prototype.getRecentMerchs = function () {
        var _this = this;
        this.speakersProvider.getRecentMerchants().then(function (data) {
            // this.checkStatus = false;
            // this.merchants = data;
            if (data != null) {
                _this.merchants = data;
            }
            console.log(data);
            // this.merchant_backup = data
        }).catch(function (error) { return console.log(error); });
    };
    CodePayPage.prototype.isvalid = function () {
        if (this.pay.merchant.empty || this.pay.amount.empty) {
            this.global.toast("Fill empty fields", "red");
            return false;
        }
        else {
            return true;
        }
    };
    return CodePayPage;
}());
CodePayPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-code-pay',template:/*ion-inline-start:"E:\ionic\autopay\src\pages\code-pay\code-pay.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pay by merchant</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #payForm="ngForm" novalidate>\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label stacked color="dark">Merchant code</ion-label>\n        <ion-input [(ngModel)]="pay.merchant" name="merchant" type="number" #merchant="ngModel" spellcheck="false"\n                   autocapitalize="off" required>\n        </ion-input>\n      </ion-item>\n      <p [hidden]="merchant.valid || submitted == false" color="danger" padding-left>\n        Merchant code is required\n      </p>\n\n      <ion-item>\n        <ion-label stacked color="dark">Amount (UGX)</ion-label>\n        <ion-input [(ngModel)]="pay.amount" name="amount" type="number" #amount="ngModel" required>\n        </ion-input>\n      </ion-item>\n      <p [hidden]="amount.valid || submitted == false" color="danger" padding-left>\n        Password is required\n      </p>\n      <ion-item>\n        <ion-label stacked color="dark">Reason</ion-label>\n        <ion-input [(ngModel)]="pay.reason" name="reason" type="text" #reason="ngModel" required>\n        </ion-input>\n      </ion-item>\n      <p [hidden]="reason.valid || submitted == false" color="danger" padding-left>\n        Reason is required\n      </p>\n    </ion-list>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button (click)="executeMerchant()" type="submit" block>Pay</button>\n      </ion-col>\n      <!--<ion-col>-->\n      <!--<button type="button" ion-button color="primary" (click)="chechBalance()">Balance</button>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\autopay\src\pages\code-pay\code-pay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__providers_global_vars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_5__providers_speakers_speakers__["a" /* SpeakersProvider */]])
], CodePayPage);

//# sourceMappingURL=code-pay.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map