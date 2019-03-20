webpackJsonp([1],{

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssFavoritePageModule", function() { return RssFavoritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rss_favorite__ = __webpack_require__(939);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RssFavoritePageModule = (function () {
    function RssFavoritePageModule() {
    }
    return RssFavoritePageModule;
}());
RssFavoritePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rss_favorite__["a" /* RssFavoritePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rss_favorite__["a" /* RssFavoritePage */]),
        ],
    })
], RssFavoritePageModule);

//# sourceMappingURL=rss-favorite.module.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssFavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rss_service_rss_service__ = __webpack_require__(227);
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
 * Generated class for the RssFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RssFavoritePage = (function () {
    function RssFavoritePage(navCtrl, navParams, rssService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rssService = rssService;
        this.data = new Array();
    }
    RssFavoritePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.data = new Array();
        this.rssService.getAllFavorites().then(function (result) {
            _this.data = result;
            console.log(_this.data);
        });
    };
    RssFavoritePage.prototype.doFavorite = function (item) {
        this.rssService.doFavorite(item);
        var index = this.rssService.getIndexOf(item.link, this.data);
        if (index != -1) {
            this.data.splice(index, 1);
        }
    };
    RssFavoritePage.prototype.doClear = function () {
        this.rssService.clearAllFavorite();
        this.data = new Array();
    };
    return RssFavoritePage;
}());
RssFavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rss-favorite',template:/*ion-inline-start:"/Users/yomi/Documents/Github Projects/Moonshine-Stills-App/src/pages/rss/rss-favorite/rss-favorite.html"*/'<!--\n  Generated template for the RssFavoritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rss-favorite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-card class="bdra-5 card card-ios" *ngFor="let item of data">\n    <span *ngIf="item[\'media:content\']!=undefined">\n        <img [src]="item[\'media:content\'][\'$\'][\'url\']">\n    </span>\n\n    <ion-card-content class="card-content card-content-ios">\n      <ion-card-title class="fs-18 card-title card-title-ios">{{item.title}}</ion-card-title>\n      <p>{{item.description}}</p>\n    </ion-card-content>\n\n    <ion-row class="row">\n      <ion-col>\n        <button (click)="doFavorite(item)" ion-button icon-left clear small class="text-black favorite">\n          <ion-icon  [name]="item.isFavorite == true ? \'heart\' : \'heart-outline\'"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col center text-center>\n         <button (click)="rssService.doShare(item)" ion-button icon-left clear small class="text-black">\n             <ion-icon name="share"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col right text-right>\n        <button (click)="rssService.doOpen(item)" ion-button icon-left clear small class="text-black">\n          <ion-icon name="open"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Documents/Github Projects/Moonshine-Stills-App/src/pages/rss/rss-favorite/rss-favorite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rss_service_rss_service__["a" /* RssService */]])
], RssFavoritePage);

//# sourceMappingURL=rss-favorite.js.map

/***/ })

});
//# sourceMappingURL=1.js.map