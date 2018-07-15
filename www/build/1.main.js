webpackJsonp([1],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_pay__ = __webpack_require__(359);
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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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


/**
 * Generated class for the CodePayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CodePayPage = (function () {
    function CodePayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //-----------------------
        this.pay = {};
        this.submitted = false;
    }
    CodePayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CodePayPage');
    };
    CodePayPage.prototype.onPay = function () {
        this.submitted = true;
        // if (form.valid) {
        // this.userData.login(this.login.username);
        // this.navCtrl.push(TabsPage);
        return 'tel:*130*' + this.pay.amount + '#';
        // }
    };
    return CodePayPage;
}());
CodePayPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-code-pay',template:/*ion-inline-start:"E:\ionic\autopay\src\pages\code-pay\code-pay.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pay by merchant</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #payForm="ngForm" novalidate>\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label stacked color="dark">Merchant code</ion-label>\n        <ion-input [(ngModel)]="pay.merchant" name="merchant" type="number" #merchant="ngModel" spellcheck="false" autocapitalize="off" required>\n        </ion-input>\n      </ion-item>\n      <p [hidden]="merchant.valid || submitted == false" color="danger" padding-left>\n        Merchant code is required\n      </p>\n\n      <ion-item>\n        <ion-label stacked color="dark">Amount (UGX)</ion-label>\n        <ion-input [(ngModel)]="pay.amount" name="amount" type="number" #amount="ngModel" required>\n        </ion-input>\n      </ion-item>\n      <p [hidden]="amount.valid || submitted == false" color="danger" padding-left>\n        Password is required\n      </p>\n    </ion-list>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <!--<button ion-button (click)="onPay(payForm)" type="submit" block>Login</button>-->\n        <div class="pull-right"><a href="{{onPay()}}"> Pay <i class="ios-arrow-dropright-circle-outline"></i> </a></div>\n        <!--<button (click)="callIT(\'1-23#456\')">call function</button>-->\n      </ion-col>\n      <!--<ion-col>-->\n        <!--<button ion-button (click)="onSignup()" color="light" block>Signup</button>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\autopay\src\pages\code-pay\code-pay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CodePayPage);

//# sourceMappingURL=code-pay.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map