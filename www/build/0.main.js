webpackJsonp([0],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = (function () {
    function ModalPageModule() {
    }
    return ModalPageModule;
}());
ModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]
        ]
    })
], ModalPageModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Validators, FormBuilder, FormGroup} from "@angular/forms";
// import {GlobalVars} from "../../providers/global-vars";


var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, emailComposer, element, http, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.emailComposer = emailComposer;
        this.element = element;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.data = {};
        this.receipient = this.navParams.get('mail_receipiennt');
        this.credentialsForm = this.formBuilder.group({
            email_to: this.receipient,
            // email_from: ['',Validators.compose([Validators.pattern(
            //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
            no_html: ['']
        });
        this.data.response = '';
        // this.ionViewDidLoad();
    }
    ModalPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    ModalPage.prototype.ngOnInit = function () {
        // setTimeout(() => this.adjust(), 0);
    };
    //
    // adjust(): void {
    //   const textArea = this.myInput['_elementRef'].nativeElement.getElementsByTagName('textarea')[0];
    //   textArea.style.overflow = 'hidden';
    //   textArea.style.height = 'auto';
    //   textArea.style.height = textArea.scrollHeight + 'px';
    // }
    ModalPage.prototype.sendContact = function () {
        console.log('Form submit');
    };
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.send = function () {
        // console.log(this.credentialsForm.value);
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
                console.log("mail available");
            }
        });
        var email = {
            app: 'gmail',
            to: this.credentialsForm.value.email_to,
            subject: 'P2P from Africa Blockchain',
            body: this.credentialsForm.value.no_html,
            isHtml: true
        };
        // this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        //
        // // then use alias when sending email
        //     this.emailComposer.open({
        //       app: 'gmail',
        //       ...
        //     });
        // Send a text message using default options
        this.emailComposer.open(email);
        // let loader = this.loadingCtrl.create({
        //   content: "Sending....."
        // });
        // loader.present();
        //
        // new Promise(resolve => {
        //   this.http.post(this.global.api_url, this.credentialsForm.value)
        //     .map(res => res.json())
        //     .subscribe((result) => {
        //         console.log(result);
        //
        //         if (result.feedback =='success') {
        //           this.global.toast("Email sent.", 'toast-error');
        //           loader.dismiss();
        //           this.closeModal();
        //         } else {
        //             this.global.toast("Error occurred, Email not sent", 'toast-error');
        //             loader.dismiss();
        //         }
        //       },
        //       (err) => {
        //         this.global.toast("Error occurred, Check your internet connection", 'toast-error');
        //         loader.dismiss();
        //       });
        // });
        this.closeModal();
    };
    return ModalPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('myInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], ModalPage.prototype, "myInput", void 0);
ModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"E:\ionic\autopay\src\pages\modal\modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Send Email</ion-title>\n    <ion-buttons end>\n      <!--<button ion-button (click)="send()">Send</button>-->\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="credentialsForm">\n    <ion-list>\n\n      <!--<div>-->\n      <!--<ion-label stacked>Youy mail</ion-label>-->\n      <!--<ion-input style="border-bottom: thin solid gray" type="text"-->\n      <!--[formControl]="credentialsForm.controls[\'email_from\']"></ion-input>-->\n      <!--</div>-->\n\n      <!--<div>-->\n      <!--<ion-label stacked>Message</ion-label>-->\n      <!--<ion-textarea class="textarea" name="description"-->\n      <!--[formControl]="credentialsForm.controls[\'no_html\']"></ion-textarea>-->\n      <!--</div>-->\n\n      <!--<ion-item>-->\n      <!--&lt;!&ndash; Use rows="1" to initialize it as a single line text-area &ndash;&gt;-->\n      <!--<ion-textarea rows="1" name="dummyText" [(ngModel)]="dummyText" autosize></ion-textarea>-->\n      <!--</ion-item>-->\n\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Email message</ion-label>\n          <ion-textarea name="description" row="1" #myInput id="myInput" rows="1" maxLength="500" (keyup)="resize()"\n                        [formControl]="credentialsForm.controls[\'no_html\']"></ion-textarea>\n        </ion-item>\n\n        <button ion-button block (click)="send()">Send email</button>\n      </ion-list>\n\n\n      <!--<div>-->\n      <!--&lt;!&ndash;<ion-buttons stacked (click)="send()">Submit</ion-buttons>&ndash;&gt;-->\n      <!--<button ion-button style="background-color: #007aff" (click)="send()" [disabled]="!credentialsForm.valid">-->\n      <!--Submit-->\n      <!--</button>-->\n      <!--</div>-->\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\autopay\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map