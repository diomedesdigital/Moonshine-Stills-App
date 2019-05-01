webpackJsonp([8],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_article_article__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_law_law__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calculator_calculator__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_youtube_youtube_channel_youtube_channel_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reward_reward__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home1_home__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_collections_collections__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_video_call_video_call__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_groups_groups__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about_component_about_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact_page__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_onesignal__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_facebook_facebook_facebook__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//Shopify









//Onesignal

//import { RssPage } from '../pages/rss/rss';

var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, app, splashScreen, statusBar, modalCtrl, events, keyboard, shopifyClientProvider, oneSignal) {
        var _this = this;
        this.menu = menu;
        this.app = app;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.keyboard = keyboard;
        this.shopifyClientProvider = shopifyClientProvider;
        this.oneSignal = oneSignal;
        // make WalkthroughPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
            _this.oneSignal.startInit('ead78954-5c8f-4f95-945b-37219ca72b36', '1024389242669');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
            });
            _this.oneSignal.endInit();
            _this.events.subscribe('openVideocall', function () {
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__pages_video_call_video_call__["a" /* VideoCallPage */]);
                profileModal.present();
            });
            keyboard.hideKeyboardAccessoryBar(false);
        });
        this.pages = [
            { title: 'Home', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */] },
            //{ title: 'RSS', icon: 'create', component: RssPage },
            { title: 'Groups', icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_17__pages_groups_groups__["a" /* GroupsPage */] },
            { title: 'US State Laws', icon: 'book', component: __WEBPACK_IMPORTED_MODULE_7__pages_law_law__["a" /* LawPage */] },
            { title: 'Blog', icon: 'paper', component: __WEBPACK_IMPORTED_MODULE_6__pages_article_article__["a" /* ArticlePage */] },
            { title: 'Mash Calcuator', icon: 'calculator', component: __WEBPACK_IMPORTED_MODULE_8__pages_calculator_calculator__["a" /* CalculatorPage */] },
            { title: 'TDN Videos', icon: 'videocam', component: __WEBPACK_IMPORTED_MODULE_9__pages_youtube_youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */] },
            { title: 'Contact Us', icon: 'send', component: __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact_page__["a" /* ContactPage */] },
            { title: 'TDN Facebook', icon: 'logo-facebook', component: __WEBPACK_IMPORTED_MODULE_21__pages_facebook_facebook_facebook__["a" /* FacebookPage */] },
        ];
        this.pushPages = [
        //{ title: 'Discussions', icon: 'grid', component: LayoutsPage },
        //{ title: 'Settings', icon: 'settings', component: SettingsPage },
        ];
        this.chatPages = [
            //{ title: 'Layouts', icon: 'grid', component: LayoutsPage },
            { title: 'Catalog', icon: 'chatbubbles', component: __WEBPACK_IMPORTED_MODULE_14__pages_collections_collections__["a" /* CollectionsPage */] },
            { title: 'Categories', icon: 'chatbubbles', component: __WEBPACK_IMPORTED_MODULE_12__pages_home1_home__["a" /* HomePage1 */] },
            { title: 'Cart', icon: 'chatbubbles', component: __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */] },
            { title: 'FAQ', icon: 'book', component: __WEBPACK_IMPORTED_MODULE_18__pages_about_about_component_about_component__["a" /* AboutComponent */] },
            { title: 'Rewards', icon: 'book', component: __WEBPACK_IMPORTED_MODULE_10__pages_reward_reward__["a" /* RewardPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
        this.app.getRootNav().push(page.component);
    };
    MyApp.prototype.chatPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
        this.app.getRootNav().push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-content class="menu-content">\n    <ion-list class="menu-list">\n      <button ion-item detail-none *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n        {{page.title}}\n      </button>\n      <button ion-item detail-none *ngFor="let page of pushPages" (click)="pushPage(page)">\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n        {{page.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu id="chatMenu" side="right" [content]="content" [swipeEnabled]="false">\n  <ion-content class="menu-content">\n      <ion-card>\n          <img src="./assets/images/deals.jpeg" />\n        </ion-card>\n    <ion-list class="menu-list">\n      <button ion-item detail-none *ngFor="let page of chatPages" (click)="chatPage(page)">\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n        {{page.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_11__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = {
    facebook: 'https://www.facebook.com/TheDistilleryNetwork/',
    phoneNumber: '(603) 997-6786',
    email: {
        to: '4tdn.com@gmail.com',
        subject: 'Message for the Distillery Network Inc',
        body: ''
    },
    officeLocation: '42.985423,-71.464475'
};
//# sourceMappingURL=contact-data.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_model__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_service__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedPage = /** @class */ (function () {
    function FeedPage(nav, feedService, navParams, loadingCtrl) {
        this.nav = nav;
        this.feedService = feedService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.feed = new __WEBPACK_IMPORTED_MODULE_4__feed_model__["a" /* FeedModel */]();
        this.feed.category = navParams.get('category');
        this.loading = this.loadingCtrl.create();
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.feedService
            .getPosts()
            .then(function (posts) {
            _this.feed.posts = posts;
            _this.loading.dismiss();
        });
    };
    FeedPage.prototype.goToProfile = function (event, item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            user: item
        });
    };
    FeedPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'feed-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feed/feed.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>{{ feed.category.title }}</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="feed-content">\n  <div class="feed-item" *ngFor="let post of feed.posts">\n    <ion-card>\n      <preload-image [ratio]="{w:3, h:2}" [src]="post.image" title="post.title"></preload-image>\n      <ion-card-content>\n        <ion-card-title class="item-title">\n          {{post.title}}\n        </ion-card-title>\n        <p class="item-text">\n          {{post.description}}\n        </p>\n      </ion-card-content>\n      <ion-row no-padding class="actions-row">\n        <ion-col no-padding width-30 text-left>\n          <button class="action-button" ion-button clear small icon-left>\n            <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n            {{post.likes}} Likes\n          </button>\n        </ion-col>\n        <ion-col no-padding width-45 text-center>\n          <button class="action-button" ion-button clear small icon-left>\n            <ion-icon name=\'chatbubbles\'></ion-icon>\n            {{post.comments}} Comments\n          </button>\n        </ion-col>\n        <ion-col no-padding width-25 text-right>\n          <button class="action-button" ion-button clear small icon-left>\n            <ion-icon name=\'share-alt\'></ion-icon>\n            Share\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feed/feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsModel; });
var NotificationModel = /** @class */ (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

var NotificationsModel = /** @class */ (function () {
    function NotificationsModel() {
        this.today = [];
        this.yesterday = [];
    }
    return NotificationsModel;
}());

//# sourceMappingURL=notifications.model.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FeedPostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModel; });
var FeedPostModel = /** @class */ (function () {
    function FeedPostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return FeedPostModel;
}());

var FeedModel = /** @class */ (function () {
    function FeedModel() {
    }
    return FeedModel;
}());

//# sourceMappingURL=feed.model.js.map

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutsPage = /** @class */ (function () {
    function LayoutsPage(nav) {
        this.nav = nav;
        this.items = [
        /**{ title: 'Schedule', component: SchedulePage },
        { title: 'Lists', note: '(Big)', component: List1Page },
        { title: 'Lists', note: '(Mini)', component: List2Page },
        { title: 'Grid', component: GridPage },
        { title: 'Notifications', component: NotificationsPage },
        { title: 'Profile', component: ProfilePage },**/
        ];
    }
    LayoutsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    LayoutsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'layouts-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/layouts/layouts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Layouts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="layouts-content">\n  <ion-list class="layouts-list">\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-row no-padding>\n        <ion-col no-padding class="item-content">\n          <h3 class="item-title">{{item.title}}</h3>\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n        </ion-col>\n        <ion-col no-padding width-10 class="item-icon">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/layouts/layouts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], LayoutsPage);
    return LayoutsPage;
}());

//# sourceMappingURL=layouts.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_form_layout__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters__ = __webpack_require__(636);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormsPage = /** @class */ (function () {
    function FormsPage(nav) {
        this.nav = nav;
        this.items = [
            { title: 'Forms Examples', component: __WEBPACK_IMPORTED_MODULE_2__form_layout_form_layout__["a" /* FormLayoutPage */] },
            { title: 'Filters', component: __WEBPACK_IMPORTED_MODULE_3__filters_filters__["a" /* FiltersPage */] },
        ];
    }
    FormsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    FormsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'forms-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/forms/forms.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Discussions</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forms-content">\n  <ion-list class="forms-list">\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-row no-padding>\n        <ion-col no-padding class="item-content">\n          <h3 class="item-title">{{item.title}}</h3>\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n        </ion-col>\n        <ion-col no-padding width-10 class="item-icon">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/forms/forms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], FormsPage);
    return FormsPage;
}());

//# sourceMappingURL=forms.js.map

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.forgot_password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        });
    }
    ForgotPasswordPage.prototype.recoverPassword = function () {
        console.log(this.forgot_password.value);
        this.nav.setRoot(this.main_page.component);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'forgot-password-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/forgot-password/forgot-password.html"*/'<ion-header class="forgot-password-header auth-header">\n  <ion-navbar>\n    <ion-title>Forgot Password?</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forgot-password-content auth-content">\n  <h2 class="auth-title">Recover your password</h2>\n  <p class="recover-message">\n    Please enter your email address and we\'ll send you an email to reset your password.\n  </p>\n  <form class="forgot-password-form auth-form" [formGroup]="forgot_password" (ngSubmit)="recoverPassword()">\n    <ion-item>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    <button ion-button block class="auth-action-button recover-password-button" type="submit" [disabled]="!forgot_password.valid">Reset password</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/forgot-password/forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_model__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchedulePage = /** @class */ (function () {
    function SchedulePage(nav, scheduleService, loadingCtrl) {
        this.nav = nav;
        this.scheduleService = scheduleService;
        this.loadingCtrl = loadingCtrl;
        this.schedule = new __WEBPACK_IMPORTED_MODULE_3__schedule_model__["a" /* ScheduleModel */]();
        this.segment = "today";
        this.loading = this.loadingCtrl.create();
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.scheduleService
            .getData()
            .then(function (data) {
            _this.schedule.today = data.today;
            _this.schedule.upcoming = data.upcoming;
            _this.loading.dismiss();
        });
    };
    SchedulePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    SchedulePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'schedule-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="schedule-content">\n  <ion-segment class="schedule-segment" [(ngModel)]="segment" (ionChange)="onSegmentChanged($event)">\n    <ion-segment-button value="today" (ionSelect)="onSegmentSelected($event)">\n      Today\n    </ion-segment-button>\n    <ion-segment-button value="upcoming" (ionSelect)="onSegmentSelected($event)">\n      Upcoming\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="segment">\n    <div *ngSwitchCase="\'today\'">\n      <ion-list class="schedule-list">\n        <ion-item class="schedule-item" *ngFor="let item of schedule.today">\n          <ion-row>\n            <ion-col width-20 class="schedule-date">\n              <h2 class="schedule-day">{{item.date.day}}</h2>\n              <h3 class="schedule-month">{{item.date.month_name}}</h3>\n              <h4 class="schedule-time">{{item.date.time}}</h4>\n            </ion-col>\n            <ion-col width-80 class="schedule-data">\n              <div class="data-item">\n                <div class="item-content">\n                  <h2 class="item-title one-line">{{item.subject}}</h2>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="clock"></ion-icon>\n                    <p class="description-text">{{item.date.full}}</p>\n                  </div>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="navigate"></ion-icon>\n                    <p class="description-text one-line">{{item.location}}</p>\n                  </div>\n                </div>\n                <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'upcoming\'">\n      <ion-list class="schedule-list">\n        <ion-item class="schedule-item" *ngFor="let item of schedule.upcoming">\n          <ion-row>\n            <ion-col width-20 class="schedule-date">\n              <h2 class="schedule-day">{{item.date.day}}</h2>\n              <h3 class="schedule-month">{{item.date.month_name}}</h3>\n              <h4 class="schedule-time">{{item.date.time}}</h4>\n            </ion-col>\n            <ion-col width-80 class="schedule-data">\n              <div class="data-item">\n                <div class="item-content">\n                  <h2 class="item-title one-line">{{item.subject}}</h2>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="clock"></ion-icon>\n                    <p class="description-text">{{item.date.full}}</p>\n                  </div>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="navigate"></ion-icon>\n                    <p class="description-text one-line">{{item.location}}</p>\n                  </div>\n                </div>\n                <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EventModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModel; });
/* unused harmony export EventDate */
var EventModel = /** @class */ (function () {
    function EventModel() {
    }
    return EventModel;
}());

var ScheduleModel = /** @class */ (function () {
    function ScheduleModel() {
        this.today = [];
        this.upcoming = [];
    }
    return ScheduleModel;
}());

var EventDate = /** @class */ (function () {
    function EventDate() {
    }
    return EventDate;
}());

//# sourceMappingURL=schedule.model.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_1_model__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_1_service__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List1Page = /** @class */ (function () {
    function List1Page(nav, list1Service, loadingCtrl) {
        this.nav = nav;
        this.list1Service = list1Service;
        this.loadingCtrl = loadingCtrl;
        this.list1 = new __WEBPACK_IMPORTED_MODULE_3__list_1_model__["a" /* List1Model */]();
        this.loading = this.loadingCtrl.create();
    }
    List1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list1Service
            .getData()
            .then(function (data) {
            _this.list1.items = data.items;
            _this.loading.dismiss();
        });
    };
    List1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list-1-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/list-1/list-1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>List Big</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-big-content">\n  <div class="list-big">\n    <ion-list>\n      <button class="list-item" ion-item *ngFor="let item of list1.items">\n        <ion-row no-padding class="content-row">\n          <ion-col no-padding width-33 class="item-avatar">\n            <preload-image class="avatar-image" [ratio]="{w:1, h:1}" [src]="item.image"></preload-image>\n          </ion-col>\n          <ion-col no-padding width-57 class="item-content">\n            <h3 class="item-title">{{item.name}}</h3>\n            <p class="item-description" rows="3">{{item.description}}</p>\n            <!-- You can change the rows quantity by using rows="X", where X can be any number for example: rows="4" -->\n          </ion-col>\n          <ion-col no-padding width-10 class="item-icon">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/list-1/list-1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__list_1_service__["a" /* List1Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], List1Page);
    return List1Page;
}());

//# sourceMappingURL=list-1.js.map

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Model; });
var ListModel = /** @class */ (function () {
    function ListModel() {
    }
    return ListModel;
}());

var List1Model = /** @class */ (function () {
    function List1Model() {
    }
    return List1Model;
}());

//# sourceMappingURL=list-1.model.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_2_model__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_2_service__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List2Page = /** @class */ (function () {
    function List2Page(nav, list2Service, loadingCtrl) {
        this.nav = nav;
        this.list2Service = list2Service;
        this.loadingCtrl = loadingCtrl;
        this.list2 = new __WEBPACK_IMPORTED_MODULE_3__list_2_model__["a" /* List2Model */]();
        this.loading = this.loadingCtrl.create();
    }
    List2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list2Service
            .getData()
            .then(function (data) {
            _this.list2.items = data.items;
            _this.loading.dismiss();
        });
    };
    List2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list-2-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/list-2/list-2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>List Mini</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list>\n      <button class="list-item" ion-item *ngFor="let item of list2.items">\n        <ion-row no-padding class="content-row one-line">\n          <!-- You can limit the rows of the description by using the class one-line. If you remove it, all the content from the row will be shown -->\n          <ion-col no-padding width-18 class="item-avatar">\n            <preload-image class="avatar-image" [ratio]="{w:1, h:1}" [src]="item.image"></preload-image>\n          </ion-col>\n          <ion-col no-padding width-72 class="item-content">\n            <h3 class="item-title">{{item.name}}</h3>\n            <p class="item-description">{{item.description}}</p>\n          </ion-col>\n          <ion-col no-padding width-10 class="item-icon">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/list-2/list-2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__list_2_service__["a" /* List2Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], List2Page);
    return List2Page;
}());

//# sourceMappingURL=list-2.js.map

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Model; });
var ListModel = /** @class */ (function () {
    function ListModel() {
    }
    return ListModel;
}());

var List2Model = /** @class */ (function () {
    function List2Model() {
    }
    return List2Model;
}());

//# sourceMappingURL=list-2.model.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridPage = /** @class */ (function () {
    function GridPage(nav) {
        this.nav = nav;
    }
    GridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'grid-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/grid/grid.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Grid</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group>\n    <ion-item-divider>Grid Example #1</ion-item-divider>\n    <ion-row class="grid-1 grid-example">\n      <ion-col width-100 class="grid-item">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner multi-line">\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="grid-item" *ngFor="let item of [2, 3, 4, 5, 6]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider>Grid Example #2</ion-item-divider>\n    <ion-row class="grid-2 grid-example">\n      <ion-col width-67 class="grid-item">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner multi-line">\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col width-33 class="grid-item double-item">\n        <ion-col width-100 class="grid-item" *ngFor="let item of [2, 3]">\n          <div class="grid-item-wrapper">\n            <div class="grid-item-inner">\n              <h2 class="item-title">{{ item }}</h2>\n            </div>\n          </div>\n        </ion-col>\n      </ion-col>\n      <ion-col width-33 class="grid-item" *ngFor="let item of [4, 5, 6, 7]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider>Grid Example #3</ion-item-divider>\n    <ion-row class="grid-3 grid-example">\n      <ion-col width-50 class="grid-item" *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider>Grid Example #4</ion-item-divider>\n    <ion-row class="grid-3 grid-example">\n      <ion-col width-33 class="grid-item" *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/grid/grid.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], GridPage);
    return GridPage;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloadImage = /** @class */ (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.alt)) {
            this._img.alt = this.alt;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "alt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImage.prototype, "src", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PreloadImage.prototype, "ratio", null);
    PreloadImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'preload-image',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/components/preload-image/preload-image.html"*/'<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/components/preload-image/preload-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
    ], PreloadImage);
    return PreloadImage;
}());

//# sourceMappingURL=preload-image.js.map

/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundImage = /** @class */ (function () {
    function BackgroundImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        this._update();
        // console.log("CHANGES background-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    BackgroundImage.prototype._update = function () {
        var _this = this;
        var img = new Image();
        img.addEventListener('load', function () {
            _this._elementRef.nativeElement.style.backgroundImage = 'url(' + _this._src + ')';
            _this._loaded(true);
        });
        img.src = this._src;
        this._loaded(false);
    };
    BackgroundImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BackgroundImage.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BackgroundImage.prototype, "src", null);
    BackgroundImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'background-image',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/components/background-image/background-image.html"*/'<span class="bg-overlay"></span>\n<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/components/background-image/background-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
    ], BackgroundImage);
    return BackgroundImage;
}());

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_input__ = __webpack_require__(640);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowHideContainer = /** @class */ (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */])
    ], ShowHideContainer.prototype, "input", void 0);
    ShowHideContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'show-hide-container',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/components/show-hide-password/show-hide-password.html"*/'<ng-content></ng-content>\n<a class="type-toggle" (click)="toggleShow()">\n	<ion-icon class="show-option" [hidden]="show" name="eye"></ion-icon>\n	<ion-icon class="hide-option" [hidden]="!show" name="eye-off"></ion-icon>\n</a>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/components/show-hide-password/show-hide-password.html"*/,
            host: {
                'class': 'show-hide-password'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ShowHideContainer);
    return ShowHideContainer;
}());

//# sourceMappingURL=show-hide-container.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorRadio = /** @class */ (function () {
    function ColorRadio(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ColorRadio.prototype.setColor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', color);
    };
    ColorRadio.prototype.ngOnInit = function () {
        console.log(this.color);
        this.setColor(this.color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color-radio'),
        __metadata("design:type", String)
    ], ColorRadio.prototype, "color", void 0);
    ColorRadio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[color-radio]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
    ], ColorRadio);
    return ColorRadio;
}());

//# sourceMappingURL=color-radio.js.map

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return Rating; }),
    multi: true
};
var Rating = /** @class */ (function () {
    function Rating() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = noop;
    }
    Rating.prototype.ngOnInit = function () {
        var states = [];
        for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    };
    Object.defineProperty(Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Rating.prototype.registerOnTouched = function () { };
    Rating.prototype.rate = function (amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Rating.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('read-only'),
        __metadata("design:type", Object)
    ], Rating.prototype, "readOnly", void 0);
    Rating = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rating',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/components/rating/rating.html"*/'<button class="rating-icon" ion-button icon-only round *ngFor="let r of range; let i = index" (click)="rate(i + 1)">\n	<ion-icon [name]="value === undefined ? (r === 1 ? \'star\' : (r === 2 ? \'star-half\' : \'star-outline\')) : (value > i ? (value < i+1 ? \'star-half\' : \'star\') : \'star-outline\')"></ion-icon>\n</button>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/components/rating/rating.html"*/,
            providers: [RATING_CONTROL_VALUE_ACCESSOR]
        })
    ], Rating);
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__ = __webpack_require__(615);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var YoutubeModule = /** @class */ (function () {
    function YoutubeModule() {
    }
    YoutubeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__["a" /* YoutubeVideosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__["a" /* YoutubeVideosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__["a" /* YoutubeVideosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */]
            ]
        })
    ], YoutubeModule);
    return YoutubeModule;
}());

//# sourceMappingURL=youtube.module.js.map

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? args : 100;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimHtmlPipe = /** @class */ (function () {
    function TrimHtmlPipe() {
    }
    TrimHtmlPipe.prototype.transform = function (value) {
        return this.htmlToPlainText(value);
    };
    TrimHtmlPipe.prototype.htmlToPlainText = function (html) {
        return String(html).replace(/<[^>]+>/gm, '');
    };
    TrimHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'trimHTML'
        })
    ], TrimHtmlPipe);
    return TrimHtmlPipe;
}());

//# sourceMappingURL=trim-html.pipe.js.map

/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_video_youtube_video_component__ = __webpack_require__(644);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeVideosComponent = /** @class */ (function () {
    function YoutubeVideosComponent(navParams, youtubeService, navController, loadingController) {
        this.navParams = navParams;
        this.youtubeService = youtubeService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    YoutubeVideosComponent.prototype.ngOnInit = function () {
        this.loader = this.loadingController.create({
            content: "Please wait"
        });
        this.getPlaylistId();
    };
    YoutubeVideosComponent.prototype.getPlaylistId = function () {
        var _this = this;
        this.loader.present();
        this.youtubeService.getPlaylistId()
            .subscribe(function (result) {
            if (result.items.length && result.items[0].contentDetails.relatedPlaylists.uploads) {
                var playlistId = result.items[0].contentDetails.relatedPlaylists.uploads;
                _this.getVideos(playlistId);
            }
            else {
                _this.loader.dismiss();
            }
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    YoutubeVideosComponent.prototype.getVideos = function (playlistId) {
        var _this = this;
        this.youtubeService.getVideos(playlistId)
            .subscribe(function (result) {
            _this.videos = result.items;
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    YoutubeVideosComponent.prototype.loadVideo = function (video) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */], {
            video: video
        });
    };
    YoutubeVideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-videos/youtube-videos.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-buttons start>\n			<button menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>{{\'YOUTUBE_VIDEOS\' | translate}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list *ngFor="let video of videos" (click)="loadVideo(video)">\n		<ion-item text-wrap>\n			<ion-thumbnail item-left *ngIf="video.snippet.thumbnails.default.url">\n				<img [src]="video.snippet.thumbnails.default.url">\n			</ion-thumbnail>\n			<h2>{{video.snippet.title}}</h2>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-videos/youtube-videos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], YoutubeVideosComponent);
    return YoutubeVideosComponent;
}());

//# sourceMappingURL=youtube-videos.component.js.map

/***/ }),

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home1_home__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collections_collections__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__ = __webpack_require__(645);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage1 = /** @class */ (function () {
    function TabsPage1(superTabsCtrl) {
        this.superTabsCtrl = superTabsCtrl;
        this.collections = __WEBPACK_IMPORTED_MODULE_3__collections_collections__["a" /* CollectionsPage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home1_home__["a" /* HomePage1 */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */];
        //this.superTabsCtrl.slideTo(2);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["a" /* SuperTabs */])
    ], TabsPage1.prototype, "superTabs", void 0);
    TabsPage1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/tabs1/tabs.html"*/'\n<super-tabs tabsHighlight=\'true\' toolbarBackground="orange" selectedTabIndex="1" toolbarColor="light" indicatorColor="light">\n  <super-tab [root]="collections" title="Search" icon="search"></super-tab>\n<!--   <super-tab [root]="tab2Root" title="Wishlist" icon="star"></super-tab> -->\n  <super-tab [root]="tab1Root" title="Home" icon="home"></super-tab>\n  <super-tab [root]="tab4Root" title="Cart" icon="cart"></super-tab>\n<!--   <super-tab [root]="tab3Root" title="Account" icon="settings"></super-tab> -->\n</super-tabs>\n\n\n<!--   <ion-tabs tabsHighlight=\'true\' selectedTabIndex="1" toolbarColor="light" toolbarBackground="dark" indicatorColor="light">\n    <ion-tab tabIcon="search" [root]="collections"></ion-tab>\n    <ion-tab tabIcon="star" [root]="tab2Root"></ion-tab>\n    <ion-tab tabIcon="home" [root]="tab1Root"></ion-tab>\n    <ion-tab tabIcon="cart" [root]="tab4Root"></ion-tab>\n    <ion-tab tabIcon="settings" [root]="tab3Root"></ion-tab>\n  </ion-tabs>` -->'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/tabs1/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["b" /* SuperTabsController */]])
    ], TabsPage1);
    return TabsPage1;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(navCtrl, toastCtrl, events, shopifyClientProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.shopifyClientProvider = shopifyClientProvider;
        this.qty = 1;
        this.items = [];
        events.subscribe('cart:updated', function () {
            console.log("updated cart");
            _this.ngAfterViewInit();
        });
    }
    CartComponent.prototype.add = function (item) {
        this.shopifyClientProvider.updateLineItem(item.id, item.quantity + 1);
    };
    CartComponent.prototype.sub = function (item) {
        if (item.quantity != 1) {
            this.shopifyClientProvider.updateLineItem(item.id, item.quantity - 1);
            this.events.publish('cart:updated');
        }
    };
    CartComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        this.shopifyClientProvider.getCart().then(function (cart) {
            that.items = cart.lineItems;
            console.log(cart.lineItems);
            that.events.publish("cart:amount", { amount: cart.subtotal });
        });
    };
    CartComponent.prototype.removeItem = function (item) {
        var that = this;
        this.shopifyClientProvider.removeItemFromCart(item.id).then(function (resp) {
            that.ngAfterViewInit();
            that.presentToast('Item removed from Cart!');
        });
    };
    CartComponent.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cart',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/components/cart/cart.html"*/'<ion-grid>\n    <ion-card [ngClass]="animateClass" *ngFor=" let item of items ">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-3>\n                    <div class="frame">\n                        <img class="pimage" src="{{item.image.src}}" />\n                    </div>\n                </ion-col>\n                <ion-col col-9>\n                    <ion-item>\n                        <h2>{{item.title}}</h2>\n                        <p>Price: <span>{{item.price}}</span></p>\n                    </ion-item>\n                    <div>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col width-20 class="add">Qty</ion-col>\n                                <ion-col width-20>\n                                    <button ion-button small outline (click)="add(item)" block>\n                                        <ion-icon name="add"></ion-icon>\n                                    </button>\n                                </ion-col>\n                                <ion-col width-20>\n                                    <button ion-button small outline full block color="dark">{{item.quantity}}</button>\n                                </ion-col>\n                                <ion-col width-20>\n                                    <button ion-button small outline (click)="sub(item)" block>\n                                        <ion-icon name="remove"></ion-icon>\n                                    </button>\n                                </ion-col>\n                                <ion-col width-20>\n                                    <button ion-button small color="danger" (click)="removeItem(item)" block>\n                                        <ion-icon style="color:white" name="md-trash"></ion-icon>\n                                    </button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n</ion-grid>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/components/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */]])
    ], CartComponent);
    return CartComponent;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__ = __webpack_require__(1044);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__ = __webpack_require__(653);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FeedsModule = /** @class */ (function () {
    function FeedsModule() {
    }
    FeedsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__["a" /* FeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__["a" /* FeedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__["a" /* FeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__["a" /* FeedComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__["a" /* FeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__["a" /* FeedComponent */]
            ]
        })
    ], FeedsModule);
    return FeedsModule;
}());

//# sourceMappingURL=feeds.module.js.map

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_category_feed_category_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedCategoriesComponent = /** @class */ (function () {
    function FeedCategoriesComponent(feedService, navController, loadingController) {
        this.feedService = feedService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    FeedCategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    FeedCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.feedService.getCategories()
            .subscribe(function (result) {
            _this.categories = result.categories;
            loader.dismiss();
        });
    };
    FeedCategoriesComponent.prototype.loadCategory = function (category) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__feed_category_feed_category_component__["a" /* FeedCategoryComponent */], {
            category: category
        });
    };
    FeedCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feed-categories/feed-categories.html"*/'<ion-header>\n	<ion-navbar>\n		<button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{\'CATEGORIES\'}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-item *ngFor="let category of categories" (click)="loadCategory(category)">\n			<ion-icon [name]="category.icon" item-left></ion-icon>\n			<h2>{{category.title}}</h2>\n			<p>{{category.description}}</p>\n			<button ion-button item-right outline>More</button>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feed-categories/feed-categories.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], FeedCategoriesComponent);
    return FeedCategoriesComponent;
}());

//# sourceMappingURL=feed-categories.component.js.map

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component_about_component__ = __webpack_require__(620);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about_component_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__about_component_about_component__["a" /* AboutComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__about_component_about_component__["a" /* AboutComponent */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_email_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_call_service__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_page__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_maps_service__ = __webpack_require__(623);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__contact_page__["a" /* ContactPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__contact_page__["a" /* ContactPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_3__services_call_service__["a" /* CallService */],
                __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__["a" /* InAppBrowserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_maps_service__["a" /* MapsService */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchPeoplePage = /** @class */ (function () {
    // SearchPeoplePage
    // This is the page where the user can search for other users and send a friend request.
    function SearchPeoplePage(navCtrl, navParams, dataProvider, loadingProvider, alertCtrl, angularDb, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.angularDb = angularDb;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    SearchPeoplePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.loadingProvider.show();
        this.searchUser = '';
        // Get all users.
        this.dataProvider.getUsers().subscribe(function (accounts) {
            _this.loadingProvider.hide();
            _this.accounts = accounts;
            _this.dataProvider.getCurrentUser().subscribe(function (account) {
                // Add own userId as exludedIds.
                _this.excludedIds = [];
                _this.account = account;
                if (_this.excludedIds.indexOf(account.$key) == -1) {
                    _this.excludedIds.push(account.$key);
                }
                // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
                if (account.friends) {
                    account.friends.forEach(function (friend) {
                        if (_this.excludedIds.indexOf(friend) == -1) {
                            _this.excludedIds.push(friend);
                        }
                    });
                }
                // Get requests of the currentUser.
                _this.dataProvider.getRequests(account.$key).subscribe(function (requests) {
                    _this.requestsSent = requests.requestsSent;
                    _this.friendRequests = requests.friendRequests;
                });
            });
        });
    };
    // Back
    SearchPeoplePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Get the status of the user in relation to the logged in user.
    SearchPeoplePage.prototype.getStatus = function (user) {
        // Returns:
        // 0 when user can be requested as friend.
        // 1 when a friend request was already sent to this user.
        // 2 when this user has a pending friend request.
        if (this.requestsSent) {
            for (var i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i] == user.$key) {
                    return 1;
                }
            }
        }
        if (this.friendRequests) {
            for (var i = 0; i < this.friendRequests.length; i++) {
                if (this.friendRequests[i] == user.$key) {
                    return 2;
                }
            }
        }
        return 0;
    };
    // Send friend request.
    SearchPeoplePage.prototype.sendFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(user.$key);
                    }
                }
            ]
        }).present();
    };
    // Cancel friend request sent.
    SearchPeoplePage.prototype.cancelFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
                }
            ]
        }).present();
    };
    // Accept friend request.
    SearchPeoplePage.prototype.acceptFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject Request',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(user.$key);
                    }
                }
            ]
        }).present();
    };
    // View user.
    SearchPeoplePage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    SearchPeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-people',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/search-people/search-people.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Search People</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No other users to send friend request right now. -->\n  <div class="empty-list" *ngIf="accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))">\n    <h1><ion-icon name="md-search"></ion-icon></h1>\n    <p>Uh-oh! Sorry but we can\'t find other users right now. Try again later.</p>\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n  <ion-list class="avatar-list" *ngIf="accounts && accounts.length > 0">\n    <ion-searchbar *ngIf="accounts.length != excludedIds.length" [(ngModel)]="searchUser" placeholder="Search for name or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let account of accounts | searchFilter: [excludedIds, searchUser]" no-lines tappable (click)="viewUser(account.$key)">\n      <ion-buttons>\n        <!-- Show appropriate buttons depending on the status of this user in relation to the current user. -->\n        <!-- // Returns:\n        // 0 when user can be requested as friend.\n        // 1 when a friend request was already sent to this user.\n        // 2 when this user has a pending friend request. -->\n        <button ion-button icon-right (click)="sendFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 0">\n          <ion-icon name="md-add-circle" class="success"></ion-icon>\n        </button>\n        <button ion-button icon-right (click)="cancelFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 1">\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n        </button>\n        <button ion-button icon-right (click)="acceptFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 2">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-avatar item-left>\n        <ion-icon name="radio-button-on" class="online" [ngClass]="account.isOnline?\'isOnline\' : \'isOffline\'"></ion-icon>\n        <img src="{{account.img}}">\n      </ion-avatar>\n      <h2>{{account.name}}</h2>\n      <p>@{{account.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/search-people/search-people.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase__["a" /* FirebaseProvider */]])
    ], SearchPeoplePage);
    return SearchPeoplePage;
}());

//# sourceMappingURL=search-people.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingController) {
        this.loadingController = loadingController;
        // Loading Provider
        // This is the provider class for most of the loading spinners screens on the app.
        // Set your spinner/loading indicator type here
        // List of Spinners: https://ionicframework.com/docs/v2/api/components/spinner/Spinner/
        this.spinner = {
            spinner: 'circles'
        };
        console.log("Initializing Loading Provider");
    }
    //Show loading
    LoadingProvider.prototype.show = function () {
        if (!this.loading) {
            this.loading = this.loadingController.create(this.spinner);
            this.loading.present();
        }
    };
    //Hide loading
    LoadingProvider.prototype.hide = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_truncate_pipe__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_trim_html_pipe__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_config__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function createTranslateLoader(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/translations/', '.json');
}
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_trim_html_pipe__["a" /* TrimHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_trim_html_pipe__["a" /* TrimHtmlPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* Config */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = /** @class */ (function () {
    function DataProvider(angularDb) {
        this.angularDb = angularDb;
        console.log("Initializing Data Provider");
    }
    // set webRTCClient
    DataProvider.prototype.setWebRTCClient = function (val) {
        this.webRTCClient = val;
        console.log("this.webRTCClient", this.webRTCClient);
    };
    // get webRTCClient
    DataProvider.prototype.getwebRTCClient = function () {
        return this.webRTCClient;
    };
    // set Incoming Call id
    DataProvider.prototype.setIncomingCallId = function (id) {
        this.incomingCallId = id;
    };
    // get incoming call id
    DataProvider.prototype.getIncomingCallid = function () {
        return this.incomingCallId;
    };
    // Get all users
    DataProvider.prototype.getUsers = function () {
        return this.angularDb.list('/accounts', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    // Get user with username
    DataProvider.prototype.getUserWithUsername = function (username) {
        return this.angularDb.list('/accounts', {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        });
    };
    // Get logged in user data
    DataProvider.prototype.getCurrentUser = function () {
        return this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid);
    };
    // Get user by their userId
    DataProvider.prototype.getUser = function (userId) {
        return this.angularDb.object('/accounts/' + userId);
    };
    // Get all user
    DataProvider.prototype.getAllUser = function () {
        return this.angularDb.list('/accounts');
    };
    // Get requests given the userId.
    DataProvider.prototype.getRequests = function (userId) {
        return this.angularDb.object('/requests/' + userId);
    };
    // Get friend requests given the userId.
    DataProvider.prototype.getFriendRequests = function (userId) {
        return this.angularDb.list('/requests', {
            query: {
                orderByChild: 'receiver',
                equalTo: userId
            }
        });
    };
    // Get conversation given the conversationId.
    DataProvider.prototype.getConversation = function (conversationId) {
        return this.angularDb.object('/conversations/' + conversationId);
    };
    // Get conversations of the current logged in user.
    DataProvider.prototype.getConversations = function () {
        return this.angularDb.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/conversations');
    };
    // Get messages of the conversation given the Id.
    DataProvider.prototype.getConversationMessages = function (conversationId) {
        return this.angularDb.object('/conversations/' + conversationId + '/messages');
    };
    // Get messages of the group given the Id.
    DataProvider.prototype.getGroupMessages = function (groupId) {
        return this.angularDb.object('/groups/' + groupId + '/messages');
    };
    // Get groups of the logged in user.
    DataProvider.prototype.getGroups = function () {
        return this.angularDb.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/groups');
    };
    // Get group info given the groupId.
    DataProvider.prototype.getGroup = function (groupId) {
        return this.angularDb.object('/groups/' + groupId);
    };
    // Get Timeline of user
    DataProvider.prototype.getTimelines = function () {
        return this.angularDb.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/timeline');
    };
    // Get Timeline post
    DataProvider.prototype.getTimelinePost = function () {
        return this.angularDb.list('/timeline');
    };
    // Get time line by id
    DataProvider.prototype.getTimeline = function (timelineId) {
        return this.angularDb.object('/timeline/' + timelineId);
    };
    // Get Friend List
    DataProvider.prototype.getFriends = function () {
        return this.angularDb.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/friends');
    };
    // Get comments list
    DataProvider.prototype.getComments = function (postId) {
        return this.angularDb.list('/comments/' + postId);
    };
    // Get likes
    DataProvider.prototype.getLike = function (postId) {
        return this.angularDb.list('/likes/' + postId);
    };
    DataProvider.prototype.postLike = function (postId) {
        return this.angularDb.object('/likes/' + postId);
    };
    // Get likes
    DataProvider.prototype.getdisLike = function (postId) {
        return this.angularDb.list('/dislikes/' + postId);
    };
    DataProvider.prototype.postdisLike = function (postId) {
        return this.angularDb.object('/dislikes/' + postId);
    };
    // post Comments
    DataProvider.prototype.postComments = function (postId) {
        return this.angularDb.object('/comments/' + postId);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_groups__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timeline_timeline__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listing_listing__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = /** @class */ (function () {
    // TabsPage
    // This is the page where we set our tabs.
    function TabsPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.listing = __WEBPACK_IMPORTED_MODULE_8__listing_listing__["a" /* ListingPage */];
        this.messages = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        this.groups = __WEBPACK_IMPORTED_MODULE_4__groups_groups__["a" /* GroupsPage */];
        this.friends = __WEBPACK_IMPORTED_MODULE_5__friends_friends__["a" /* FriendsPage */];
        this.profile = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.timeline = __WEBPACK_IMPORTED_MODULE_7__timeline_timeline__["a" /* TimelinePage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Get friend requests count.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            if (requests.friendRequests) {
                _this.friendRequestCount = requests.friendRequests.length;
            }
            else {
                _this.friendRequestCount = null;
            }
        });
        // Get conversations and add/update if the conversation exists, otherwise delete from list.
        this.dataProvider.getConversations().subscribe(function (conversationsInfo) {
            _this.unreadMessagesCount = null;
            _this.conversationsInfo = null;
            _this.conversationList = null;
            if (conversationsInfo.length > 0) {
                _this.conversationsInfo = conversationsInfo;
                conversationsInfo.forEach(function (conversationInfo) {
                    _this.dataProvider.getConversation(conversationInfo.conversationId).subscribe(function (conversation) {
                        if (conversation.$exists()) {
                            _this.addOrUpdateConversation(conversation);
                        }
                    });
                });
            }
        });
        this.dataProvider.getGroups().subscribe(function (groupIds) {
            if (groupIds.length > 0) {
                _this.groupsInfo = groupIds;
                if (_this.groupList && _this.groupList.length > groupIds.length) {
                    // User left/deleted a group, clear the list and add or update each group again.
                    _this.groupList = null;
                }
                groupIds.forEach(function (groupId) {
                    _this.dataProvider.getGroup(groupId.$key).subscribe(function (group) {
                        if (group.$exists()) {
                            _this.addOrUpdateGroup(group);
                        }
                    });
                });
            }
            else {
                _this.unreadGroupMessagesCount = null;
                _this.groupsInfo = null;
                _this.groupList = null;
            }
        });
    };
    // Add or update conversaion for real-time sync of unreadMessagesCount.
    TabsPage.prototype.addOrUpdateConversation = function (conversation) {
        if (!this.conversationList) {
            this.conversationList = [conversation];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversationList.length; i++) {
                if (this.conversationList[i].$key == conversation.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversationList[index] = conversation;
            }
            else {
                this.conversationList.push(conversation);
            }
        }
        this.computeUnreadMessagesCount();
    };
    // Compute all conversation's unreadMessages.
    TabsPage.prototype.computeUnreadMessagesCount = function () {
        this.unreadMessagesCount = 0;
        if (this.conversationList) {
            for (var i = 0; i < this.conversationList.length; i++) {
                this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;
                if (this.unreadMessagesCount == 0) {
                    this.unreadMessagesCount = null;
                }
            }
        }
    };
    TabsPage.prototype.getUnreadMessagesCount = function () {
        if (this.unreadMessagesCount) {
            if (this.unreadMessagesCount > 0) {
                return this.unreadMessagesCount;
            }
        }
        return null;
    };
    // Add or update group
    TabsPage.prototype.addOrUpdateGroup = function (group) {
        if (!this.groupList) {
            this.groupList = [group];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groupList.length; i++) {
                if (this.groupList[i].$key == group.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupList[index] = group;
            }
            else {
                this.groupList.push(group);
            }
        }
        this.computeUnreadGroupMessagesCount();
    };
    // Remove group from list if group is already deleted.
    TabsPage.prototype.removeGroup = function (groupId) {
        if (this.groupList) {
            var index = -1;
            for (var i = 0; i < this.groupList.length; i++) {
                if (this.groupList[i].$key == groupId) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupList.splice(index, 1);
            }
            index = -1;
            for (var i = 0; i < this.groupsInfo.length; i++) {
                if (this.groupsInfo[i].$key == groupId) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupsInfo.splice(index, 1);
            }
            this.computeUnreadGroupMessagesCount();
        }
    };
    // Compute all group's unreadMessages.
    TabsPage.prototype.computeUnreadGroupMessagesCount = function () {
        this.unreadGroupMessagesCount = 0;
        if (this.groupList) {
            for (var i = 0; i < this.groupList.length; i++) {
                if (this.groupList[i].messages) {
                    this.unreadGroupMessagesCount += this.groupList[i].messages.length - this.groupsInfo[i].messagesRead;
                }
                if (this.unreadGroupMessagesCount == 0) {
                    this.unreadGroupMessagesCount = null;
                }
            }
        }
    };
    TabsPage.prototype.getUnreadGroupMessagesCount = function () {
        if (this.unreadGroupMessagesCount) {
            if (this.unreadGroupMessagesCount > 0) {
                return this.unreadGroupMessagesCount;
            }
        }
        return null;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0">\n  <ion-tab [root]="listing" tabIcon="md-home" tabBadgeStyle="danger" ></ion-tab>  \n  <ion-tab [root]="timeline" tabIcon="md-globe" tabBadgeStyle="danger" ></ion-tab>\n  <ion-tab [root]="profile" tabIcon="md-contact"></ion-tab>\n  <ion-tab [root]="messages" tabIcon="md-text" tabBadgeStyle="danger" tabBadge="{{getUnreadMessagesCount()}}"></ion-tab>\n  <!--<ion-tab [root]="groups" tabIcon="md-chatbubbles" tabBadgeStyle="danger" tabBadge="{{getUnreadGroupMessagesCount()}}"></ion-tab>-->\n  <ion-tab [root]="friends" tabIcon="md-contacts" tabBadgeStyle="danger" tabBadge="{{friendRequestCount}}"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the VideoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var VideoProvider = /** @class */ (function () {
    function VideoProvider(platform, alertCtrl, modalCtrl, events, dataProvider, alertProvider, nativeAudio) {
        var _this = this;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.dataProvider = dataProvider;
        this.alertProvider = alertProvider;
        this.nativeAudio = nativeAudio;
        console.log('Hello VideoProvider Provider');
        this.platform.ready().then(function () {
            _this.nativeAudio.preloadComplex('uniqueI1', 'assets/tone.mp3', 1, 1, 0).then(function (succ) {
                console.log("suu", succ);
            }, function (err) {
                console.log("err", err);
            });
        });
    }
    VideoProvider.prototype.InitializingRTC = function (userData) {
        var _this = this;
        if (this.platform.is('android')) {
            var permissions = cordova.plugins.permissions;
            console.log('====permissions==', permissions);
            permissions.hasPermission(permissions.CAMERA, this.checkVideoPermissionCallback, null);
            permissions.hasPermission(permissions.RECORD_AUDIO, this.checkAudioPermissionCallback, null);
            // permissions.hasPermission(permissions.BLUETOOTH_ADMIN, this.checkBluetoothPermissionCallback, null);
        }
        console.log("=====initial", userData);
        //apiRTC initialization
        apiRTC.init({
            apiKey: "4baec26d60ab6b933000212cc329c775",
            apiCCId: userData.uniqueId,
            nickname: userData.name,
            userData: userData,
            onReady: function (e) {
                _this.AddEventListeners();
                _this.sessionReadyHandler(e);
            }
        });
    };
    VideoProvider.prototype.checkVideoPermissionCallback = function (status) {
        var permissions = cordova.plugins.permissions;
        if (!status.hasPermission) {
            var errorCallback = function () {
                alert('Camera permission is not turned on');
            };
            permissions.requestPermission(permissions.CAMERA, function (status) {
                if (!status.hasPermission) {
                    errorCallback();
                }
            }, errorCallback);
        }
    };
    VideoProvider.prototype.checkAudioPermissionCallback = function (status) {
        var permissions = cordova.plugins.permissions;
        if (!status.hasPermission) {
            var errorCallback = function () {
                alert('Audio permission is not turned on');
            };
            permissions.requestPermission(permissions.RECORD_AUDIO, function (status) {
                if (!status.hasPermission) {
                    errorCallback();
                }
            }, errorCallback);
        }
    };
    VideoProvider.prototype.checkBluetoothPermissionCallback = function (status) {
        var permissions = cordova.plugins.permissions;
        if (!status.hasPermission) {
            var errorCallback = function () {
                alert('BLUETOOTH permission is not turned on');
            };
            permissions.requestPermission(permissions.BLUETOOTH_ADMIN, function (status) {
                if (!status.hasPermission) {
                    errorCallback();
                }
            }, errorCallback);
        }
    };
    VideoProvider.prototype.sessionReadyHandler = function (e) {
        this.webRTCClient = apiRTC.session.createWebRTCClient({
            status: "status" //Optionnal
        });
        console.log("====sessionReadyHandler==", this.webRTCClient);
        this.dataProvider.setWebRTCClient(this.webRTCClient);
    };
    VideoProvider.prototype.AddEventListeners = function () {
        var _this = this;
        apiRTC.addEventListener("userMediaSuccess", function (e) {
            console.log("userMediaSuccess");
            _this.events.publish('userMediaSuccess', e);
        });
        apiRTC.addEventListener("userMediaError", function (e) {
            console.log("userMediaError");
            _this.alert.dismiss();
        });
        apiRTC.addEventListener("incomingCall", function (e) {
            _this.events.publish('openVideocall');
            _this.nativeAudio.loop('uniqueI1').then(function (succ) {
                console.log("succ", succ);
            }, function (err) {
                console.log("err", err);
            });
            console.log("incomingCall", e.detail);
            _this.alert = _this.alertCtrl.create({
                title: 'INCOMING CALL ',
                // subTitle: '<img src="assets/calling.gif"><br><p>Call from 96325 ...</p>',
                subTitle: '<img src="assets/call-me.gif"><br><p>Call from ' + e.detail.callerNickname + ' ...</p>',
                cssClass: 'outgoingcall incomingcall',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Reject',
                        role: 'cancel',
                        cssClass: 'reject',
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.nativeAudio.stop('uniqueI1');
                            _this.RejectCall(e.detail.callId);
                        }
                    },
                    {
                        text: 'Answer',
                        cssClass: 'answer',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.nativeAudio.stop('uniqueI1');
                            _this.AnswerCall(e.detail.callId);
                        }
                    }
                ]
            });
            _this.alert.present();
        });
        apiRTC.addEventListener("hangup", function (e) {
            console.log("hangup");
            _this.events.publish('hangup', e);
            _this.alertProvider.showToast(e.detail.reason);
            _this.nativeAudio.stop('uniqueI1');
            _this.alert.dismiss();
        });
        apiRTC.addEventListener("remoteStreamAdded", function (e) {
            console.log("remoteStreamAdded");
            _this.events.publish('remoteStreamAdded', e);
            _this.alert.dismiss();
        });
        apiRTC.addEventListener("webRTCClientCreated", function (e) {
            console.log("webRTCClientCreated");
            _this.webRTCClient.setAllowMultipleCalls(true);
            _this.webRTCClient.setVideoBandwidth(300);
            _this.webRTCClient.setUserAcceptOnIncomingCall(true);
        });
    };
    VideoProvider.prototype.MakeCall = function (calleeId) {
        var _this = this;
        this.events.publish('openVideocall');
        var callId = this.webRTCClient.call(calleeId);
        if (callId != null) {
            //this.incomingCallId = callId;
            this.dataProvider.setIncomingCallId(callId);
            this.alert = this.alertCtrl.create({
                title: "OUTGOING CALL",
                subTitle: '<img src="assets/call-me.gif"><br><p>Call to ' + callId + '</p>',
                buttons: [{
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function () {
                            _this.RejectCall(callId);
                            console.log('Cancel clicked');
                        }
                    }],
                cssClass: 'outgoingcall ',
                enableBackdropDismiss: false
            });
            this.alert.present();
        }
    };
    VideoProvider.prototype.AnswerCall = function (incomingCallId) {
        this.dataProvider.setIncomingCallId(incomingCallId);
        this.webRTCClient.acceptCall(incomingCallId);
    };
    VideoProvider.prototype._webRTCClinetref = function () {
        return this.webRTCClient;
    };
    VideoProvider.prototype.RejectCall = function (incomingCallId) {
        console.log("RejectCall");
        this.alert.dismiss();
        this.webRTCClient.refuseCall(incomingCallId);
        this.events.publish('rejectCall', incomingCallId);
        // this.RemoveMediaElements(incomingCallId);
    };
    VideoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], VideoProvider);
    return VideoProvider;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_group_new_group__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_group__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupsPage = /** @class */ (function () {
    // GroupsPage
    // This is the page where the user can add, view and search for groups.
    function GroupsPage(navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    GroupsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.searchGroup = '';
        this.loadingProvider.show();
        // Get groups
        this.dataProvider.getGroups().subscribe(function (groupIds) {
            if (groupIds.length > 0) {
                if (_this.groups && _this.groups.length > groupIds.length) {
                    // User left/deleted a group, clear the list and add or update each group again.
                    _this.groups = [];
                }
                groupIds.forEach(function (groupId) {
                    _this.dataProvider.getGroup(groupId.$key).subscribe(function (group) {
                        if (group.$exists()) {
                            // Get group's unreadMessagesCount
                            group.unreadMessagesCount = group.messages.length - groupId.messagesRead;
                            // Get group's last active date
                            group.date = group.messages[group.messages.length - 1].date;
                            _this.addOrUpdateGroup(group);
                        }
                    });
                });
                _this.loadingProvider.hide();
            }
            else {
                _this.groups = [];
                _this.loadingProvider.hide();
            }
        });
        // Update groups' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.groups) {
                    that.groups.forEach(function (group) {
                        var date = group.date;
                        group.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Add or update group for real-time sync based on our observer.
    GroupsPage.prototype.addOrUpdateGroup = function (group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].$key == group.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
    };
    // Remove group, because group has already been deleted.
    // removeGroup(group) {
    //   if (this.groups) {
    //     var index = -1;
    //     for (var i = 0; i < this.groups.length; i++) {
    //       if (this.groups[i].$key == group.$key) {
    //         index = i;
    //       }
    //     }
    //     if (index > -1) {
    //       this.groups.splice(index, 1);
    //     }
    //   }
    // }
    // New Group.
    GroupsPage.prototype.newGroup = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__new_group_new_group__["a" /* NewGroupPage */]);
    };
    // Open Group Chat.
    GroupsPage.prototype.viewGroup = function (groupId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__group_group__["a" /* GroupPage */], { groupId: groupId });
    };
    // Return class based if group has unreadMessages or not.
    GroupsPage.prototype.hasUnreadMessages = function (group) {
        if (group.unreadMessagesCount > 0) {
            return 'group bold';
        }
        else
            return 'group';
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/groups/groups.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Groups</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="newGroup()"><ion-icon name="md-add"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No groups to show -->\n  <div class="empty-list" *ngIf="groups && groups.length <= 0">\n    <h1><ion-icon name="md-chatbubbles"></ion-icon></h1>\n    <p>Uh-oh! You are not part of any groups yet.</p>\n    <button ion-button icon-left tappable (click)="newGroup()"><ion-icon name="md-add"></ion-icon>Create Group</button>\n  </div>\n  <!-- Show groups -->\n  <div *ngIf="groups && groups.length > 0">\n    <ion-searchbar [(ngModel)]="searchGroup" placeholder="Search for group" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <div *ngFor="let group of groups | groupFilter: searchGroup">\n      <ion-col col-6 (click)="viewGroup(group.$key)" tappable>\n        <div [ngClass]=hasUnreadMessages(group)>\n          <img src="{{group.img}}" />\n          <ion-badge color="danger" *ngIf="group.unreadMessagesCount > 0">{{group.unreadMessagesCount}}</ion-badge>\n          <p>{{group.name}}</p>\n          <span>{{group.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/groups/groups.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group_info_group_info__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var GroupPage = /** @class */ (function () {
    // GroupPage
    // This is the page where the user can chat with other group members and view group info.
    function GroupPage(navCtrl, navParams, dataProvider, modalCtrl, angularfire, angularDb, alertCtrl, imageProvider, loadingProvider, camera, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.modalCtrl = modalCtrl;
        this.angularfire = angularfire;
        this.angularDb = angularDb;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.keyboard = keyboard;
        this.startIndex = -1;
        this.scrollDirection = 'bottom';
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    GroupPage_1 = GroupPage;
    GroupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Get group details
        this.groupId = this.navParams.get('groupId');
        this.subscription = this.dataProvider.getGroup(this.groupId).subscribe(function (group) {
            if (group.$exists()) {
                _this.title = group.name;
                // Get group messages
                _this.dataProvider.getGroupMessages(group.$key).subscribe(function (messages) {
                    if (_this.messages) {
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > _this.messages.length) {
                            var message_1 = messages[messages.length - 1];
                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                message_1.avatar = user.img;
                            });
                            _this.messages.push(message_1);
                            // Also append to messagesToShow.
                            _this.messagesToShow.push(message_1);
                            // Reset scrollDirection to bottom.
                            _this.scrollDirection = 'bottom';
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        _this.messages = [];
                        messages.forEach(function (message) {
                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                message.avatar = user.img;
                            });
                            _this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (_this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((_this.messages.length - _this.numberOfMessages) > 0) {
                                _this.startIndex = _this.messages.length - _this.numberOfMessages;
                            }
                            else {
                                _this.startIndex = 0;
                            }
                        }
                        if (!_this.messagesToShow) {
                            _this.messagesToShow = [];
                        }
                        // Set messagesToShow
                        for (var i = _this.startIndex; i < _this.messages.length; i++) {
                            _this.messagesToShow.push(_this.messages[i]);
                        }
                        _this.loadingProvider.hide();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        var date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Load previous messages in relation to numberOfMessages.
    GroupPage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.show();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if (that.startIndex - that.numberOfMessages > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            that.scrollDirection = 'top';
            // Populate list again.
            that.ionViewDidLoad();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    GroupPage.prototype.ionViewWillLeave = function () {
        if (this.messages)
            this.setMessagesRead(this.messages);
    };
    // Check if currentPage is active, then update user's messagesRead.
    GroupPage.prototype.setMessagesRead = function (messages) {
        if (this.navCtrl.getActive().instance instanceof GroupPage_1) {
            // Update user's messagesRead on database.
            this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/groups/' + this.groupId).update({
                messagesRead: this.messages.length
            });
        }
    };
    // Check if 'return' button is pressed and send the message.
    GroupPage.prototype.onType = function (keyCode) {
        if (keyCode == 13) {
            this.keyboard.close();
            this.send();
        }
    };
    // Back
    GroupPage.prototype.back = function () {
        this.subscription.unsubscribe();
        this.navCtrl.pop();
    };
    // Scroll to bottom of page after a short delay.
    GroupPage.prototype.scrollBottom = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    };
    // Scroll to top of the page after a short delay.
    GroupPage.prototype.scrollTop = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    };
    // Scroll depending on the direction.
    GroupPage.prototype.doScroll = function () {
        if (this.scrollDirection == 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection == 'top') {
            this.scrollTop();
        }
    };
    // Check if the user is the sender of the message.
    GroupPage.prototype.isSender = function (message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    // Check if the message is a system message.
    GroupPage.prototype.isSystemMessage = function (message) {
        if (message.type == 'system') {
            return true;
        }
        else {
            return false;
        }
    };
    // View user info
    GroupPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Send text message to the group.
    GroupPage.prototype.send = function () {
        // Clone an instance of messages object so it will not directly be updated.
        // The messages object should be updated by our observer declared on ionViewDidLoad.
        var messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
            type: 'text',
            message: this.message
        });
        // Update group messages.
        this.dataProvider.getGroup(this.groupId).update({
            messages: messages
        });
        // Clear messagebox.
        this.message = '';
    };
    // Enlarge image messages.
    GroupPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    // Send photoMessage.
    GroupPage.prototype.sendPhoto = function () {
        var _this = this;
        // Ask user if they want to take photo or choose from gallery.
        this.alert = this.alertCtrl.create({
            title: 'Send Photo Message',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Upload the image and return promise.
                        _this.imageProvider.uploadGroupPhotoMessage(_this.groupId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                            // Process photoMessage on database.
                            _this.sendPhotoMessage(url);
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Upload the image and return promise.
                        _this.imageProvider.uploadGroupPhotoMessage(_this.groupId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                            // Process photoMessage on database.
                            _this.sendPhotoMessage(url);
                        });
                    }
                }
            ]
        }).present();
    };
    // Process photoMessage on database.
    GroupPage.prototype.sendPhotoMessage = function (url) {
        var messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
            type: 'image',
            url: url
        });
        this.dataProvider.getGroup(this.groupId).update({
            messages: messages
        });
        this.message = '';
    };
    // View group info.
    GroupPage.prototype.groupInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__group_info_group_info__["a" /* GroupInfoPage */], { groupId: this.groupId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], GroupPage.prototype, "content", void 0);
    GroupPage = GroupPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-group',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/group/group.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title tappable (click)="groupInfo()">{{title}}</ion-title>\n    <!-- View Group Info -->\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="groupInfo()"><ion-icon name="ios-more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content has-footer>\n  <!-- Messages -->\n  <div class="messages">\n    <p class="center" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n    <ion-row *ngFor="let message of messagesToShow">\n      <!--  System Message -->\n      <ion-col col-12 class="system" *ngIf="isSystemMessage(message)">\n        <p>\n          <ion-icon name="{{message.icon}}"></ion-icon>\n          {{message.message}}\n        </p>\n        <span>{{message.date | DateFormat}}</span>\n      </ion-col>\n      <!--  Message -->\n      <ion-col col-2 class="center" *ngIf="isSender(message) && !isSystemMessage(message)">\n        <img src="{{message.avatar}}" (load)="doScroll()"/>\n      </ion-col>\n      <ion-col col-1 *ngIf="!isSender(message) && !isSystemMessage(message)">\n      </ion-col>\n      <ion-col col-9 class="sender" *ngIf="isSender(message) && !isSystemMessage(message)">\n        <div class="left" *ngIf="message.type == \'text\'">\n          <p>{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()"/>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col col-9 *ngIf="!isSender(message) && !isSystemMessage(message)">\n        <div class="right" *ngIf="message.type == \'text\'">\n          <p>{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <p>{{title}}</p>\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()"/>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col col-1 *ngIf="isSender(message) && !isSystemMessage(message)">\n      </ion-col>\n      <ion-col col-2 class="center" *ngIf="!isSender(message) && !isSystemMessage(message)">\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()"/>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<!-- Message Box -->\n<ion-footer>\n  <div class="bottom_bar">\n    <!--<ion-col>\n    <ion-fab middle left>\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n    </ion-fab>\n    </ion-col>-->\n    <ion-input type="text" placeholder="  Type your message" [(ngModel)]="message" (ionfocus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-input>\n    <!--<ion-fab middle right>-->\n      <ion-buttons>\n      <button ion-button icon-right (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n      <button ion-button icon-left (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n      </ion-buttons>\n    <!--</ion-fab>-->\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/group/group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */], __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */]])
    ], GroupPage);
    return GroupPage;
    var GroupPage_1;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rss_rss__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listing_model__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listing_service__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FeedPage } from '../feed/feed';



var ListingPage = /** @class */ (function () {
    function ListingPage(nav, listingService, loadingCtrl) {
        this.nav = nav;
        this.listingService = listingService;
        this.loadingCtrl = loadingCtrl;
        this.listing = new __WEBPACK_IMPORTED_MODULE_4__listing_model__["a" /* ListingModel */]();
        this.loading = this.loadingCtrl.create();
    }
    ListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.listingService
            .getData()
            .then(function (data) {
            _this.listing.banner_image = data.banner_image;
            _this.listing.banner_title = data.banner_title;
            _this.listing.populars = data.populars;
            _this.listing.categories = data.categories;
            _this.loading.dismiss();
        });
    };
    ListingPage.prototype.goToFeed = function (category) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__rss_rss__["a" /* RssPage */], {
            category: category
        });
    };
    ListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'listing-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/listing/listing.html"*/'<ion-header class="listing-header">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n      <!--<label>Menu</label>-->\n    </button>\n    <ion-buttons end>\n    <button ion-button large menuToggle ="chatMenu">\n      <ion-icon name="cart"></ion-icon>\n      <!--<label>Chat</label>-->\n    </button> \n    </ion-buttons>   \n    <ion-title>\n      <!--<div class="header-logo" align="center">\n       <preload-image [ratio]="{w:583, h:100}" src="./assets/images/header_logo_white.png" align="center"></preload-image>\n      </div>-->\n      Welcome!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="listing-content">\n  <background-image class="image-heading" [src]="listing.banner_image">\n    <ion-row class="heading-row">\n      <ion-col no-padding width-100>\n        <h2 class="main-title">{{listing.banner_title}}</h2>\n      </ion-col>\n    </ion-row>\n  </background-image>\n  <h4 class="categories-title">Popular Products</h4>\n  <ion-scroll scrollX="true" class="horizontal-categories">\n    <ion-row class="categories-row">\n      <ion-col width-30 class="horizontal-item"  *ngFor="let popular of listing.populars">\n        <preload-image [ratio]="{w:1, h:1}" [src]="popular.image" title="popular.title"></preload-image><!--<a class="categories" href="{{popular.url}}" onclick="window.open(this.href, \'_system\', \'location=yes\'); return false;">{{popular.title}}</a>--> \n      </ion-col>\n    </ion-row>\n  </ion-scroll>\n  <h4 class="categories-title">Browse categories</h4>\n  <ion-row class="grid-categories">\n    <ion-col width-50 class="category-item" *ngFor="let category of listing.categories">\n      <background-image class="category-heading" [src]="category.image" (click)="goToFeed(category)">\n        <ion-row class="heading-row">\n          <ion-col no-padding width-100>\n            <h2 class="category-title">{{category.title}}</h2>\n          </ion-col>\n        </ion-row>\n      </background-image>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/listing/listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__listing_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], ListingPage);
    return ListingPage;
}());

//# sourceMappingURL=listing.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostDetail = /** @class */ (function () {
    function PostDetail(nav, navParams) {
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    PostDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/post-detail/post-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{selectedItem.title.rendered}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n <div *ngIf="selectedItem" class="selection">\n    <h2 [innerHTML]="selectedItem.title.rendered"></h2>\n    <div [innerHTML]="selectedItem.content.rendered"></div>\n </div>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/post-detail/post-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* NavParams */]])
    ], PostDetail);
    return PostDetail;
}());

//# sourceMappingURL=post-detail.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = /** @class */ (function () {
    function Config() {
        this.wordpressApiUrl = 'http://distillery.network/wp-json';
        // public wordpressApiUrl = 'http://demo.wp-api.org/wp-json'
        this.wordpressMenusNavigation = false;
        this.feedsUrl = './assets/data/feeds.json';
        this.feedsCategoryUrl = './assets/data/feeds-category.json';
        this.youtubeKey = 'AIzaSyClMa-MaKro_m95tb--4LaAorl-NmGPJxc';
        this.youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/';
        this.youtubeUsername = 'Jonathan Zajac';
        this.youtubeChannelId = 'UC1tCBfAhwAlU1Cv7MqY922w';
        this.youtubeResults = 50;
        this.emailTo = 'gtsopour@gmail.com';
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], Config);
    return Config;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_list_product_list__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage1 = /** @class */ (function () {
    function HomePage1(navCtrl, loadingController, shopifyClientProvider, menu) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.shopifyClientProvider = shopifyClientProvider;
        this.menu = menu;
        var that = this;
        shopifyClientProvider.getCollections()
            .then(function (data) {
            console.log(data);
            that.collections = data;
            that.pages = data;
        })
            .catch(function (err) {
            console.log('Request failed', err);
        });
    }
    HomePage1.prototype.openCollection = function (item) {
        var id = item.attrs.collection_id;
        var that = this;
        this.presentLoading();
        this.shopifyClientProvider.getCollection(id).then(function (data) {
            that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_product_list_product_list__["a" /* ProductListPage */], { products: data, collection: item });
        });
    };
    HomePage1.prototype.presentLoading = function () {
        var loader = this.loadingController.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
    };
    HomePage1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/home1/home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div style="text-align: center;"><img style="max-width: 130px;" src="./assets/images/header_logo_white.png"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img style="width: 100%;" *ngFor=" let item of collections; let i=index " (click)="openCollection(item)" src="{{item.attrs.image.src}}" />\n</ion-content>\n<!-- \n<ion-menu [content]="content">\n    <ion-list style="margin: 0px;">\n        <ion-item style="">\n            <ion-thumbnail item-left>\n                <img style="padding: 10px;" src="https://randomuser.me/api/portraits/men/51.jpg">\n            </ion-thumbnail>\n            <h2 style="text-transform: capitalize;">Noah Petersen</h2>\n        </ion-item>\n    </ion-list>\n        <ion-list>\n            <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.attrs.title}}\n            </button>\n        </ion-list>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/home1/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
    ], HomePage1);
    return HomePage1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
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
 * Generated class for the OneProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OneProductPage = /** @class */ (function () {
    function OneProductPage(navCtrl, toastCtrl, navParams, shopifyClientProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.shopifyClientProvider = shopifyClientProvider;
        this.product = this.navParams.get("item");
        this.image = this.product.images[0].src;
        console.log(this.product);
    }
    OneProductPage.prototype.ngAfterViewInit = function () {
    };
    OneProductPage.prototype.addToCart = function () {
        console.log(this.product.selectedVariant);
        this.shopifyClientProvider.addToCart(this.product.selectedVariant);
        this.presentToast('Item added to cart!');
    };
    OneProductPage.prototype.selectImage = function (image) {
        console.log(image);
        this.image = image.src;
    };
    OneProductPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1000,
            position: 'middle'
        });
        toast.present();
    };
    OneProductPage.prototype.checkout = function () {
        //this.navCtrl.push(CheckoutPage, {url:this.product.seectedVariant.checkoutUrl() });
        this.shopifyClientProvider.getProduct(this.product.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], OneProductPage.prototype, "slides", void 0);
    OneProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-one-product',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/one-product/one-product.html"*/'<!--\n  Generated template for the OneProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{product.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-image">\n            <ion-card style="margin: 0px 0px 0px 0px;   height: 100%;    box-shadow: none;">\n                <div class="frame">\n                    <img class="pimage" src="{{image}}" />\n                </div>\n            </ion-card>\n<ion-scroll scrollX=\'true\' style=" height: 200px">\n    <ion-grid style="    background: #ede6d4;padding: 0px">\n        <ion-row nowrap>\n            <ion-col col-4 style="padding: 5px;background: #ede6d4;" *ngFor=" let image of product.images; let i=index " (click)="selectImage(image)">\n                <ion-card style="margin: 0px 0px 0px 0px;    width: calc(100%);">\n                <div class="frame">\n                    <img class="pimage" src="{{image.src}}" />\n                </div>\n<!--                     <div class="name">\n                        {{item.name}}\n                    </div>\n                    <div class="price">\n                        <span style="float: left">${{item.price}}</span><span style="text-decoration: line-through;float: right">$2,599</span>\n                    </div>\n                    <div class="reviewsBlock">\n                        <ion-icon class="reviews" name="star"> {{item.rating}} <i>({{item.reviews}})</i></ion-icon>\n                    </div> -->\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-scroll>\n    <ion-list style="margin-top: -50px;margin-bottom: 0px">\n        <ion-item style="background-color: #f4f4f4;border-top: 1px solid #ccc;height: 25px;border-bottom: 1px solid #ccc;">\n            <ion-note item-left>\n                <span style="color: #5e5e5e;font-size: 24px;">${{product.selectedVariant.price}}</span>\n                <span style="color: #2d9a4d;"> In Stock</span>\n        \n            </ion-note>\n            <ion-note item-right style="color:#548eec;">\n                <button ion-button icon-only clear>\n                    <ion-icon style="color: #ff8585;" name="heart"></ion-icon>\n                </button>\n            </ion-note>\n        </ion-item>\n    </ion-list>\n\n  <div style="text-align: justify;" padding [innerHTML]="product.description">\n  </div>\n<!-- <ion-slides style="height: 25%" autoplay=\'4000\' zoom =\'true\' speed=\'500\' loop=\'true\' initialSlide=\'0\' pager=\'true\' >\n\n  <ion-slide *ngFor=" let image of product.images; let i=index ">\n                <div class="frame">\n                    <img class="pimage" src="{{image.src}}" />\n                </div>\n  </ion-slide>\n\n</ion-slides> -->\n\n<!--                 <div style="text-overflow: ellipsis;padding: 4%;font-size: 14px;overflow: hidden;color: #656565; white-space: nowrap;   background: rgba(41, 71, 119, 0.17); ">\n                    {{item.attrs.title}}\n                </div>\n                <div style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding: 4%;font-size: 14px; color: #656565;  ">\n                    <span style="float: left">Price</span><span style="float: right">${{item.variants[0].price}}</span>\n                </div> -->\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="padding: 0px;min-height: 0px;">\n        <ion-grid style="padding: 0px;">\n            <ion-row style="padding: 0px;">\n                <ion-col style="padding: 0px;" width-100>\n                    <button class="footer-b1" ion-button (click)="addToCart()" full>Add to Cart\n                        <ion-icon style="padding-left:10px" name="md-cart"></ion-icon></button>\n                </ion-col>\n<!--                 <ion-col style="padding: 0px;" width-50>\n                    <button class="footer-b1" ion-button (click)="checkout()" full>Buy Now\n                        <ion-icon style="padding-left:10px" name="md-send"></ion-icon>\n                    </button>\n                </ion-col> -->\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/one-product/one-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */]])
    ], OneProductPage);
    return OneProductPage;
}());

//# sourceMappingURL=one-product.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_checkout_checkout__ = __webpack_require__(618);
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
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, toastCtrl, events, navParams, shopifyClientProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.navParams = navParams;
        this.shopifyClientProvider = shopifyClientProvider;
        this.qty = 1;
        this.amount = 0;
        this.events.subscribe('cart:amount', function (data) {
            console.log("amount ", data);
            _this.amount = data.amount;
        });
    }
    CartPage.prototype.getAmount = function () {
        //  this.amount = this.globals.getTotalAmout();// call getTotalAmout() from globals provider
    };
    CartPage.prototype.getBarcode = function () {
        // this.barcodeScanner.scan().then((barcodeData) => {
        //     this.presentToast(barcodeData)
        // }, (err) => {
        //     // An error occurred
        // });
    };
    CartPage.prototype.emptyCart = function () {
        //  this.globals.clearCart(); // call clearCart() from globals provider
        this.presentToast('Cart cleared!');
    };
    CartPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    CartPage.prototype.checkout = function () {
        var that = this;
        this.shopifyClientProvider.getCart().then(function (cart) {
            var url = cart.checkoutUrl;
            that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_checkout_checkout__["a" /* CheckoutPage */], { url: url });
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/cart/cart.html"*/'<ion-header>\n    <ion-navbar>\n        <!--         <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button> -->\n        <ion-title>Cart</ion-title>\n        <ion-buttons *ngIf="amount > 0" end royal>\n                <button class="footer-b1" ion-button (click)="checkout()" full>Checkout\n                        <ion-icon style="padding-left:10px" name="md-send"></ion-icon>\n                </button>\n        </ion-buttons>\n    </ion-navbar>\n    <div class="top">\n                <ion-item class="totalHeader">\n                    <ion-note item-left class="total">\n                        Total\n                    </ion-note>\n                    <ion-note item-right class="total">\n                        ${{amount}}\n                    </ion-note>\n                </ion-item>\n    </div>\n</ion-header>\n<ion-content>\n    <cart></cart>\n</ion-content>\n<!-- <ion-footer>\n    <ion-toolbar style="padding: 0px;min-height: 0px;">\n        <ion-grid style="padding: 0px;">\n            <ion-row style="padding: 0px;">\n                <ion-col style="padding: 0px;" width-50>\n                    <button class="footer-b1" ion-button (click)="emptyCart()" full>Empty Cart</button>\n                </ion-col>\n                <ion-col style="padding: 0px;" width-50>\n                    <button class="footer-b1" ion-button (click)="checkout()" full>Checkout\n                        <ion-icon style="padding-left:10px" name="md-send"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_one_product_one_product__ = __webpack_require__(227);
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
 * Generated class for the CollectionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CollectionsPage = /** @class */ (function () {
    function CollectionsPage(navCtrl, navParams, shopifyClientProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopifyClientProvider = shopifyClientProvider;
        this.myInput = '';
        this.allItems = [];
        this.realItems = [];
    }
    CollectionsPage.prototype.ionViewDidLoad = function () {
        var that = this;
        this.shopifyClientProvider.getProducts()
            .then(function (data) {
            console.log("collections", data);
            that.realItems = data;
            that.allItems = data;
        })
            .catch(function (err) {
            console.log('Request failed', err);
        });
    };
    CollectionsPage.prototype.search = function (event) {
        var newArr = [];
        for (var i = 0; i < this.realItems.length; i++) {
            if (this.realItems[i].attrs.title.toLowerCase().includes(this.myInput.toLowerCase()))
                newArr.push(this.realItems[i]);
        }
        this.allItems = newArr;
    };
    CollectionsPage.prototype.openProduct = function (item) {
        //console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_one_product_one_product__["a" /* OneProductPage */], { item: item });
    };
    CollectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-collections',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/collections/collections.html"*/'<ion-header>\n    <ion-navbar>\n        <!--         <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button> -->\n        <ion-title>Catalog</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-searchbar [(ngModel)]="myInput" (ionInput)="search($event)" [showCancelButton]="shouldShowCancel">\n    </ion-searchbar>\n    <ion-row>\n        <ion-col col-6 col-sm-3 *ngFor=" let item of allItems; let i=index "  >\n            <ion-card style="margin: 0px 0px 0px 0px;   height: 220px;" (click)="openProduct(item)">\n                <div class="frame">\n                    <img class="pimage" src="{{item.attrs.images[0].src}}" />\n                </div>\n                <div style="text-overflow: ellipsis;padding: 4%;font-size: 14px;overflow: hidden;color: #656565; white-space: nowrap;   background: rgba(41, 71, 119, 0.17); ">\n                    {{item.attrs.title}}\n                </div>\n                <div style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding: 4%;font-size: 14px; color: #656565;  ">\n                    <span style="float: left">Price</span><span style="float: right">${{item.variants[0].price}}</span>\n                </div>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/collections/collections.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */]])
    ], CollectionsPage);
    return CollectionsPage;
}());

//# sourceMappingURL=collections.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Email */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());

var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email) {
        var plugins = window.cordova.plugins;
        plugins.email.isAvailable(function () {
            plugins.email.open(email);
        });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], EmailService);
    return EmailService;
}());

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__followers_followers__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_model__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(menu, app, navParams, profileService, loadingCtrl) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.profileService = profileService;
        this.loadingCtrl = loadingCtrl;
        this.profile = new __WEBPACK_IMPORTED_MODULE_5__profile_model__["a" /* ProfileModel */]();
        this.display = "list";
        this.loading = this.loadingCtrl.create();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService
            .getData()
            .then(function (data) {
            _this.profile.user = data.user;
            _this.profile.following = data.following;
            _this.profile.followers = data.followers;
            _this.profile.posts = data.posts;
            _this.loading.dismiss();
        });
    };
    ProfilePage.prototype.goToFollowersList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__followers_followers__["a" /* FollowersPage */], {
            list: this.profile.followers
        });
    };
    ProfilePage.prototype.goToFollowingList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__followers_followers__["a" /* FollowersPage */], {
            list: this.profile.following
        });
    };
    ProfilePage.prototype.goToSettings = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    ProfilePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile-content">\n  <div class="user-details">\n    <ion-row class="user-main-data-row">\n      <ion-col no-padding width-33>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="profile.user.image" alt="profile.user.name" title="profile.user.name"></preload-image>\n      </ion-col>\n      <ion-col no-padding>\n        <ion-row class="social-presence-row">\n          <ion-col width-50 class="social-presence-item">\n            <a (click)="goToFollowersList()">\n              <h2 class="social-presence-value">{{profile.followers.length}}</h2>\n              <h4 class="social-presence-title">Followers</h4>\n            </a>\n          </ion-col>\n          <ion-col width-50 class="social-presence-item">\n            <a (click)="goToFollowingList()">\n              <h2 class="social-presence-value">{{profile.following.length}}</h2>\n              <h4 class="social-presence-title">Following</h4>\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row class="profile-action-row">\n          <ion-col no-padding>\n            <button ion-button block small (click)="goToSettings()">\n              Edit profile\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row wrap class="user-bio-row">\n      <ion-col no-padding width-50>\n        <h2 class="user-name">{{profile.user.name}}</h2>\n      </ion-col>\n      <ion-col no-padding width-50>\n        <span class="user-location">{{profile.user.location}}</span>\n      </ion-col>\n      <ion-col no-padding width-100>\n        <p class="user-description">\n          {{profile.user.about}}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-segment class="user-content-segment" [(ngModel)]="display" (ionChange)="onSegmentChanged($event)">\n      <ion-segment-button value="grid" (ionSelect)="onSegmentSelected($event)">\n        Grid\n      </ion-segment-button>\n      <ion-segment-button value="list" (ionSelect)="onSegmentSelected($event)">\n        List\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="display" class="user-content">\n    <div *ngSwitchCase="\'list\'" class="list-view">\n      <div class="list-item" *ngFor="let post of profile.posts">\n        <span class="item-date">{{post.date}}</span>\n        <ion-card>\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title=""></preload-image>\n          <ion-card-content>\n            <p class="item-text">\n              {{post.description}}\n            </p>\n          </ion-card-content>\n          <ion-row no-padding class="actions-row">\n            <ion-col no-padding width-30 text-left>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n                  {{post.likes}} Likes\n              </button>\n            </ion-col>\n            <ion-col no-padding width-45 text-center>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon name=\'chatbubbles\'></ion-icon>\n                  {{post.comments}} Comments\n              </button>\n            </ion-col>\n            <ion-col no-padding width-25 text-right>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'grid\'" class="grid-view">\n      <ion-row wrap class="grid-row">\n        <ion-col width-33 class="grid-item" *ngFor="let post of profile.posts">\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = /** @class */ (function () {
    function TermsOfServicePage(view) {
        this.view = view;
    }
    TermsOfServicePage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    TermsOfServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'terms-of-service-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/terms-of-service/terms-of-service.html"*/'<ion-header class="terms-header legal-header">\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Terms of Service\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="terms-content legal-content">\n  <p>Last modified: Nov 14, 2016</p>\n  <h4 class="legal-title">Welcome to ion2FullApp!</h4>\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  <h4 class="legal-title">Using our Services</h4>\n  <p>You must follow any policies made available to you within the Services.</p>\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n  <h4 class="legal-title">About these Terms</h4>\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/terms-of-service/terms-of-service.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], TermsOfServicePage);
    return TermsOfServicePage;
}());

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(view) {
        this.view = view;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'privacy-policy-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/privacy-policy/privacy-policy.html"*/'<ion-header class="privacy-header legal-header">\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Privacy Policy\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="privacy-content legal-content">\n  <p>Last modified: Nov 14, 2016</p>\n  <h4 class="legal-title">Welcome to ion2FullApp!</h4>\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  <h4 class="legal-title">Using our Services</h4>\n  <p>You must follow any policies made available to you within the Services.</p>\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n  <h4 class="legal-title">About these Terms</h4>\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/privacy-policy/privacy-policy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsNavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_listing__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(631);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsNavigationPage = /** @class */ (function () {
    function TabsNavigationPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__listing_listing__["a" /* ListingPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */];
    }
    TabsNavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tabs-navigation',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/tabs-navigation/tabs-navigation.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Listing" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Notifications" tabIcon="notifications"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/tabs-navigation/tabs-navigation.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsNavigationPage);
    return TabsNavigationPage;
}());

//# sourceMappingURL=tabs-navigation.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getData = function () {
        return this.http.get('./assets/example_data/profile.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = counterRangeValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
function counterRangeValidator(maxValue, minValue) {
    return function (c) {
        var err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
var CounterInput = /** @class */ (function () {
    function CounterInput() {
        this.propagateChange = noop;
        this.validateFn = noop;
        this._counterValue = 0;
    }
    CounterInput_1 = CounterInput;
    Object.defineProperty(CounterInput.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    CounterInput.prototype.ngOnChanges = function (inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    };
    CounterInput.prototype.writeValue = function (value) {
        if (value) {
            this.counterValue = value;
        }
    };
    CounterInput.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterInput.prototype.registerOnTouched = function () { };
    CounterInput.prototype.increase = function () {
        this.counterValue++;
    };
    CounterInput.prototype.decrease = function () {
        this.counterValue--;
    };
    CounterInput.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('counterValue'),
        __metadata("design:type", Object)
    ], CounterInput.prototype, "_counterValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('max'),
        __metadata("design:type", Object)
    ], CounterInput.prototype, "counterRangeMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('min'),
        __metadata("design:type", Object)
    ], CounterInput.prototype, "counterRangeMin", void 0);
    CounterInput = CounterInput_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'counter-input',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/components/counter-input/counter-input.html"*/'<button ion-button icon-only class="counter-icon" (click)="decrease()">\n  <ion-icon name="remove"></ion-icon>\n</button>\n<span class="counter-inner">{{counterValue}}</span>\n<button ion-button icon-only class="counter-icon" (click)="increase()">\n  <ion-icon name="add"></ion-icon>\n</button>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/components/counter-input/counter-input.html"*/,
            host: {
                'class': 'counter-input'
            },
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return CounterInput_1; }), multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return CounterInput_1; }), multi: true }
            ]
        })
    ], CounterInput);
    return CounterInput;
    var CounterInput_1;
}());

//# sourceMappingURL=counter-input.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedService = /** @class */ (function () {
    function FeedService(http, config) {
        this.http = http;
        this.config = config;
    }
    FeedService.prototype.getCategories = function () {
        var url = this.config.feedsUrl;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    FeedService.prototype.getCategory = function () {
        var url = this.config.feedsCategoryUrl;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    FeedService.prototype.getFeeds = function (source) {
        //let url = 'https://query.yahooapis.com/v1/public/yql?q=select * from xml where url ="' + encodeURIComponent(source) + '"&format=json';	
        var url = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(source) + '&format=json';
        //let url = 'https://rss2json.com/#rss_url="' + encodeURIComponent(source) + '"&format=json';	
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    FeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */]])
    ], FeedService);
    return FeedService;
}());

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xml2js__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var STORAGE_KEY = "rss_favorites";
/*
  Generated class for the RssServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var RssService = /** @class */ (function () {
    function RssService(http, iab, socialSharing, storage) {
        this.http = http;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this.category = [
            {
                'title': 'Moonshine Distilling',
                'link': 'https://feed.rssunify.com/5c9110e45af8f/rss.xml'
            },
            {
                'title': 'Precious Metals',
                'link': 'https://feed.rssunify.com/5c913911c449d/rss.xml'
            },
            {
                'title': 'Survivalist News',
                'link': 'https://feed.rssunify.com/5c9139b024fea/rss.xml'
            },
            {
                'title': 'Politics and Economy',
                'link': 'https://feed.rssunify.com/5c913aabdd9eb/rss.xml'
            },
            {
                'title': 'Moonshine Recipes',
                'link': 'https://feed.rssunify.com/5c98e4b560897/rss.xml'
            },
            {
                'title': 'Moonshine Culture',
                'link': 'https://feed.rssunify.com/5c913bfd4fa1a/rss.xml'
            },
            {
                'title': 'Moonshine Podcasts',
                'link': 'https://feed.rssunify.com/5c913d97e1baa/rss.xml'
            }
        ];
    }
    RssService.prototype.getCategory = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    RssService.prototype.getPosts = function (link) {
        if (link === void 0) { link = null; }
        return this.http.get(link, { responseType: "text" });
    };
    RssService.prototype.convertToJson = function (data) {
        var res;
        __WEBPACK_IMPORTED_MODULE_2_xml2js___default.a.parseString(data, { explicitArray: false }, function (error, result) {
            if (error) {
                throw new Error(error);
            }
            else {
                res = result;
            }
        });
        return res;
    };
    RssService.prototype.isFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                if (_this.getIndexOf(item.link, result) != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        });
    };
    RssService.prototype.favorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                result.push(item);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [item]);
            }
        });
    };
    RssService.prototype.unFavorite = function (item) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                var index = _this.getIndexOf(item.link, result);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    RssService.prototype.getAllFavorites = function () {
        return this.storage.get(STORAGE_KEY);
    };
    RssService.prototype.getIndexOf = function (link, result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].link == link) {
                return i;
            }
        }
        return -1;
    };
    RssService.prototype.clearAllFavorite = function () {
        this.storage.remove(STORAGE_KEY);
    };
    //action on click event
    RssService.prototype.doFavorite = function (item) {
        var _this = this;
        this.isFavorite(item).then(function (result) {
            if (result == false) {
                item.isFavorite = true;
                _this.favorite(item);
            }
            else {
                item.isFavorite = false;
                _this.unFavorite(item);
            }
        });
    };
    RssService.prototype.goToHomePage = function (navCtrl, item) {
        navCtrl.push('RssHomePage', {
            'item': item
        });
    };
    RssService.prototype.doOpen = function (item) {
        this.iab.create(item.link);
    };
    RssService.prototype.doShare = function (item) {
        this.socialSharing.share(item.title, item.description, null, item.link);
    };
    RssService.prototype.goToFavoritePage = function (navCtrl) {
        navCtrl.push('RssFavoritePage');
    };
    RssService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RssService);
    return RssService;
}());

//# sourceMappingURL=rss-service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(443);
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
 * Generated class for the AddPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPostPage = /** @class */ (function () {
    function AddPostPage(navCtrl, navParams, loadingProvider, dataProvider, angularDb, firebaseProvider, alertCtrl, imageProvider, alertProvider, googleMaps, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.angularDb = angularDb;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.alertProvider = alertProvider;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
    }
    AddPostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
        });
    };
    AddPostPage.prototype.post = function () {
        var _this = this;
        if (this.image) {
            this.loadingProvider.show();
            this.imageProvider.uploadPostImage(this.image).then(function (url) {
                // ======= push new post in 'timeline' ====
                _this.angularDb.list('timeline').push({
                    dateCreated: new Date().toString(),
                    postBy: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
                    postText: _this.postText,
                    image: url
                }).then(function (success) {
                    _this.postText = '';
                    var timelineId = success.key;
                    _this.firebaseProvider.timeline(timelineId);
                    _this.alertProvider.showToast('Add post successfully ..');
                    _this.loadingProvider.hide();
                    _this.navCtrl.pop();
                });
            });
        }
        else if (this.location) {
            this.loadingProvider.show();
            // ======= push new post in 'timeline' ====
            this.angularDb.list('timeline').push({
                dateCreated: new Date().toString(),
                postBy: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
                postText: this.postText,
                location: this.location
            }).then(function (success) {
                _this.postText = '';
                var timelineId = success.key;
                _this.firebaseProvider.timeline(timelineId);
                _this.alertProvider.showToast('Add post successfully ..');
                _this.loadingProvider.hide();
                _this.navCtrl.pop();
            });
        }
        else {
            this.loadingProvider.show();
            // ======= push new post in 'timeline' ====
            this.angularDb.list('timeline').push({
                dateCreated: new Date().toString(),
                postBy: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
                postText: this.postText,
            }).then(function (success) {
                _this.postText = '';
                var timelineId = success.key;
                _this.firebaseProvider.timeline(timelineId);
                _this.alertProvider.showToast('Add post successfully ..');
                _this.loadingProvider.hide();
                _this.navCtrl.pop();
            });
        }
    };
    AddPostPage.prototype.imageShare = function () {
        var _this = this;
        this.imageProvider.setImage().then(function (url) {
            console.log("url", url);
            _this.image = url;
        });
    };
    AddPostPage.prototype.locationShare = function () {
        var _this = this;
        this.loadingProvider.show();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.location = JSON.stringify({ lat: position.coords.latitude, long: position.coords.longitude });
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
            _this.loadingProvider.hide();
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AddPostPage.prototype, "mapElement", void 0);
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-post',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/add-post/add-post.html"*/'<!--\n  Generated template for the AddPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-post</ion-title>\n    <ion-buttons end (click)="post()">\n      <button  [disabled]="!postText">\n      POST\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-line>\n  <ion-item *ngIf="user">\n    <ion-thumbnail item-left  >\n      <img src="{{user.img}}"  >\n    </ion-thumbnail>\n    <p><b>{{user.username}}</b></p>\n  </ion-item>\n  <ion-item>\n    <textarea placeholder="Please enter your message" [(ngModel)]="postText"> </textarea>\n  </ion-item>\n  <ion-item *ngIf="image">\n    <img src="{{image}}">\n  </ion-item>\n  <div #map id="map" style="height:50%;"></div>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-50>\n        <button ion-button block color="primary" (click)="imageShare()" [disabled]="location">\n          <ion-icon name=\'camera\'></ion-icon> Image\n        </button>\n        <!-- <button ion-button icon-only outline color="custom" [disabled]="shareImage">\n          <ion-icon name=\'navigate\'></ion-icon>\n\n        </button> -->\n      </ion-col>\n      <!--<ion-col width-50>\n        <button ion-button icon-left block color="primary" (click)="locationShare()"  [disabled]="image"> (click)="locationShare()"\n            <ion-icon name=\'navigate\'></ion-icon>\n            Location\n        </button>\n      </ion-col>-->\n    </ion-row>\n  </ion-grid>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post_add_post__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_comments__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__image_modal_image_modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_video__ = __webpack_require__(178);
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
 * Generated class for the TimelinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TimelinePage = /** @class */ (function () {
    function TimelinePage(navCtrl, navParams, loadingProvider, angularDb, dataProvider, firebaseProvider, modalCtrl, videoProvider, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingProvider = loadingProvider;
        this.angularDb = angularDb;
        this.dataProvider = dataProvider;
        this.firebaseProvider = firebaseProvider;
        this.modalCtrl = modalCtrl;
        this.videoProvider = videoProvider;
        this.platform = platform;
        console.log("======timeline");
        this.platform.ready().then(function () {
            _this.platform.pause.subscribe(function () {
                console.log('[INFO] App paused', _this.user);
                _this.isFirstTime = false;
                if (_this.user) {
                    // Update userData on Database.
                    _this.angularDb.object('/accounts/' + _this.user.userId).update({
                        isOnline: false
                    }).then(function (success) {
                    }).catch(function (error) {
                        //this.alertProvider.showErrorMessage('profile/error-update-profile');
                    });
                }
            });
            _this.platform.resume.subscribe(function () {
                console.log('[INFO] App resumed', _this.user);
                _this.isFirstTime = false;
                if (_this.user) {
                    // Update userData on Database.
                    _this.angularDb.object('/accounts/' + _this.user.userId).update({
                        isOnline: true
                    }).then(function (success) {
                    }).catch(function (error) {
                        //this.alertProvider.showErrorMessage('profile/error-update-profile');
                    });
                }
            });
        });
    }
    TimelinePage.prototype.ionViewDidLoad = function () {
        this.isFirstTime = true;
        this.getTimeline();
        console.log("===Timeline page didload====");
    };
    TimelinePage.prototype.getTimeline = function () {
        var _this = this;
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.createUserData();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
            console.log("======this user====", _this.user);
            //  Update userData on Database.
        });
        // Get Friend  List
        this.dataProvider.getFriends().subscribe(function (friends) {
            // Get timeline by user
            _this.dataProvider.getTimelinePost().subscribe(function (post) {
                // console.log("======post ======",post);
                _this.loadingProvider.hide();
                if (_this.timelineData) {
                    var timeline_1 = post[post.length - 1];
                    var tempData_1 = {};
                    tempData_1 = timeline_1;
                    var friendIndex = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](friends, function (data) {
                        var _tempData = data;
                        return _tempData.$value == timeline_1.postBy;
                    });
                    // console.log("friendIndex ===",friendIndex)
                    if (friendIndex || timeline_1.postBy == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid) {
                        _this.dataProvider.getUser(timeline_1.postBy).subscribe(function (user) {
                            tempData_1.avatar = user.img;
                            tempData_1.name = user.name;
                        });
                        // Check Locaion
                        if (timeline_1.location) {
                            var tempLocaion = JSON.parse(timeline_1.location);
                            tempData_1.lat = tempLocaion.lat;
                            tempData_1.long = tempLocaion.long;
                            tempData_1.location = "https://maps.googleapis.com/maps/api/staticmap?&zoom=13&size=500x200&maptype=roadmap&markers=color:red|label:S|" + tempLocaion.lat + "," + tempLocaion.long;
                        }
                        //  ===== check like and commnets ===
                        _this.dataProvider.getLike(tempData_1.$key).subscribe(function (likes) {
                            tempData_1.likes = likes.length;
                            var isLike = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](likes, function (like) {
                                var _tempLike = like;
                                return _tempLike.$value == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
                            });
                            if (isLike) {
                                tempData_1.isLike = true;
                            }
                            else {
                                tempData_1.isLike = false;
                            }
                        });
                        //  ===== check dilike
                        _this.dataProvider.getdisLike(tempData_1.$key).subscribe(function (dislikes) {
                            tempData_1.dislikes = dislikes.length;
                            // Check post like or not
                            var isdisLike = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](dislikes, function (dislike) {
                                var _tempLike = dislike;
                                return _tempLike.$value == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
                            });
                            if (isdisLike) {
                                tempData_1.isdisLike = true;
                            }
                            else {
                                tempData_1.isdisLike = false;
                            }
                        });
                        //  ===== check commnets
                        _this.dataProvider.getComments(tempData_1.$key).subscribe(function (comments) {
                            tempData_1.comments = comments.length;
                            // Check post like or not
                            var isComments = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](comments, function (comment) {
                                var _tempComment = comment;
                                return _tempComment.commentBy == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
                            });
                            if (isComments) {
                                tempData_1.isComment = true;
                            }
                            else {
                                tempData_1.isComment = false;
                            }
                        });
                        // this.addOrUpdateTimeline(tempData)
                        _this.timelineData.unshift(tempData_1);
                    }
                }
                else {
                    _this.timelineData = [];
                    post.forEach(function (data) {
                        console.log('data', data);
                        _this.dataProvider.getTimeline(data.$key).subscribe(function (timeline) {
                            if (timeline.$exists()) {
                                var tempData_2 = {};
                                tempData_2 = timeline;
                                var friendIndex = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](friends, function (data) {
                                    var _tempData = data;
                                    return _tempData.$value == timeline.postBy;
                                });
                                // console.log("friendIndex ===",friendIndex)
                                if (friendIndex || timeline.postBy == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid) {
                                    _this.dataProvider.getUser(timeline.postBy).subscribe(function (user) {
                                        tempData_2.avatar = user.img;
                                        tempData_2.name = user.name;
                                    });
                                    // Check Location
                                    if (timeline.location) {
                                        var tempLocaion = JSON.parse(timeline.location);
                                        tempData_2.lat = tempLocaion.lat;
                                        tempData_2.long = tempLocaion.long;
                                        tempData_2.location = "https://maps.googleapis.com/maps/api/staticmap?&zoom=13&size=500x300&maptype=roadmap&markers=color:red|label:S|" + tempLocaion.lat + "," + tempLocaion.long;
                                    }
                                    //  ===== check like
                                    _this.dataProvider.getLike(tempData_2.$key).subscribe(function (likes) {
                                        tempData_2.likes = likes.length;
                                        // Check post like or not
                                        var isLike = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](likes, function (like) {
                                            var _tempLike = like;
                                            return _tempLike.$value == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
                                        });
                                        if (isLike) {
                                            tempData_2.isLike = true;
                                        }
                                        else {
                                            tempData_2.isLike = false;
                                        }
                                    });
                                    //  ===== check dilike
                                    _this.dataProvider.getdisLike(tempData_2.$key).subscribe(function (dislikes) {
                                        tempData_2.dislikes = dislikes.length;
                                        // Check post like or not
                                        var isdisLike = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](dislikes, function (dislike) {
                                            var _tempLike = dislike;
                                            return _tempLike.$value == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
                                        });
                                        if (isdisLike) {
                                            tempData_2.isdisLike = true;
                                        }
                                        else {
                                            tempData_2.isdisLike = false;
                                        }
                                    });
                                    //  ===== check commnets
                                    _this.dataProvider.getComments(tempData_2.$key).subscribe(function (comments) {
                                        // console.log("====comm",comments)
                                        tempData_2.comments = comments.length;
                                        // Check post like or not
                                        var isComments = __WEBPACK_IMPORTED_MODULE_8_lodash__["findKey"](comments, function (comment) {
                                            var _tempComment = comment;
                                            return _tempComment.commentBy == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid;
                                        });
                                        if (isComments) {
                                            tempData_2.isComment = true;
                                        }
                                        else {
                                            tempData_2.isComment = false;
                                        }
                                    });
                                    // this.addOrUpdateTimeline(tempData)
                                    _this.timelineData.unshift(tempData_2);
                                }
                            }
                        });
                    });
                }
            });
        });
        // ====== user post time line
        // this.dataProvider.getTimelines().subscribe((timelineIds)=>{
        //   console.log("====timelineIds===",timelineIds)
        //   if(timelineIds.length>0){
        //     this.loadingProvider.hide();
        //       this.timelineData = []
        //       timelineIds.forEach((timelineId)=>{
        //         console.log("====timelineId===",timelineId)
        //           this.dataProvider.getTimeline(timelineId.$value).subscribe((timeline)=>{
        //             if(timeline.$exists()){
        //               let tempData = <any>{};
        //               tempData = timeline;
        //               this.dataProvider.getUser(timeline.postBy).subscribe((user) => {
        //                 tempData.avatar = user.img;
        //                 tempData.name = user.name
        //               });
        //               // this.addOrUpdateTimeline(tempData)
        //               this.timelineData.unshift(tempData);
        //             }
        //           })
        //       })
        //   } else {
        //     this.timelineData = [];
        //     this.loadingProvider.hide();
        //   }
        // })
        // get all time line
    };
    // Create userData on the database if it doesn't exist yet.
    TimelinePage.prototype.createUserData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid).once('value')
            .then(function (account) {
            console.log('===========account', account);
            // No database data yet, create user data on database
            if (!account.val()) {
                _this.loadingProvider.show();
                var user = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser;
                var userId, name, provider, img, email;
                var providerData = user.providerData[0];
                userId = user.uid;
                // Get name from Firebase user.
                if (user.displayName || providerData.displayName) {
                    name = user.displayName;
                    name = providerData.displayName;
                }
                else {
                    name = "Firebase User";
                }
                // Set default username based on name and userId.
                var username = name.replace(/ /g, '') + userId.substring(0, 8);
                // Get provider from Firebase user.
                if (providerData.providerId == 'password') {
                    provider = "Firebase";
                }
                else if (providerData.providerId == 'facebook.com') {
                    provider = "Facebook";
                }
                else if (providerData.providerId == 'google.com') {
                    provider = "Google";
                }
                // Get photoURL from Firebase user.
                if (user.photoURL || providerData.photoURL) {
                    img = user.photoURL;
                    img = providerData.photoURL;
                }
                else {
                    img = "assets/images/profile.png";
                }
                // Get email from Firebase user.
                email = user.email;
                // Set default description.
                var description = "Hello! I am a new FireLine user.";
                var uniqueId = Math.floor(Math.random() * 10000000000);
                var tempData_3 = {
                    userId: userId,
                    name: name,
                    username: username,
                    provider: provider,
                    img: img,
                    email: email,
                    description: description,
                    uniqueId: uniqueId,
                    isOnline: true,
                    dateCreated: new Date().toString()
                };
                // Insert data on our database using AngularFire.
                _this.angularDb.object('/accounts/' + userId).set(tempData_3).then(function () {
                    _this.loadingProvider.hide();
                    _this.videoProvider.InitializingRTC(tempData_3);
                });
            }
            else {
                // alert('ads')
                var isDt = true;
                if (isDt) {
                    isDt = false;
                    if (_this.isFirstTime) {
                        setTimeout(function () {
                            console.log("=====is Online");
                            _this.videoProvider.InitializingRTC(_this.user);
                            _this.angularDb.object('/accounts/' + _this.user.userId).update({
                                isOnline: true
                            }).then(function (success) {
                            }).catch(function (error) {
                            });
                        }, 500);
                    }
                }
                // let isDt = true;
                // this.dataProvider.getCurrentUser().subscribe((user) => {
                //   this.user = <any>user;
                //   console.log('===========before online')
                //   if(isDt){
                //      isDt = false;
                //      if(this.isFirstTime){
                //         setTimeout(()=>{
                //             console.log("=====is Online");
                //             this.videoProvider.InitializingRTC(this.user);
                //             this.angularDb.object('/accounts/' + this.user.userId).update({
                //               isOnline: true
                //             }).then((success) => {
                //             }).catch((error) => {
                //               //this.alertProvider.showErrorMessage('profile/error-update-profile');
                //             });
                //         },500)
                //       }
                //   }
                // });
            }
        });
    };
    // Add or update timeline data for real-time sync.
    TimelinePage.prototype.addOrUpdateTimeline = function (timeline) {
        if (!this.timelineData) {
            this.timelineData = [timeline];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.timelineData.length; i++) {
                if (this.timelineData[i].$key == timeline.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.timelineData[index] = timeline;
            }
            else {
                this.timelineData.unshift(timeline);
            }
        }
    };
    TimelinePage.prototype.addPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_post_add_post__["a" /* AddPostPage */]);
    };
    TimelinePage.prototype.likePost = function (post) {
        this.firebaseProvider.likePost(post.$key);
    };
    TimelinePage.prototype.delikePost = function (post) {
        this.firebaseProvider.delikePost(post.$key);
    };
    TimelinePage.prototype.disikePost = function (post) {
        this.firebaseProvider.dislikePost(post.$key);
    };
    TimelinePage.prototype.dedislikePost = function (post) {
        this.firebaseProvider.dedislikePost(post.$key);
    };
    TimelinePage.prototype.commentPost = function (post) {
        console.log(post);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__comments_comments__["a" /* CommentsPage */], { postKey: post.$key });
        modal.present();
    };
    TimelinePage.prototype.openMap = function (lat, long) {
        window.open('http://maps.google.com/maps?q=' + lat + ',' + long, '_system', 'location=yes');
    };
    // Enlarge image messages.
    TimelinePage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/timeline/timeline.html"*/'<!--\n  Generated template for the TimelinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Share Your Thoughts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-card *ngIf="user">\n    <ion-item class="post" (click)="addPost()" >\n      <ion-thumbnail item-left  >\n        <img src="{{user.img}}"  >\n      </ion-thumbnail>\n      <p >What\'s on your mind?</p>\n    </ion-item>\n  </ion-card>\n  <ion-card *ngFor="let item of timelineData">\n    <ion-item >\n      <ion-avatar item-left>\n        <img src="{{item.avatar}}"  >\n      </ion-avatar>\n      <h2>{{item.name}}</h2>\n      <p>{{item.dateCreated | DateFormat}}</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>{{item.postText}}</p>\n    </ion-card-content>\n    <!-- <img *ngIf="p.isType==2"   src="{{p.mapUrl}}" style="200px" (click)="openMap(p.mapData.lat,p.mapData.long)"> -->\n    <img src="{{item.image}}" style="height:200px" *ngIf="item.image" (click)="enlargeImage(item.image)">\n    <img src="{{item.location}}" style="height:200px" *ngIf="item.location" (click)="openMap(item.lat,item.long)">\n    <ion-row text-center>\n      <ion-col col-4>\n        <button ion-button icon-left clear small color="dark" (click)="likePost(item)" *ngIf="!item.isLike">\n          <ion-icon name="thumbs-up" ></ion-icon>\n          <div> {{item.likes}} Like </div>\n        </button>\n        <button ion-button icon-left clear small color="custom" (click)="delikePost(item)" *ngIf="item.isLike">\n          <ion-icon name="thumbs-up" ></ion-icon>\n          <div>{{item.likes}} Like</div>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button icon-left clear small color="dark" (click)="disikePost(item)" *ngIf="!item.isdisLike">\n          <ion-icon name="thumbs-down" ></ion-icon>\n          <div> {{item.dislikes}} Dislike </div>\n        </button>\n        <button ion-button icon-left clear small color="custom" (click)="dedislikePost(item)" *ngIf="item.isdisLike">\n          <ion-icon name="thumbs-down" ></ion-icon>\n          <div>{{item.dislikes}} Dislike</div>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button icon-left clear small color="dark" (click)="commentPost(item)" *ngIf="!item.isComment">\n          <ion-icon name="text"></ion-icon>\n          <div>{{item.comments}} Comment</div>\n        </button>\n        <button ion-button icon-left clear small color="custom" (click)="commentPost(item)" *ngIf="item.isComment" >\n          <ion-icon name="text"></ion-icon>\n          <div>{{item.comments}} Comment</div>\n        </button>\n      </ion-col>\n      <!-- <ion-col center text-center>\n        <button ion-button icon-left clear small color="dark">\n          <ion-icon name="share-alt"></ion-icon>\n          <div>share</div>\n        </button>\n      </ion-col> -->\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/timeline/timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_video__["a" /* VideoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
 * Generated class for the CommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, viewCtrl, firebaseProvider, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.firebaseProvider = firebaseProvider;
        this.dataProvider = dataProvider;
        this.postKey = this.navParams.get('postKey');
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CommentsPage');
        this.dataProvider.getComments(this.postKey).subscribe(function (comments) {
            console.log("commnets================", comments);
            if (_this.comments) {
                var tempComments = comments[comments.length - 1];
                var tempData_1 = {};
                tempData_1 = tempComments;
                _this.dataProvider.getUser(tempComments.commentBy).subscribe(function (user) {
                    tempData_1.avatar = user.img;
                    tempData_1.name = user.name;
                });
                // this.addOrUpdateTimeline(tempData)
                _this.comments.push(tempData_1);
            }
            else {
                _this.comments = [];
                comments.forEach(function (comment) {
                    if (comment.$exists()) {
                        var tempComment = comment;
                        var tempData_2 = {};
                        tempData_2 = tempComment;
                        _this.dataProvider.getUser(tempComment.commentBy).subscribe(function (user) {
                            tempData_2.avatar = user.img;
                            tempData_2.name = user.name;
                        });
                        // this.addOrUpdateTimeline(tempData)
                        _this.comments.push(tempData_2);
                    }
                });
            }
        });
    };
    CommentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CommentsPage.prototype.postComment = function () {
        var _this = this;
        var comment = {
            dateCreated: new Date().toString(),
            commentBy: __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid,
            commentText: this.commentText,
        };
        this.firebaseProvider.commentPost(this.postKey, comment).then(function (res) {
            _this.commentText = '';
        });
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/comments/comments.html"*/'<!--\n  Generated template for the Comment page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="custom">\n\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Comment\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n\n  <ion-list *ngIf="comments">\n    <ion-item  *ngFor="let item of comments">\n\n      <ion-avatar item-left >\n        <img src="{{item.avatar}}" >\n      </ion-avatar>\n      <h2>{{item.name}}</h2>\n      <p>{{item.commentText}} </p>\n      <ion-note item-right>{{item.dateCreated | DateFormat}}</ion-note>\n    </ion-item>\n    <!-- <div class="nocomment" *ngIf="!commentList.length">\n      <img src="assets/no-record.png">\n\n    </div> -->\n  </ion-list>\n\n</ion-content>\n<ion-footer >\n  <ion-grid>\n    <ion-row>\n        <!--<ion-col col-12>\n       <button ion-button icon-only color="custom" (click)="imageShare()">\n          <ion-icon name=\'camera\'></ion-icon>\n        </button>\n      </ion-col>-->\n      <ion-col col-10>\n        <ion-textarea  placeholder="Enter your comment" [(ngModel)]="commentText"></ion-textarea>\n\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button icon-only  color="custom" (click)="postComment()" [disabled]="!commentText">\n          <ion-icon name=\'send\'></ion-icon>\n\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rss_service_rss_service__ = __webpack_require__(244);
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
 * Generated class for the RssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RssPage = /** @class */ (function () {
    function RssPage(navCtrl, rssService, navParams) {
        this.navCtrl = navCtrl;
        this.rssService = rssService;
        this.navParams = navParams;
    }
    RssPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RssCategoryPage');
        this.rssService.getCategory(this.rssService.category).subscribe(function (data) {
            _this.list_category = new Array();
            _this.list_category = data;
            console.log(_this.list_category);
        });
    };
    RssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rss',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/rss/rss.html"*/'<!--\n  Generated template for the RssPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Category</ion-title>\n        <ion-buttons right style="margin-right:10px">\n      <button ion-button icon-only (click)="rssService.goToFavoritePage(navCtrl)">\n      <ion-icon class="fs-24 text-grey-5" name="heart">\n      </ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="white-1">\n  <ion-list class="lst-no-background">\n    <ion-item  *ngFor="let item of list_category">\n        <button (click)="rssService.goToHomePage(navCtrl,item)" class="fs-15">\n         {{item.title}}\n        </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/rss/rss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rss_service_rss_service__["a" /* RssService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], RssPage);
    return RssPage;
}());

//# sourceMappingURL=rss.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var config = {
    'graph_link': 'https://graph.facebook.com/v2.9/',
    'app_access_token': '1552011421763113|-A86UxDz911AEhnyrWwJoYtFdRI',
    'page_id': '1579091215665858',
    'limit_post': 10,
    'limit_comment': 20
};
var FacebookService = /** @class */ (function () {
    function FacebookService(http, iab, socialSharing) {
        this.http = http;
        this.iab = iab;
        this.socialSharing = socialSharing;
    }
    FacebookService.prototype.getPage = function () {
        return this.http.get(config.graph_link + config.page_id + '?fields=picture,name&access_token=' + config.app_access_token);
    };
    FacebookService.prototype.getPosts = function (next) {
        if (next == null) {
            return this.http.get(config.graph_link + config.page_id + '/feed?access_token=' + config.app_access_token + '&fields=full_picture,picture,name,message,link,type,updated_time,likes.summary(true),comments.summary(true)&limit=' + config.limit_post);
        }
        else {
            return this.http.get(next);
        }
    };
    FacebookService.prototype.getComments = function (next, item) {
        if (next == null) {
            return this.http.get(config.graph_link + item.id + '/comments?access_token=' + config.app_access_token + '&limit=' + config.limit_comment + '&fields=message');
        }
        else {
            return this.http.get(next);
        }
    };
    FacebookService.prototype.goToComment = function (item, navCtrl) {
        navCtrl.push('FacebookCommentPage', {
            'item': item
        });
    };
    FacebookService.prototype.doOpen = function (item) {
        var browser = this.iab.create(item.link);
    };
    FacebookService.prototype.doShare = function (item) {
        this.socialSharing.share(item.name, item.message, null, item.link);
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], FacebookService);
    return FacebookService;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__ = __webpack_require__(249);
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
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacebookPage = /** @class */ (function () {
    function FacebookPage(navCtrl, navParams, http, fbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.fbService = fbService;
        this.next = null;
        this.page = null;
        this.spnState = 'show';
        this.list = new Array();
    }
    FacebookPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FacebookPage');
        this.spnState = 'show';
        this.fbService.getPage().subscribe(function (data) {
            _this.page = data;
            _this.loadMore();
        }, function (error) {
            _this.spnState = 'hide';
        });
    };
    FacebookPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (this.next == null) {
            this.fbService.getPosts(this.next).subscribe(function (data) {
                var tmpData = data.data;
                console.log(tmpData);
                _this.next = data.paging.next;
                _this.list = _this.list.concat(tmpData);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                _this.spnState = 'hide';
            }, function (error) {
                console.log(error);
                if (infiniteScroll != null) {
                    infiniteScroll.enable(false);
                }
                _this.spnState = 'hide';
            });
        }
        else {
            this.fbService.getPosts(this.next).subscribe(function (data) {
                var tmpData = data.data;
                _this.next = data.paging.next;
                _this.list = _this.list.concat(tmpData);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                if (_this.next == undefined) {
                    infiniteScroll.enable(false);
                }
                _this.spnState = 'hide';
            }, function (error) {
                console.log(error);
                if (infiniteScroll != null) {
                    infiniteScroll.enable(false);
                }
                _this.spnState = 'hide';
            });
        }
    };
    FacebookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-facebook',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/facebook/facebook/facebook.html"*/'<!--\n  Generated template for the Facebook page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Facebook</ion-title>\n    </ion-navbar>\n    </ion-header>\n    \n    <ion-content class="white-1">\n    <ion-spinner class="indicator" [ngClass]="spnState"></ion-spinner>\n    <ion-card *ngFor="let item of list" class="bdra-5 mgb-10">\n    <ion-item>\n    <ion-avatar item-start class="mgt-6 mgb-6">\n    <img src="{{page.picture.data.url}}">\n    </ion-avatar>\n    <h2 class="fs-14">{{page.name}}</h2>\n    <p class="fs-10 text-grey-4">{{item.updated_time | timeAgo}}</p> \n    </ion-item>\n    \n    <img [src]="item.full_picture"/>\n    <ion-card-content>\n    <ion-card-title class="pd-0 fs-15 fw-600">{{item.name}}</ion-card-title>\n    <p class="mgt-10">{{item.message}}</p>\n    </ion-card-content>\n    \n    <ion-row>\n    <ion-col>\n    <button ion-button icon-left clear small class="text-black">\n    <ion-icon name="thumbs-up"></ion-icon>\n      <div>{{item.likes.summary.total_count}}</div>\n    </button>\n    </ion-col>\n    \n    <ion-col center text-center>\n    <button ion-button icon-left clear small class="text-black" (click)="fbService.goToComment(item,navCtrl)">\n      <ion-icon name="chatbubbles"></ion-icon>\n      <div>{{item.comments.summary.total_count}}</div>\n    </button>\n    </ion-col>\n    \n    <ion-col right text-right>\n    <button ion-button icon-left clear small class="text-black" (click)="fbService.doOpen(item)">\n      <ion-icon name="open"></ion-icon>\n    </button>\n    </ion-col>\n    \n    <ion-col right text-right>\n    <button (click)="fbService.doShare(navCtrl,item)" ion-button icon-left clear small class="text-black">\n      <ion-icon name="share"></ion-icon>\n    </button>\n    </ion-col>\n    \n    </ion-row>\n    </ion-card>\n    \n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    </ion-content>\n    '/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/facebook/facebook/facebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_facebook_facebook__["a" /* FacebookService */]])
    ], FacebookPage);
    return FacebookPage;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 261;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var errorMessages = {
    // Alert Provider
    // This is the provider class for most of the success and error messages in the app.
    // If you added your own messages don't forget to make a function for them or add them in the showErrorMessage switch block.
    // Firebase Error Messages
    accountExistsWithDifferentCredential: { title: 'Account Exists!', subTitle: 'An account with the same credential already exists.' },
    invalidCredential: { title: 'Invalid Credential!', subTitle: 'An error occured logging in with this credential.' },
    operationNotAllowed: { title: 'Login Failed!', subTitle: 'Logging in with this provider is not allowed! Please contact support.' },
    userDisabled: { title: 'Account Disabled!', subTitle: 'Sorry! But this account has been suspended! Please contact support.' },
    userNotFound: { title: 'Account Not Found!', subTitle: 'Sorry, but an account with this credential could not be found.' },
    wrongPassword: { title: 'Incorrect Password!', subTitle: 'Sorry, but the password you have entered is incorrect.' },
    invalidEmail: { title: 'Invalid Email!', subTitle: 'Sorry, but you have entered an invalid email address.' },
    emailAlreadyInUse: { title: 'Email Not Available!', subTitle: 'Sorry, but this email is already in use.' },
    weakPassword: { title: 'Weak Password!', subTitle: 'Sorry, but you have entered a weak password.' },
    requiresRecentLogin: { title: 'Credential Expired!', subTitle: 'Sorry, but this credential has expired! Please login again.' },
    userMismatch: { title: 'User Mismatch!', subTitle: 'Sorry, but this credential is for another user!' },
    providerAlreadyLinked: { title: 'Already Linked!', subTitle: 'Sorry, but your account is already linked to this credential.' },
    credentialAlreadyInUse: { title: 'Credential Not Available!', subTitle: 'Sorry, but this credential is already used by another user.' },
    // Profile Error Messages
    changeName: { title: 'Change Name Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your name.' },
    invalidCharsName: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNameValidator.patternError,
    nameTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileNameValidator.lengthError,
    changeEmail: { title: 'Change Email Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your email address.' },
    invalidProfileEmail: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profileEmailValidator.patternError,
    changePhoto: { title: 'Change Photo Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your photo.' },
    passwordTooShort: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profilePasswordValidator.lengthError,
    invalidCharsPassword: __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* Validator */].profilePasswordValidator.patternError,
    passwordsDoNotMatch: { title: 'Change Password Failed!', subTitle: 'Sorry, but the passwords you entered do not match.' },
    updateProfile: { title: 'Update Profile Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your profile.' },
    usernameExists: { title: 'Username Already Exists!', subTitle: 'Sorry, but this username is already taken by another user.' },
    // Image Error Messages
    imageUpload: { title: 'Image Upload Failed!', subTitle: 'Sorry but we\'ve encountered an error uploading selected image.' },
    // Group Error Messages
    groupUpdate: { title: 'Update Group Failed!', subTitle: 'Sorry, but we\'ve encountered an error updating this group.' },
    groupLeave: { title: 'Leave Group Failed!', subTitle: 'Sorry, but you\'ve encountered an error leaving this group.' },
    groupDelete: { title: 'Delete Group Failed!', subTitle: 'Sorry, but we\'ve encountered an error deleting this group.' }
};
var successMessages = {
    passwordResetSent: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },
    profileUpdated: { title: 'Profile Updated!', subTitle: 'Your profile has been successfully updated!' },
    emailVerified: { title: 'Email Confirmed!', subTitle: 'Congratulations! Your email has been confirmed!' },
    emailVerificationSent: { title: 'Email Confirmation Sent!', subTitle: 'An email confirmation has been sent to: ' },
    accountDeleted: { title: 'Account Deleted!', subTitle: 'Your account has been successfully deleted.' },
    passwordChanged: { title: 'Password Changed!', subTitle: 'Your password has been successfully changed.' },
    friendRequestSent: { title: 'Friend Request Sent!', subTitle: 'Your friend request has been successfully sent!' },
    friendRequestRemoved: { title: 'Friend Request Deleted!', subTitle: 'Your friend request has been successfully deleted.' },
    groupUpdated: { title: 'Group Updated!', subTitle: 'This group has been successfully updated!' },
    groupLeft: { title: 'Leave Group', subTitle: 'You have successfully left this group.' }
};
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, logoutProvider, toast) {
        this.alertCtrl = alertCtrl;
        this.logoutProvider = logoutProvider;
        this.toast = toast;
        console.log("Initializing Alert Provider");
    }
    // Show profile updated
    AlertProvider.prototype.showProfileUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.profileUpdated["title"],
            subTitle: successMessages.profileUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show password reset sent
    AlertProvider.prototype.showPasswordResetMessage = function (email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordResetSent["title"],
            subTitle: successMessages.passwordResetSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    };
    // Show email verified and redirect to homePage
    AlertProvider.prototype.showEmailVerifiedMessageAndRedirect = function (navCtrl) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerified["title"],
            subTitle: successMessages.emailVerified["subTitle"],
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* Login */].homePage);
                    }
                }]
        }).present();
    };
    // Show email verification sent
    AlertProvider.prototype.showEmailVerificationSentMessage = function (email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerificationSent["title"],
            subTitle: successMessages.emailVerificationSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    };
    // Show account deleted
    AlertProvider.prototype.showAccountDeletedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.accountDeleted["title"],
            subTitle: successMessages.accountDeleted["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show password changed
    AlertProvider.prototype.showPasswordChangedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordChanged["title"],
            subTitle: successMessages.passwordChanged["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show friend request sent
    AlertProvider.prototype.showFriendRequestSent = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestSent["title"],
            subTitle: successMessages.friendRequestSent["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show friend request removed
    AlertProvider.prototype.showFriendRequestRemoved = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestRemoved["title"],
            subTitle: successMessages.friendRequestRemoved["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show group updated.
    AlertProvider.prototype.showGroupUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.groupUpdated["title"],
            subTitle: successMessages.groupUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show error messages depending on the code
    // If you added custom error codes on top, make sure to add a case block for it.
    AlertProvider.prototype.showErrorMessage = function (code) {
        switch (code) {
            // Firebase Error Messages
            case 'auth/account-exists-with-different-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.accountExistsWithDifferentCredential["title"],
                    subTitle: errorMessages.accountExistsWithDifferentCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/invalid-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCredential["title"],
                    subTitle: errorMessages.invalidCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/operation-not-allowed':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.operationNotAllowed["title"],
                    subTitle: errorMessages.operationNotAllowed["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/user-disabled':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userDisabled["title"],
                    subTitle: errorMessages.userDisabled["subTitle"],
                    buttons: ['OK']
                });
                this.alert.present();
                break;
            case 'auth/user-not-found':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userNotFound["title"],
                    subTitle: errorMessages.userNotFound["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/wrong-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.wrongPassword["title"],
                    subTitle: errorMessages.wrongPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/invalid-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidEmail["title"],
                    subTitle: errorMessages.invalidEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/email-already-in-use':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.emailAlreadyInUse["title"],
                    subTitle: errorMessages.emailAlreadyInUse["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/weak-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.weakPassword["title"],
                    subTitle: errorMessages.weakPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/requires-recent-login':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.requiresRecentLogin["title"],
                    subTitle: errorMessages.requiresRecentLogin["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/user-mismatch':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userMismatch["title"],
                    subTitle: errorMessages.userMismatch["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/provider-already-linked':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.providerAlreadyLinked["title"],
                    subTitle: errorMessages.providerAlreadyLinked["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/credential-already-in-use':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.credentialAlreadyInUse["title"],
                    subTitle: errorMessages.credentialAlreadyInUse["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            // Profile Error Messages
            case 'profile/error-change-name':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeName["title"],
                    subTitle: errorMessages.changeName["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-name':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsName["title"],
                    subTitle: errorMessages.invalidCharsName["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/name-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.nameTooShort["title"],
                    subTitle: errorMessages.nameTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-change-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeEmail["title"],
                    subTitle: errorMessages.changeEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidProfileEmail["title"],
                    subTitle: errorMessages.invalidProfileEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-change-photo':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changePhoto["title"],
                    subTitle: errorMessages.changePhoto["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/password-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.passwordTooShort["title"],
                    subTitle: errorMessages.passwordTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsPassword["title"],
                    subTitle: errorMessages.invalidCharsPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/passwords-do-not-match':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.passwordsDoNotMatch["title"],
                    subTitle: errorMessages.passwordsDoNotMatch["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-profile':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateProfile["title"],
                    subTitle: errorMessages.updateProfile["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-same-username':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.usernameExists["title"],
                    subTitle: errorMessages.usernameExists["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            //Image Error Messages
            case 'image/error-image-upload':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.imageUpload["title"],
                    subTitle: errorMessages.imageUpload["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            // Group Error MEssages
            case 'group/error-update-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupUpdate["title"],
                    subTitle: errorMessages.groupUpdate["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'group/error-leave-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupLeave["title"],
                    subTitle: errorMessages.groupLeave["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'group/error-delete-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupDelete["title"],
                    subTitle: errorMessages.groupDelete["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
        }
    };
    AlertProvider.prototype.showToast = function (msg) {
        this.toast.show(msg, '5000', 'bottom').subscribe(function (toast) {
            console.log(toast);
        });
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__logout__["a" /* LogoutProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-post/add-post.module": [
		1047,
		7
	],
	"../pages/comments/comments.module": [
		1048,
		6
	],
	"../pages/facebook/facebook/facebook-comment/facebook-comment.module": [
		1049,
		3
	],
	"../pages/facebook/facebook/facebook.module": [
		1050,
		0
	],
	"../pages/rss/rss-favorite/rss-favorite.module": [
		1051,
		2
	],
	"../pages/rss/rss-home/rss-home.module": [
		1052,
		1
	],
	"../pages/rss/rss.module": [
		1053,
		5
	],
	"../pages/timeline/timeline.module": [
		1054,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 305;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validator__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = /** @class */ (function () {
    // HomePage
    // This is the page where the user is directed after successful login and email is confirmed.
    // A couple of profile management function is available for the user in this page such as:
    // Change name, profile pic, email, and password
    // The user can also opt for the deletion of their account, and finally logout.
    function HomePage(navCtrl, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularDb, alertProvider, dataProvider, camera) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.angularDb = angularDb;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        this.camera = camera;
        this.logoutProvider.setApp(this.app);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Observe the userData on database to be used by our markup html.
        // Whenever the userData on the database is updated, it will automatically reflect on our user variable.
        this.loadingProvider.show();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.hide();
            _this.user = user;
        });
    };
    HomePage.prototype.sendfeedback = function () {
        window.open("mailto:admin@diomedesdigital.com?Subject=SendFeedBack", '_system');
    };
    // Change user's profile photo. Uses imageProvider to process image and upload on Firebase and update userData.
    HomePage.prototype.setPhoto = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    // Change user's profile name, username, and description.
    HomePage.prototype.setName = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Profile Name',
            message: "Please enter a new profile name.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Your Name',
                    value: this.user.name
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        // Check if entered name is different from the current name
                        if (_this.user.name != name) {
                            // Check if name's length is more than five characters
                            if (name.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.pattern.test(name)) {
                                    _this.loadingProvider.show();
                                    var profile = {
                                        displayName: name,
                                        photoURL: _this.user.photoURL
                                    };
                                    // Update profile on Firebase
                                    __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.updateProfile(profile)
                                        .then(function (success) {
                                        // Update userData on Database.
                                        _this.angularDb.object('/accounts/' + _this.user.userId).update({
                                            name: name
                                        }).then(function (success) {
                                            __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileNameValidator.pattern.test(name); //Refresh validator
                                            _this.alertProvider.showProfileUpdatedMessage();
                                        }).catch(function (error) {
                                            _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                        });
                                    })
                                        .catch(function (error) {
                                        // Show error
                                        _this.loadingProvider.hide();
                                        var code = error["code"];
                                        _this.alertProvider.showErrorMessage(code);
                                        if (code == 'auth/requires-recent-login') {
                                            _this.logoutProvider.logout().then(function (res) {
                                                _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                            });
                                        }
                                    });
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                                }
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/name-too-short');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    //Set username
    HomePage.prototype.setUsername = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Username',
            message: "Please enter a new username.",
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Your Username',
                    value: this.user.username
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var username = data["username"];
                        // Check if entered username is different from the current username
                        if (_this.user.username != username) {
                            _this.dataProvider.getUserWithUsername(username).take(1).subscribe(function (userList) {
                                if (userList.length > 0) {
                                    _this.alertProvider.showErrorMessage('profile/error-same-username');
                                }
                                else {
                                    _this.angularDb.object('/accounts/' + _this.user.userId).update({
                                        username: username
                                    }).then(function (success) {
                                        _this.alertProvider.showProfileUpdatedMessage();
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                    });
                                }
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    //Set description
    HomePage.prototype.setDescription = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Description',
            message: "Please enter a new description.",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Your Description',
                    value: this.user.description
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        // Check if entered description is different from the current description
                        if (_this.user.description != description) {
                            _this.angularDb.object('/accounts/' + _this.user.userId).update({
                                description: description
                            }).then(function (success) {
                                _this.alertProvider.showProfileUpdatedMessage();
                            }).catch(function (error) {
                                _this.alertProvider.showErrorMessage('profile/error-update-profile');
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's email. Uses Validator.ts to validate the entered email. After, update the userData on database.
    // When the user changed their email, they have to confirm the new email address.
    HomePage.prototype.setEmail = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Email Address',
            message: "Please enter a new email address.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your Email Address',
                    value: this.user.email
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        //Check if entered email is different from the current email
                        if (_this.user.email != email) {
                            //Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.show();
                                // Update email on Firebase.
                                __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    // Update userData on Database.
                                    _this.angularDb.object('/accounts/' + _this.user.userId).update({
                                        email: email
                                    }).then(function (success) {
                                        __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                        // Check if emailVerification is enabled, if it is go to verificationPage.
                                        if (__WEBPACK_IMPORTED_MODULE_10__login__["a" /* Login */].emailVerification) {
                                            if (!__WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.emailVerified) {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login__["a" /* Login */].verificationPage);
                                            }
                                        }
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-change-email');
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.hide();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.logout().then(function (res) {
                                            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                        });
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Change user's password, this option only shows up for users registered via Firebase.
    // The currentPassword is first checked, after which the new password should be entered twice.
    // Uses password validator from Validator.ts.
    HomePage.prototype.setPassword = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Password',
            message: "Please enter a new password.",
            inputs: [
                {
                    name: 'currentPassword',
                    placeholder: 'Current Password',
                    type: 'password'
                },
                {
                    name: 'password',
                    placeholder: 'New Password',
                    type: 'password'
                },
                {
                    name: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var currentPassword = data["currentPassword"];
                        var credential = __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"].EmailAuthProvider.credential(_this.user.email, currentPassword);
                        // Check if currentPassword entered is correct
                        _this.loadingProvider.show();
                        __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.reauthenticate(credential)
                            .then(function (success) {
                            var password = data["password"];
                            // Check if entered password is not the same as the currentPassword
                            if (password != currentPassword) {
                                if (password.length >= __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.minLength) {
                                    if (__WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password)) {
                                        if (password == data["confirmPassword"]) {
                                            // Update password on Firebase.
                                            __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.updatePassword(password)
                                                .then(function (success) {
                                                _this.loadingProvider.hide();
                                                __WEBPACK_IMPORTED_MODULE_8__validator__["a" /* Validator */].profilePasswordValidator.pattern.test(password);
                                                _this.alertProvider.showPasswordChangedMessage();
                                            })
                                                .catch(function (error) {
                                                _this.loadingProvider.hide();
                                                var code = error["code"];
                                                _this.alertProvider.showErrorMessage(code);
                                                if (code == 'auth/requires-recent-login') {
                                                    _this.logoutProvider.logout().then(function (res) {
                                                        _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                                    });
                                                }
                                            });
                                        }
                                        else {
                                            _this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                                        }
                                    }
                                    else {
                                        _this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                                    }
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/password-too-short');
                                }
                            }
                        })
                            .catch(function (error) {
                            //Show error
                            _this.loadingProvider.hide();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                        });
                    }
                }
            ]
        }).present();
    };
    // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
    // If you added some other info or traces for the account, make sure to account for them when deleting the account.
    HomePage.prototype.deleteAccount = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    handler: function (data) {
                        _this.loadingProvider.show();
                        // Delete Firebase user
                        __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.delete()
                            .then(function (success) {
                            // Delete profilePic of user on Firebase storage
                            _this.imageProvider.deleteUserImageFile(_this.user);
                            // Delete user data on Database
                            _this.angularDb.object('/accounts/' + _this.user.userId).remove().then(function () {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showAccountDeletedMessage();
                                _this.logoutProvider.logout().then(function (res) {
                                    _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                });
                            });
                        })
                            .catch(function (error) {
                            _this.loadingProvider.hide();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                            if (code == 'auth/requires-recent-login') {
                                _this.logoutProvider.logout().then(function (res) {
                                    _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                });
                            }
                        });
                    }
                }
            ]
        }).present();
    };
    // Log the user out.
    HomePage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) {
                        _this.logoutProvider.logout().then(function (res) {
                            _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                        });
                    }
                }
            ]
        }).present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="user">\n    <div class="profile">\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n    </div>\n    <!-- Show icon of logged in provider -->\n    <h4>\n      <span tappable (click)="setName()" class="username">{{user.name}} </span>\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n    </h4>\n    <p tappable (click)="setUsername()" class="username">@{{user.username}}</p>\n    <p tappable (click)="setDescription()" class="description">{{user.description}}</p>\n    <!-- Profile Menu -->\n    <ion-list>\n      <ion-item no-lines tappable (click)="setName()">\n        Set Profile Name\n        <ion-icon name="md-contact" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setUsername()">\n        Set Username\n        <ion-icon name="md-at" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setDescription()">\n        Set Description\n        <ion-icon name="md-clipboard" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setPhoto()">\n        Set Profile Photo\n        <ion-icon name="ios-camera" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setEmail()">\n        Change Email Address\n        <ion-icon name="md-mail-open" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setPassword()" *ngIf="user && user.provider == \'Firebase\'">\n        Change Password\n        <ion-icon name="md-key" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="sendfeedback()"> <!-- href="mailto:nakulkundaliya12@com.com?Subject=SendFeedBack" target="_top"-->\n        Send Feedback\n        <ion-icon name="md-paper" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="deleteAccount()">\n        Delete Account\n        <ion-icon name="md-trash" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="logout()">\n        Logout\n        <ion-icon name="md-log-out" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { GooglePlus } from '@ionic-native/google-plus';

var LoginProvider = /** @class */ (function () {
    function LoginProvider(loadingProvider, alertProvider, zone, 
    //public googlePlus: GooglePlus,
    angularDb) {
        var _this = this;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.zone = zone;
        this.angularDb = angularDb;
        this.facebookProvider = new __WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core__["Facebook"]({
            clientId: __WEBPACK_IMPORTED_MODULE_4__login__["a" /* Login */].facebookAppId,
            appScope: ["email"]
        });
        console.log("Initializing Login Provider");
        this.oauth = new __WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova__["OauthCordova"]();
        // Detect changes on the Firebase user and redirects the view depending on the user's status.
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                console.log("====User===", user);
                // Update userData on Database.
                // this.angularDb.object('/accounts/' + user.uid).update({
                //   isOnline: true
                // }).then((success) => {
                //
                // }).catch((error) => {
                //   //this.alertProvider.showErrorMessage('profile/error-update-profile');
                // });
                if (user["isAnonymous"]) {
                    //Goto Trial Page.
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* Login */].trialPage, { animate: false });
                }
                else {
                    // this.diagnostic.setBluetoothState(true)
                    // this.diagnostic.getBluetoothState()
                    // .then((state) => {
                    //   if (state == this.diagnostic.bluetoothState.POWERED_ON){
                    //     alert('on')
                    //     // do something
                    //   } else {
                    //     alert('off')
                    //     // do something else
                    //   }
                    // }).catch(e => console.error(e));
                    if (__WEBPACK_IMPORTED_MODULE_4__login__["a" /* Login */].emailVerification) {
                        if (user["emailVerified"]) {
                            //Goto Home Page.
                            _this.zone.run(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* Login */].homePage, { animate: false });
                            });
                            //Since we're using a TabsPage an NgZone is required.
                        }
                        else {
                            //Goto Verification Page.
                            // this.navCtrl.setRoot(Login.verificationPage, { animate: false });
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* Login */].homePage, { animate: false });
                        }
                    }
                    else {
                        //Goto Home Page.
                        _this.zone.run(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* Login */].homePage, { animate: false });
                        });
                        //Since we're using a TabsPage an NgZone is required.
                    }
                }
            }
        });
    }
    // Hook this provider up with the navigationController.
    // This is important, so the provider can redirect the app to the views depending
    // on the status of the Firebase user.
    LoginProvider.prototype.setNavController = function (navCtrl) {
        this.navCtrl = navCtrl;
    };
    // Facebook Login, after successful authentication, triggers firebase.auth().onAuthStateChanged((user) on top and
    // redirects the user to its respective views. Make sure to set your FacebookAppId on login.ts
    // and enabled Facebook Login on Firebase app authentication console.
    LoginProvider.prototype.facebookLogin = function () {
        var _this = this;
        this.oauth.logInVia(this.facebookProvider).then(function (success) {
            var credential = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider.credential(success['access_token']);
            _this.loadingProvider.show();
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithCredential(credential)
                .then(function (success) {
                _this.loadingProvider.hide();
            })
                .catch(function (error) {
                _this.loadingProvider.hide();
                var code = error["code"];
                _this.alertProvider.showErrorMessage(code);
            });
        }, function (error) { });
    };
    // Google Login, after successful authentication, triggers firebase.auth().onAuthStateChanged((user) on top and
    // redirects the user to its respective views. Make sure to set your GoogleWebClient Id on login.ts
    // and enabled Google Login on Firebase app authentication console.
    /** googleLogin() {
      this.loadingProvider.show();
      this.googlePlus.login({
        'webClientId': Login.googleClientId
      }).then((success) => {
        console.log("===login with googlePlus==",success)
        let credential = firebase.auth.GoogleAuthProvider.credential(success['idToken'], null);
        firebase.auth().signInWithCredential(credential)
          .then((success) => {
            console.log("=====success",success)
            this.loadingProvider.hide();
          })
          .catch((error) => {
            this.loadingProvider.hide();
            console.log("=====error",error)
            let code = error["code"];
            this.alertProvider.showErrorMessage(code);
          });
      }, error => { this.loadingProvider.hide(); });
    }**/
    // Anonymous Login, after successful authentication, triggers firebase.auth().onAuthStateChanged((user) on top and
    // redirects the user to its respective views. Make sure to enable Anonymous login on Firebase app authentication console.
    LoginProvider.prototype.guestLogin = function () {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInAnonymously()
            .then(function (success) {
            _this.loadingProvider.hide();
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    // Login on Firebase given the email and password.
    LoginProvider.prototype.emailLogin = function (email, password) {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (success) {
            _this.loadingProvider.hide();
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    // Register user on Firebase given the email and password.
    LoginProvider.prototype.register = function (email, password) {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (success) {
            _this.loadingProvider.hide();
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    // Send Password Reset Email to the user.
    LoginProvider.prototype.sendPasswordReset = function (email) {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().sendPasswordResetEmail(email)
            .then(function (success) {
            _this.loadingProvider.hide();
            _this.alertProvider.showPasswordResetMessage(email);
        })
            .catch(function (error) {
            _this.loadingProvider.hide();
            var code = error["code"];
            _this.alertProvider.showErrorMessage(code);
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_message_new_message__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessagesPage = /** @class */ (function () {
    // MessagesPage
    // This is the page where the user can see their current conversations with their friends.
    // The user can also start a new conversation.
    function MessagesPage(navCtrl, navParams, angularDb, loadingProvider, app, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularDb = angularDb;
        this.loadingProvider = loadingProvider;
        this.app = app;
        this.dataProvider = dataProvider;
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Create userData on the database if it doesn't exist yet.
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get info of conversations of current logged in user.
        this.dataProvider.getConversations().subscribe(function (conversations) {
            if (conversations.length > 0) {
                conversations.forEach(function (conversation) {
                    if (conversation.$exists()) {
                        // Get conversation partner info.
                        _this.dataProvider.getUser(conversation.$key).subscribe(function (user) {
                            conversation.friend = user;
                            // Get conversation info.
                            _this.dataProvider.getConversation(conversation.conversationId).subscribe(function (obj) {
                                // Get last message of conversation.
                                var lastMessage = obj.messages[obj.messages.length - 1];
                                conversation.date = lastMessage.date;
                                conversation.sender = lastMessage.sender;
                                // Set unreadMessagesCount
                                conversation.unreadMessagesCount = obj.messages.length - conversation.messagesRead;
                                // Process last message depending on messageType.
                                if (lastMessage.type == 'text') {
                                    if (lastMessage.sender == __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid) {
                                        conversation.message = 'You: ' + lastMessage.message;
                                    }
                                    else {
                                        conversation.message = lastMessage.message;
                                    }
                                }
                                else {
                                    if (lastMessage.sender == __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid) {
                                        conversation.message = 'You sent a photo message.';
                                    }
                                    else {
                                        conversation.message = 'has sent you a photo message.';
                                    }
                                }
                                // Add or update conversation.
                                _this.addOrUpdateConversation(conversation);
                            });
                        });
                    }
                });
                _this.loadingProvider.hide();
            }
            else {
                _this.conversations = [];
                _this.loadingProvider.hide();
            }
        });
        // Update conversations' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.conversations) {
                    that.conversations.forEach(function (conversation) {
                        var date = conversation.date;
                        conversation.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Add or update conversation for real-time sync based on our observer, sort by active date.
    MessagesPage.prototype.addOrUpdateConversation = function (conversation) {
        if (!this.conversations) {
            this.conversations = [conversation];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversations.length; i++) {
                if (this.conversations[i].$key == conversation.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversations[index] = conversation;
            }
            else {
                this.conversations.push(conversation);
            }
            // Sort by last active date.
            this.conversations.sort(function (a, b) {
                var date1 = new Date(a.date);
                var date2 = new Date(b.date);
                if (date1 > date2) {
                    return -1;
                }
                else if (date1 < date2) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    // New conversation.
    MessagesPage.prototype.newMessage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__new_message_new_message__["a" /* NewMessagePage */]);
    };
    // Open chat with friend.
    MessagesPage.prototype.message = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__message_message__["a" /* MessagePage */], { userId: userId });
    };
    // Return class based if conversation has unreadMessages or not.
    MessagesPage.prototype.hasUnreadMessages = function (conversation) {
        if (conversation.unreadMessagesCount > 0) {
            return 'bold';
        }
        else
            return '';
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/messages/messages.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Messages</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="newMessage()"><ion-icon name="ios-create"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No conversations to show -->\n  <div class="empty-list" *ngIf="conversations && conversations.length <= 0">\n    <h1><ion-icon name="md-text"></ion-icon></h1>\n    <p>Uh-oh! You are not part of any conversation yet.</p>\n    <button ion-button icon-left tappable (click)="newMessage()"><ion-icon name="md-add"></ion-icon>New Conversation</button>\n  </div>\n  <!-- Show conversations -->\n  <ion-list class="avatar-list" *ngIf="conversations && conversations.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let conversation of conversations | conversationFilter:searchFriend" no-lines tappable (click)="message(conversation.$key)">\n      <ion-avatar item-left *ngIf="conversation.friend">\n        <ion-icon name="radio-button-on" class="online" [ngClass]="conversation.friend.isOnline?\'isOnline\' : \'isOffline\'"></ion-icon>\n        <img src="{{conversation.friend.img}}">\n      </ion-avatar>\n      <div [ngClass]=hasUnreadMessages(conversation)>\n        <h2 *ngIf="conversation.friend">  {{conversation.friend.name}}</h2>\n        <ion-badge color="danger" *ngIf="conversation.unreadMessagesCount > 0">{{conversation.unreadMessagesCount}}</ion-badge>\n        <p>{{conversation.message}}</p>\n        <span>{{conversation.date | DateFormat}}</span>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/messages/messages.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_people_search_people__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewMessagePage = /** @class */ (function () {
    // NewMessagePage
    // This is the page where the user are asked to select a friend whom they want to start a conversation with.
    function NewMessagePage(navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    NewMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get user's friends.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
            _this.loadingProvider.hide();
        });
    };
    // Back
    NewMessagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Add or update friend for real-time sync.
    NewMessagePage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Search people.
    NewMessagePage.prototype.searchPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_people_search_people__["a" /* SearchPeoplePage */]);
    };
    // Open chat with this user.
    NewMessagePage.prototype.message = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { userId: userId });
    };
    NewMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-message',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/new-message/new-message.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>New Message</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friends yet to start a conversation with -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <h1><ion-icon name="md-contacts"></ion-icon></h1>\n    <p>Uh-oh! You have not added any friends yet.</p>\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n  </div>\n  <!-- Show friends to start a conversation with -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="message(friend.$key)">\n      <ion-avatar item-left>\n        <ion-icon name="radio-button-on" class="online" [ngClass]="friend.isOnline?\'isOnline\' : \'isOffline\'"></ion-icon>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>@{{friend.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/new-message/new-message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading__["a" /* LoadingProvider */]])
    ], NewMessagePage);
    return NewMessagePage;
}());

//# sourceMappingURL=new-message.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validator__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__group_group__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_people_search_people__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var NewGroupPage = /** @class */ (function () {
    // NewGroupPage
    // This is the page where the user can start a new group chat with their friends.
    function NewGroupPage(navCtrl, navParams, imageProvider, dataProvider, formBuilder, alertProvider, alertCtrl, angularDb, app, loadingProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageProvider = imageProvider;
        this.dataProvider = dataProvider;
        this.formBuilder = formBuilder;
        this.alertProvider = alertProvider;
        this.alertCtrl = alertCtrl;
        this.angularDb = angularDb;
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        // Create our groupForm based on Validator.ts
        this.groupForm = formBuilder.group({
            name: __WEBPACK_IMPORTED_MODULE_7__validator__["a" /* Validator */].groupNameValidator,
            description: __WEBPACK_IMPORTED_MODULE_7__validator__["a" /* Validator */].groupDescriptionValidator
        });
    }
    NewGroupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.group = {
            img: ''
        };
        this.searchFriend = '';
        // Get user's friends to add to the group.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (!_this.groupMembers) {
                _this.groupMembers = [account];
            }
            _this.getUserSubscription = _this.dataProvider.getAllUser().subscribe(function (data) {
                console.log(data);
                _this.getUserSubscription.unsubscribe();
                data.forEach(function (member) {
                    _this.addOrUpdateFriend(member);
                    _this.groupMembers.push(member);
                });
            });
            /* if (account.friends) {
              for (var i = 0; i < account.friends.length; i++) {
                this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
                  this.addOrUpdateFriend(friend);
                });
              }
            } else {
              this.friends = [];
            } */
        });
    };
    // Add or update friend for real-time sync.
    NewGroupPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Back
    NewGroupPage.prototype.back = function () {
        if (this.group)
            this.imageProvider.deleteImageFile(this.group.img);
        this.navCtrl.pop();
    };
    // Proceed with group creation.
    NewGroupPage.prototype.done = function () {
        var _this = this;
        this.loadingProvider.show();
        var messages = [];
        // Add system message that group is created.
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid,
            type: 'system',
            message: 'This group has been created.',
            icon: 'md-chatbubbles'
        });
        // Add members of the group.
        var members = [];
        for (var i = 0; i < this.groupMembers.length; i++) {
            members.push(this.groupMembers[i].$key);
        }
        // Add group info and date.
        this.group.dateCreated = new Date().toString();
        this.group.messages = messages;
        this.group.members = members;
        this.group.name = this.groupForm.value["name"];
        this.group.description = this.groupForm.value["description"];
        // Add group to database.
        this.angularDb.list('groups').push(this.group).then(function (success) {
            var groupId = success.key;
            // Add group reference to users.
            _this.angularDb.object('/accounts/' + _this.groupMembers[0].$key + '/groups/' + groupId).update({
                messagesRead: 1
            });
            for (var i = 1; i < _this.groupMembers.length; i++) {
                if (i === _this.groupMembers.length - 1)
                    _this.loadingProvider.hide();
                _this.angularDb.object('/accounts/' + _this.groupMembers[i].$key + '/groups/' + groupId).update({
                    messagesRead: 0
                });
            }
            // Open the group chat of the just created group.
            _this.navCtrl.popToRoot().then(function () {
                //this.loadingProvider.hide();
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__group_group__["a" /* GroupPage */], { groupId: groupId });
            });
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    // Add friend to members of group.
    NewGroupPage.prototype.addToGroup = function (friend) {
        this.groupMembers.push(friend);
    };
    // Remove friend from members of group.
    NewGroupPage.prototype.removeFromGroup = function (friend) {
        var index = -1;
        for (var i = 1; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key == friend.$key) {
                index = i;
            }
        }
        if (index > -1) {
            this.groupMembers.splice(index, 1);
        }
    };
    // Check if friend is already added to the group or not.
    NewGroupPage.prototype.inGroup = function (friend) {
        for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key == friend.$key) {
                return true;
            }
        }
        return false;
    };
    // Toggle to add/remove friend from the group.
    NewGroupPage.prototype.addOrRemoveFromGroup = function (friend) {
        if (this.inGroup(friend)) {
            this.removeFromGroup(friend);
        }
        else {
            this.addToGroup(friend);
        }
    };
    // Set group photo.
    NewGroupPage.prototype.setGroupPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Set Group Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.imageProvider.setGroupPhoto(_this.group, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.imageProvider.setGroupPhoto(_this.group, _this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    // Search people to add as friend.
    NewGroupPage.prototype.searchPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__search_people_search_people__["a" /* SearchPeoplePage */]);
    };
    NewGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-group',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/new-group/new-group.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>New Group</ion-title>\n    <!-- New Group can only be added when a group form is filled up, image is uploaded, and there\'s more than one member. -->\n    <ion-buttons end>\n      <button ion-button tappable (click)="done()" [disabled]="!groupForm.valid || group.img == \'\' || groupMembers.length <= 1">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="body">\n  <div *ngIf="group">\n    <!-- Set Group Image -->\n    <img src="{{group.img}}" *ngIf="group.img != \'\'" tappable (click)="setGroupPhoto()" />\n    <img src="assets/images/set.png" *ngIf="group.img == \'\'" tappable (click)="setGroupPhoto()" />\n    <!-- Group Form -->\n    <div class="form">\n      <form [formGroup]="groupForm">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label>Group *</ion-label>\n            <ion-input type="text" formControlName="name" placeholder="Name of Group"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label>Description *</ion-label>\n            <ion-textarea rows="4" formControlName="description" placeholder="Describe this Group"></ion-textarea>\n          </ion-item>\n          <!-- Members -->\n          <ion-item no-lines *ngIf="groupMembers">\n            <ion-label class="center">Group Members ({{groupMembers.length}})</ion-label>\n          </ion-item>\n          <div *ngIf="groupMembers" class="members">\n            <img *ngFor="let member of groupMembers" src="{{member.img}}" tappable (click)="removeFromGroup(member)"/>\n          </div>\n        </ion-list>\n      </form>\n      <!-- No friends to create a group. -->\n      <div class="empty" *ngIf="friends && friends.length == 0">\n        <p>You have no friends right now to start a group conversation.</p>\n        <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n      </div>\n      <!-- Show friends to add/remove to group. -->\n      <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n        <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n        <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="addOrRemoveFromGroup(friend)">\n          <ion-fab center middle>\n            <button ion-fab mini tappable (click)="addToGroup(friend); $event.stopPropagation();" *ngIf="!inGroup(friend)"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n            <button ion-fab mini tappable (click)="removeFromGroup(friend); $event.stopPropagation();" *ngIf="inGroup(friend)"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n          </ion-fab>\n          <ion-avatar item-left>\n            <img src="{{friend.img}}">\n          </ion-avatar>\n          <h2>{{friend.name}}</h2>\n          <p>@{{friend.username}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/new-group/new-group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]])
    ], NewGroupPage);
    return NewGroupPage;
}());

//# sourceMappingURL=new-group.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_members_add_members__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GroupInfoPage = /** @class */ (function () {
    // GroupInfoPage
    // This is the page where the user can view group information, change group information, add members, and leave/delete group.
    function GroupInfoPage(navCtrl, navParams, dataProvider, loadingProvider, modalCtrl, alertCtrl, alertProvider, angularDb, imageProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
        this.angularDb = angularDb;
        this.imageProvider = imageProvider;
        this.camera = camera;
    }
    GroupInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.groupId = this.navParams.get('groupId');
        // Get group details.
        this.subscription = this.dataProvider.getGroup(this.groupId).subscribe(function (group) {
            if (group.$exists()) {
                _this.loadingProvider.show();
                _this.group = group;
                if (group.members) {
                    group.members.forEach(function (memberId) {
                        _this.dataProvider.getUser(memberId).subscribe(function (member) {
                            _this.addUpdateOrRemoveMember(member);
                        });
                    });
                }
                _this.loadingProvider.hide();
            }
            else {
                // Group is deleted, go back.
                _this.navCtrl.popToRoot();
            }
        });
        // Get user details.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    // Delete subscription.
    // ionViewDidLeave() {
    //   if(this.deleteSubscription)
    //
    // }
    // Check if user exists in the group then add/update user.
    // If the user has already left the group, remove user from the list.
    GroupInfoPage.prototype.addUpdateOrRemoveMember = function (member) {
        if (this.group) {
            if (this.group.members.indexOf(member.$key) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                    this.groupMembers = [member];
                }
                else {
                    var index = -1;
                    for (var i = 0; i < this.groupMembers.length; i++) {
                        if (this.groupMembers[i].$key == member.$key) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.groupMembers[index] = member;
                    }
                    else {
                        this.groupMembers.push(member);
                    }
                }
            }
            else {
                // User already left the group, remove member from list.
                var index = -1;
                for (var i = 0; i < this.groupMembers.length; i++) {
                    if (this.groupMembers[i].$key == member.$key) {
                        index = i;
                    }
                }
                if (index > -1) {
                    this.groupMembers.splice(index, 1);
                }
            }
        }
    };
    // View user info.
    GroupInfoPage.prototype.viewUser = function (userId) {
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != userId)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Back
    GroupInfoPage.prototype.back = function () {
        this.subscription.unsubscribe();
        this.navCtrl.pop();
    };
    // Enlarge group image.
    GroupInfoPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    // Change group name.
    GroupInfoPage.prototype.setName = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Group Name',
            message: "Please enter a new group name.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Group Name',
                    value: this.group.name
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        if (_this.group.name != name) {
                            _this.loadingProvider.show();
                            // Add system message.
                            _this.group.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the group name to: ' + name + '.',
                                icon: 'md-create'
                            });
                            // Update group on database.
                            _this.dataProvider.getGroup(_this.groupId).update({
                                name: name,
                                messages: _this.group.messages
                            }).then(function (success) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showGroupUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showErrorMessage('group/error-update-group');
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    // Change group image, the user is asked if they want to take a photo or choose from gallery.
    GroupInfoPage.prototype.setPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Set Group Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.loadingProvider.show();
                        // Upload photo and set to group photo, afterwards, return the group object as promise.
                        _this.imageProvider.setGroupPhotoPromise(_this.group, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (group) {
                            // Add system message.
                            _this.group.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the group photo.',
                                icon: 'ios-camera'
                            });
                            // Update group image on database.
                            _this.dataProvider.getGroup(_this.groupId).update({
                                img: group.img,
                                messages: _this.group.messages
                            }).then(function (success) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showGroupUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showErrorMessage('group/error-update-group');
                            });
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.loadingProvider.show();
                        // Upload photo and set to group photo, afterwwards, return the group object as promise.
                        _this.imageProvider.setGroupPhotoPromise(_this.group, _this.camera.PictureSourceType.CAMERA).then(function (group) {
                            // Add system message.
                            _this.group.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the group photo.',
                                icon: 'ios-camera'
                            });
                            // Update group image on database.
                            _this.dataProvider.getGroup(_this.groupId).update({
                                img: group.img,
                                messages: _this.group.messages
                            }).then(function (success) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showGroupUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showErrorMessage('group/error-update-group');
                            });
                        });
                    }
                }
            ]
        }).present();
    };
    // Change group description.
    GroupInfoPage.prototype.setDescription = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Group Description',
            message: "Please enter a new group description.",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Group Description',
                    value: this.group.description
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        if (_this.group.description != description) {
                            _this.loadingProvider.show();
                            // Add system message.
                            _this.group.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the group description.',
                                icon: 'md-clipboard'
                            });
                            // Update group on database.
                            _this.dataProvider.getGroup(_this.groupId).update({
                                description: description,
                                messages: _this.group.messages
                            }).then(function (success) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showGroupUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.hide();
                                _this.alertProvider.showErrorMessage('group/error-update-group');
                            });
                        }
                    }
                }
            ]
        }).present();
    };
    // Leave group.
    GroupInfoPage.prototype.leaveGroup = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Leave',
            message: 'Are you sure you want to leave this group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Leave',
                    handler: function (data) {
                        _this.loadingProvider.show();
                        // Remove member from group.
                        _this.group.members.splice(_this.group.members.indexOf(_this.user.$key), 1);
                        // Add system message.
                        _this.group.messages.push({
                            date: new Date().toString(),
                            sender: _this.user.$key,
                            type: 'system',
                            message: _this.user.name + ' has left this group.',
                            icon: 'md-log-out'
                        });
                        // Update group on database.
                        _this.dataProvider.getGroup(_this.groupId).update({
                            members: _this.group.members,
                            messages: _this.group.messages
                        }).then(function (success) {
                            // Remove group from user's group list.
                            _this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid + '/groups/' + _this.groupId).remove().then(function () {
                                // Pop this view because user already has left this group.
                                _this.group = null;
                                setTimeout(function () {
                                    _this.loadingProvider.hide();
                                    _this.navCtrl.popToRoot();
                                }, 300);
                            });
                        }).catch(function (error) {
                            _this.alertProvider.showErrorMessage('group/error-leave-group');
                        });
                    }
                }
            ]
        }).present();
    };
    // Delete group.
    GroupInfoPage.prototype.deleteGroup = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    handler: function (data) {
                        var group = JSON.parse(JSON.stringify(_this.group));
                        // Delete all images of image messages.
                        group.messages.forEach(function (message) {
                            if (message.type == 'image') {
                                console.log("Delete: " + message.url + " of " + group.$key);
                                _this.imageProvider.deleteGroupImageFile(group.$key, message.url);
                            }
                        });
                        // Delete group image.
                        console.log("Delete: " + group.img);
                        _this.imageProvider.deleteImageFile(group.img);
                        _this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid + '/groups/' + group.$key).remove().then(function () {
                            _this.dataProvider.getGroup(group.$key).remove();
                        });
                    }
                }
            ]
        }).present();
    };
    // Add members.
    GroupInfoPage.prototype.addMembers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_members_add_members__["a" /* AddMembersPage */], { groupId: this.groupId });
    };
    GroupInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-group-info',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/group-info/group-info.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Group Info</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- Group Info -->\n  <div *ngIf="group">\n    <div class="profile">\n      <img src="{{group.img}}" tappable (click)="setPhoto()" />\n    </div>\n    <h4>\n      <span tappable (click)="setName()">{{group.name}}</span>\n    </h4>\n    <p class="username">Started {{group.dateCreated | DateFormat}}</p>\n    <p class="description" tappable (click)="setDescription()">{{group.description}}</p>\n    <div class="divider"></div>\n    <!-- Members -->\n    <div *ngIf="groupMembers" class="members">\n      <img *ngFor="let member of groupMembers" src="{{member.img}}"  tappable (click)="viewUser(member.$key)" />\n    </div>\n    <!-- Group Menu -->\n    <ion-list>\n      <ion-item no-lines tappable (click)="setName()">\n        Set Group Name\n        <ion-icon name="md-chatbubbles" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setPhoto()">\n        Set Group Photo\n        <ion-icon name="ios-camera" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setDescription()">\n        Set Group Description\n        <ion-icon name="md-clipboard" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="addMembers()">\n        Add More Members\n        <ion-icon name="md-contacts" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="leaveGroup()" *ngIf="groupMembers && groupMembers.length > 1">\n        Leave Group\n        <ion-icon name="md-log-out" item-right></ion-icon>\n      </ion-item>\n      <!-- When there\'s only one member left, allow deleting of group. -->\n      <ion-item no-lines tappable (click)="deleteGroup()" *ngIf="groupMembers && groupMembers.length <= 1">\n        Delete Group\n        <ion-icon name="md-trash" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/group-info/group-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */]])
    ], GroupInfoPage);
    return GroupInfoPage;
}());

//# sourceMappingURL=group-info.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddMembersPage = /** @class */ (function () {
    // AddMemberPage
    // This is the page where the user can add their friends to an existing group.
    // The user can only add their friends to the group.
    function AddMembersPage(navCtrl, navParams, dataProvider, loadingProvider, angularfire, angularDb, alertCtrl, alertProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.angularfire = angularfire;
        this.angularDb = angularDb;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
    }
    AddMembersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.groupId = this.navParams.get('groupId');
        this.searchFriend = '';
        this.toAdd = [];
        this.loadingProvider.show();
        // Get user information for system message sent to the group when a member was added.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
        // Get group information
        this.dataProvider.getGroup(this.groupId).subscribe(function (group) {
            _this.group = group;
            _this.groupMembers = null;
            // Get group members
            if (group.members) {
                group.members.forEach(function (memberId) {
                    _this.dataProvider.getUser(memberId).subscribe(function (member) {
                        _this.addOrUpdateMember(member);
                    });
                });
                // Get user's friends to add
                _this.dataProvider.getCurrentUser().subscribe(function (account) {
                    if (account.friends) {
                        for (var i = 0; i < account.friends.length; i++) {
                            _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                                // Only friends that are not yet a member of this group can be added.
                                if (!_this.isMember(friend))
                                    _this.addOrUpdateFriend(friend);
                            });
                        }
                        if (!_this.friends) {
                            _this.friends = [];
                        }
                    }
                    else {
                        _this.friends = [];
                    }
                });
            }
            _this.loadingProvider.hide();
        });
    };
    // Check if friend is a member of the group or not.
    AddMembersPage.prototype.isMember = function (friend) {
        if (this.groupMembers) {
            for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].$key == friend.$key) {
                    return true;
                }
            }
        }
        return false;
    };
    // Check if friend is already on the list of members to be added.
    AddMembersPage.prototype.isAdded = function (friend) {
        if (this.toAdd) {
            for (var i = 0; i < this.toAdd.length; i++) {
                if (this.toAdd[i].$key == friend.$key) {
                    return true;
                }
            }
        }
        return false;
    };
    // Toggle for adding/removing friend on the list of members to be added.
    AddMembersPage.prototype.addOrRemove = function (friend) {
        if (this.isAdded(friend)) {
            this.remove(friend);
        }
        else {
            this.add(friend);
        }
    };
    // Add or update friend information for real-time sync.
    AddMembersPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Add or update member information for real-time sync.
    AddMembersPage.prototype.addOrUpdateMember = function (member) {
        if (!this.groupMembers) {
            this.groupMembers = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].$key == member.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupMembers[index] = member;
            }
            else {
                this.groupMembers.push(member);
            }
        }
    };
    // Add friend to the list of to be added.
    AddMembersPage.prototype.add = function (friend) {
        this.toAdd.push(friend);
    };
    // Remove friend from the list of to be added.
    AddMembersPage.prototype.remove = function (friend) {
        this.toAdd.splice(this.toAdd.indexOf(friend), 1);
    };
    // Back
    AddMembersPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Get names of the members to be added to the group.
    AddMembersPage.prototype.getNames = function () {
        var names = '';
        this.toAdd.forEach(function (friend) {
            names += friend.name + ', ';
        });
        return names.substring(0, names.length - 2);
    };
    // Confirm adding of new members, afterwards add the members.
    AddMembersPage.prototype.done = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Add Members',
            message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        // Proceed
                        _this.loadingProvider.show();
                        _this.toAdd.forEach(function (friend) {
                            // Add groupInfo to each friend added to the group.
                            _this.angularDb.object('/accounts/' + friend.$key + '/groups/' + _this.groupId).update({
                                messagesRead: 0
                            });
                            // Add friend as members of the group.
                            _this.group.members.push(friend.$key);
                            // Add system message that the members are added to the group.
                            _this.group.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has added ' + _this.getNames() + ' to the group.',
                                icon: 'md-contacts'
                            });
                        });
                        // Update group data on the database.
                        _this.dataProvider.getGroup(_this.groupId).update({
                            members: _this.group.members,
                            messages: _this.group.messages
                        }).then(function () {
                            // Back.
                            _this.loadingProvider.hide();
                            _this.navCtrl.pop();
                        });
                    }
                }
            ]
        }).present();
    };
    AddMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-members',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/add-members/add-members.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Add Members</ion-title>\n    <!-- Only enable button when user is adding atleast one member to the group -->\n    <ion-buttons end>\n      <button ion-button tappable (click)="done()" [disabled]="toAdd && toAdd.length < 1">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- All friends already in the group. -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <h1><ion-icon name="md-contacts"></ion-icon></h1>\n    <p>Uh-oh! Sorry but your friends are already a member of this group.</p>\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Add/Cancel Add friends to the group. -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="addOrRemove(friend)">\n      <ion-fab middle right>\n        <button ion-fab mini tappable (click)="add(friend); $event.stopPropagation();" *ngIf="!isAdded(friend)"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n        <button ion-fab mini tappable (click)="remove(friend); $event.stopPropagation();" *ngIf="isAdded(friend)"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>@{{friend.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/add-members/add-members.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert__["a" /* AlertProvider */]])
    ], AddMembersPage);
    return AddMembersPage;
}());

//# sourceMappingURL=add-members.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_people_search_people__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_info_user_info__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requests_requests__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FriendsPage = /** @class */ (function () {
    // FriendsPage
    // This is the page where the user can search, view, and initiate a chat with their friends.
    function FriendsPage(navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.show();
        // Get friendRequests to show friendRequests count.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            _this.friendRequests = requests.friendRequests;
        });
        // Get user data on database and get list of friends.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
            _this.loadingProvider.hide();
        });
    };
    // Add or update friend data for real-time sync.
    FriendsPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Proceed to searchPeople page.
    FriendsPage.prototype.searchPeople = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__search_people_search_people__["a" /* SearchPeoplePage */]);
    };
    // Proceed to requests page.
    FriendsPage.prototype.manageRequests = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__requests_requests__["a" /* RequestsPage */]);
    };
    // Proceed to userInfo page.
    FriendsPage.prototype.viewUser = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Proceed to chat page.
    FriendsPage.prototype.message = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__message_message__["a" /* MessagePage */], { userId: userId });
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/friends/friends.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button icon-only tappable (click)="manageRequests()"><ion-icon name="md-filing"></ion-icon><ion-badge color="danger" *ngIf="friendRequests">{{friendRequests.length}}</ion-badge></button>\n    </ion-buttons>\n    <ion-title>Friends</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friends to show -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <h1><ion-icon name="md-contacts"></ion-icon></h1>\n    <p>Uh-oh! You have not added any friends right now.</p>\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n  </div>\n  <!-- Show list of friends -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="viewUser(friend.$key)">\n      <ion-buttons middle right edge>\n        <button ion-button (click)="message(friend.$key); $event.stopPropagation();"><ion-icon name="md-text" class="success"></ion-icon></button>\n      </ion-buttons>\n      <ion-avatar item-left>\n        <ion-icon name="radio-button-on" class="online" [ngClass]="friend.isOnline?\'isOnline\' : \'isOffline\'"></ion-icon>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>@{{friend.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/friends/friends.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_6__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading__["a" /* LoadingProvider */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestsPage = /** @class */ (function () {
    // RequestsPage
    // This is the page where the user can see their friend requests sent and received.
    function RequestsPage(navCtrl, navParams, dataProvider, alertCtrl, angularDb, loadingProvider, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.angularDb = angularDb;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    RequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.show();
        // Get user info
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            _this.account = account;
            // Get friendRequests and requestsSent of the user.
            _this.dataProvider.getRequests(_this.account.userId).subscribe(function (requests) {
                // friendRequests.
                if (requests.friendRequests) {
                    _this.friendRequests = [];
                    requests.friendRequests.forEach(function (userId) {
                        _this.dataProvider.getUser(userId).subscribe(function (sender) {
                            _this.addOrUpdateFriendRequest(sender);
                        });
                    });
                }
                else {
                    _this.friendRequests = [];
                }
                // requestsSent.
                if (requests.requestsSent) {
                    _this.requestsSent = [];
                    requests.requestsSent.forEach(function (userId) {
                        _this.dataProvider.getUser(userId).subscribe(function (receiver) {
                            _this.addOrUpdateRequestSent(receiver);
                        });
                    });
                }
                else {
                    _this.requestsSent = [];
                }
                _this.loadingProvider.hide();
            });
        });
    };
    // Add or update friend request only if not yet friends.
    RequestsPage.prototype.addOrUpdateFriendRequest = function (sender) {
        if (!this.friendRequests) {
            this.friendRequests = [sender];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friendRequests.length; i++) {
                if (this.friendRequests[i].$key == sender.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.isFriends(sender.$key))
                    this.friendRequests[index] = sender;
            }
            else {
                if (!this.isFriends(sender.$key))
                    this.friendRequests.push(sender);
            }
        }
    };
    // Add or update requests sent only if the user is not yet a friend.
    RequestsPage.prototype.addOrUpdateRequestSent = function (receiver) {
        if (!this.requestsSent) {
            this.requestsSent = [receiver];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i].$key == receiver.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.isFriends(receiver.$key))
                    this.requestsSent[index] = receiver;
            }
            else {
                if (!this.isFriends(receiver.$key))
                    this.requestsSent.push(receiver);
            }
        }
    };
    // Back
    RequestsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Accept Friend Request.
    RequestsPage.prototype.acceptFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject Request',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(user.$key);
                    }
                }
            ]
        }).present();
    };
    // Cancel Friend Request sent.
    RequestsPage.prototype.cancelFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
                }
            ]
        }).present();
    };
    // Checks if user is already friends with this user.
    RequestsPage.prototype.isFriends = function (userId) {
        if (this.account.friends) {
            if (this.account.friends.indexOf(userId) == -1) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    // View user.
    RequestsPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    RequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-requests',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/requests/requests.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Friend Requests</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friend requests sent or received. -->\n  <div class="empty-list" *ngIf="(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)">\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n    <p>Uh-oh! There are no pending friend requests right now.</p>\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show friend requests received. -->\n  <ion-list class="avatar-list" *ngIf="friendRequests && friendRequests.length > 0">\n    <ion-item *ngFor="let friendRequest of friendRequests" no-lines tappable (click)="viewUser(friendRequest.$key)">\n      <ion-fab middle right>\n        <button ion-fab mini tappable (click)="acceptFriendRequest(friendRequest); $event.stopPropagation();">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <ion-icon name="radio-button-on" class="online" [ngClass]="friendRequest.isOnline?\'isOnline\' : \'isOffline\'"></ion-icon>\n        <img src="{{friendRequest.img}}">\n      </ion-avatar>\n      <h2>{{friendRequest.name}}</h2>\n      <p>has sent you a friend request.</p>\n    </ion-item>\n  </ion-list>\n  <!-- Show friend requests sent. -->\n  <ion-list class="avatar-list" *ngIf="requestsSent && requestsSent.length > 0">\n    <ion-item *ngFor="let requestSent of requestsSent" no-lines tappable (click)="viewUser(requestSent.$key)">\n      <ion-fab middle right>\n        <button ion-fab mini tappable (click)="cancelFriendRequest(requestSent); $event.stopPropagation();">\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{requestSent.img}}">\n      </ion-avatar>\n      <h2>{{requestSent.name}}</h2>\n      <p>friend request sent.</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/requests/requests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase__["a" /* FirebaseProvider */]])
    ], RequestsPage);
    return RequestsPage;
}());

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getData = function () {
        return this.http.get('./assets/example_data/listing.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ListingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ListingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ListingService);
    return ListingService;
}());

//# sourceMappingURL=listing.service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl, alertCtrl, navParams, app, logoutProvider, loadingProvider, angularDb, alertProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.angularDb = angularDb;
        this.alertProvider = alertProvider;
        // Hook our logout provider with the app.
        this.logoutProvider.setApp(this.app);
    }
    VerificationPage.prototype.ionViewDidLoad = function () {
        // Set our routeGuard variables to false, to not allow rereouting.
        this.emailVerified = false;
        this.isLoggingOut = false;
        // Get user data and send an email verification automatically.
        this.getUserData();
        this.sendEmailVerification();
        // Create the emailVerification checker.
        var that = this;
        that.checkVerified = setInterval(function () {
            __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.reload();
            if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.emailVerified) {
                clearInterval(that.checkVerified);
                that.emailVerified = true;
                that.alertProvider.showEmailVerifiedMessageAndRedirect(that.navCtrl);
            }
        }, 1000);
    };
    VerificationPage.prototype.ionViewCanLeave = function () {
        // routeGuard to prevent from leaving this view unless email is verified, or user is logging out.
        if (this.emailVerified || this.isLoggingOut) {
            return true;
        }
        else {
            return false;
        }
    };
    // Get user data from the logged in Firebase user to show on html markup.
    VerificationPage.prototype.getUserData = function () {
        var user = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser;
        var userId, name, provider, img, email;
        var providerData = user.providerData[0];
        userId = user.uid;
        // Retrieve name from Firebase user
        if (user.displayName || providerData.displayName) {
            name = user.displayName;
            name = providerData.displayName;
        }
        else {
            name = "Firebase User";
        }
        // Retrieve provider from Firebase user
        if (providerData.providerId == 'password') {
            provider = "Firebase";
        }
        else if (providerData.providerId == 'facebook.com') {
            provider = "Facebook";
        }
        else if (providerData.providerId == 'google.com') {
            provider = "Google";
        }
        // Retrieve photoURL from Firebase user
        if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
        }
        else {
            img = "assets/images/profile.png";
        }
        // Retrieve email from Firebase user
        email = user.email;
        // Set to user variable for our markup html
        this.user = {
            userId: userId,
            name: name,
            provider: provider,
            img: img,
            email: email
        };
    };
    // Send an email verification to the user's email.
    VerificationPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.loadingProvider.show();
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.sendEmailVerification()
            .then(function (success) {
            _this.alertProvider.showEmailVerificationSentMessage(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email);
            _this.loadingProvider.hide();
        });
    };
    // Set the user email
    VerificationPage.prototype.setEmail = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Email Address',
            message: "Please enter a new email address.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your Email Address',
                    value: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        // Check if entered email is different from the current email
                        if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email != email) {
                            // Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_6__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.show();
                                // Update email on Firebase
                                __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    __WEBPACK_IMPORTED_MODULE_6__validator__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                    _this.loadingProvider.hide();
                                    // Clear the existing interval because when we call ionViewDidLoad, another interval will be created.
                                    clearInterval(_this.checkVerified);
                                    // Call ionViewDidLoad again to update user on the markup and automatically send verification mail.
                                    _this.ionViewDidLoad();
                                    // Update the user data on the database if it exists.
                                    __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('accounts/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).once('value')
                                        .then(function (account) {
                                        if (account.val()) {
                                            _this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                                                email: email
                                            });
                                        }
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.hide();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.logout();
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                }
            ]
        }).present();
    };
    // Clear the interval, and log the user out.
    VerificationPage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) {
                        // Clear the verification check interval.
                        clearInterval(_this.checkVerified);
                        // Set our routeGuard to true, to enable changing views.
                        _this.isLoggingOut = true;
                        // Log the user out.
                        _this.logoutProvider.logout();
                    }
                }
            ]
        }).present();
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/verification/verification.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Verify Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="user">\n    <div class="profile">\n      <img src="{{user.img}}" tappable (click)="setPhoto()" />\n    </div>\n    <!-- Show icon of logged in provider -->\n    <h4>\n      <span>{{user.name}} </span>\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n    </h4>\n    <div class="divider"></div>\n    <p>An email confirmation has been sent to: <span>{{user.email}}</span>.</p>\n    <!-- Verification Menu -->\n    <ion-list>\n      <ion-item no-lines tappable (click)="sendEmailVerification()">\n        Resend Confirmation Email\n        <ion-icon name="md-contact" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="setEmail()">\n        Change Email Address\n        <ion-icon name="md-mail-open" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="logout()">\n        Logout\n        <ion-icon name="md-log-out" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_core__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_platform_cordova__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_platform_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_platform_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TrialPage = /** @class */ (function () {
    function TrialPage(navCtrl, alertCtrl, navParams, app, logoutProvider, loadingProvider, alertProvider, googlePlus) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.googlePlus = googlePlus;
        this.facebookProvider = new __WEBPACK_IMPORTED_MODULE_6_ng2_cordova_oauth_core__["Facebook"]({
            clientId: __WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].facebookAppId,
            appScope: ["email"]
        });
        // Hook our logout provider with the app.
        this.logoutProvider.setApp(this.app);
        this.oauth = new __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_platform_cordova__["OauthCordova"]();
    }
    // Shows popup to ask user for Facebook credential, afterwhich, upgrade the guest account to full account.
    TrialPage.prototype.linkFacebook = function () {
        var _this = this;
        this.oauth.logInVia(this.facebookProvider).then(function (success) {
            var credential = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"].FacebookAuthProvider.credential(success['access_token']);
            _this.loadingProvider.show();
            __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.link(credential)
                .then(function (success) {
                _this.loadingProvider.hide();
                // Check if emailVerification is enabled, if enabled, check and redirect to verificationPage
                if (__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].emailVerification) {
                    if (__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.emailVerified) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].homePage);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].verificationPage);
                    }
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].homePage);
                }
            })
                .catch(function (error) {
                //Show error
                _this.loadingProvider.hide();
                var code = error["code"];
                _this.alertProvider.showErrorMessage(code);
            });
        }, function (error) { });
    };
    // Shows popup to ask user for Google credential, afterwhich, upgrade the guest account to full account.
    TrialPage.prototype.linkGoogle = function () {
        var _this = this;
        this.loadingProvider.show();
        this.googlePlus.login({
            'webClientId': __WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].googleClientId
        }).then(function (success) {
            var credential = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"].GoogleAuthProvider.credential(success['idToken'], null);
            __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.link(credential)
                .then(function (success) {
                _this.loadingProvider.hide();
                // Check if emailVerification is enabled, if enabled, check and redirect to verificationPage
                if (__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].emailVerification) {
                    if (__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.emailVerified) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].homePage);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].verificationPage);
                    }
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* Login */].homePage);
                }
            })
                .catch(function (error) {
                // Show error
                _this.loadingProvider.hide();
                var code = error["code"];
                _this.alertProvider.showErrorMessage(code);
            });
        }, function (error) { _this.loadingProvider.hide(); });
    };
    // Log the user out.
    TrialPage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) {
                        _this.logoutProvider.logout().then(function (res) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
                        });
                    }
                }
            ]
        }).present();
    };
    TrialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-trial',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/trial/trial.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div class="profile">\n      <img src="assets/images/profile.png" />\n    </div>\n    <h4>\n      <span>Guest User </span>\n      <ion-icon name="md-flame" class="firebase"></ion-icon>\n    </h4>\n    <div class="divider"></div>\n    <p>Logged in as Guest.</p>\n    <!-- Guest Menu -->\n    <ion-list>\n      <ion-item no-lines tappable (click)="linkFacebook()">\n        Link with Facebook\n        <ion-icon name="logo-facebook" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="linkGoogle()">\n        Link with Google\n        <ion-icon name="logo-google" item-right></ion-icon>\n      </ion-item>\n      <ion-item no-lines tappable (click)="logout()">\n        Logout\n        <ion-icon name="md-log-out" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/trial/trial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], TrialPage);
    return TrialPage;
}());

//# sourceMappingURL=trial.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopifyClientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ShopifyClientProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ShopifyClientProvider = /** @class */ (function () {
    function ShopifyClientProvider(events) {
        this.events = events;
        this.shopClient = ShopifyBuy.buildClient({
            accessToken: '04a86f1f61f4d1b2df8ece16b7e9aaa3',
            domain: 'moonshine-stills-com.myshopify.com',
            appId: '6'
        });
        events.subscribe('cart:updated', function () {
            //    this.getCart();
        });
        if (!this.cartID)
            this.createCart();
    }
    ShopifyClientProvider.prototype.getCollections = function () {
        return this.shopClient.fetchAllCollections();
    };
    ShopifyClientProvider.prototype.getProducts = function () {
        return this.shopClient.fetchAllProducts();
    };
    ShopifyClientProvider.prototype.createCart = function () {
        var that = this;
        this.shopClient.createCart().then(function (resp) {
            console.log("new cartID", resp);
            that.cart = resp;
            that.cartID = resp.id;
        })
            .catch(function (err) {
            console.log('Request failed', err);
        });
    };
    ShopifyClientProvider.prototype.addToCart = function (product) {
        var _this = this;
        var that = this;
        this.cart.addVariants({ variant: product, quantity: 1 }).then(function (cart) {
            that.checkoutURL = cart.checkoutUrl;
            that.cart = cart;
            _this.events.publish('cart:updated');
        });
    };
    ShopifyClientProvider.prototype.updateLineItem = function (itemID, qty) {
        var that = this;
        this.cart.updateLineItem(itemID, qty).then(function (cart) {
            that.checkoutURL = cart.checkoutUrl;
            that.cart = cart;
            that.events.publish('cart:updated');
        });
    };
    ShopifyClientProvider.prototype.getCart = function () {
        return this.shopClient.fetchCart(this.getCartID());
    };
    ShopifyClientProvider.prototype.getShopClient = function () {
        return this.shopClient;
    };
    ShopifyClientProvider.prototype.getCartID = function () {
        return this.cartID;
    };
    ShopifyClientProvider.prototype.getCheckoutUrl = function () {
        return this.checkoutURL;
    };
    ShopifyClientProvider.prototype.getProduct = function (id) {
        this.shopClient.fetchProduct(id)
            .then(function (product) {
            console.log(product.selectedVariant);
        })
            .catch(function () {
            console.log('Request failed');
        });
    };
    ShopifyClientProvider.prototype.getCollection = function (id) {
        return this.shopClient.fetchQueryProducts({ collection_id: id });
    };
    ShopifyClientProvider.prototype.removeItemFromCart = function (id) {
        //this.checkoutURL = cart.checkoutUrl;
        return this.cart.removeLineItem(id);
    };
    ShopifyClientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]])
    ], ShopifyClientProvider);
    return ShopifyClientProvider;
}());

//# sourceMappingURL=shopify-client.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_detail_post_detail__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, http, nav) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nav = nav;
        this.url = 'https://moonshine-stills.com/wp-json/wp/v2/posts';
    }
    ArticlePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.page = '1';
        this.loadPosts(this.page).then(function (data) {
            console.log('Posts loaded', data);
            _this.items = data;
        });
    };
    ArticlePage.prototype.loadPosts = function (page) {
        var _this = this;
        if (!page) {
            var page_1 = '1';
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '?page=' + page)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                resolve(data);
            });
        });
    };
    ArticlePage.prototype.itemTapped = function (event, item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__post_detail_post_detail__["a" /* PostDetail */], {
            item: item
        });
    };
    ArticlePage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.loadPosts(this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                infiniteScroll.complete();
                return;
            }
            for (var i = length - 1; i >= 0; i--) {
                _this.items.push(items[i]);
            }
            infiniteScroll.complete();
        });
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'article-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/article/article.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Articles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="article-page">\n<ion-list>\n  <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n  <ion-avatar item-left>\n    <img *ngIf="item.featured_image_urls && item.featured_image_urls.thumbnail" [src]="item.featured_image_urls.thumbnail">\n  </ion-avatar>\n  <h2 [innerHTML]="item.title.rendered"></h2>\n  <p [innerHTML]="item.excerpt.rendered"></p>\n  </button>\n\n</ion-list>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/article/article.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_detail_post_detail__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LawPage = /** @class */ (function () {
    function LawPage(navCtrl, http, nav) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nav = nav;
        this.url = 'https://www.georgialinastills.com/wp-json/wp/v2/posts';
    }
    LawPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.page = '1';
        this.loadPosts(this.page).then(function (data) {
            console.log('Posts loaded', data);
            _this.items = data;
        });
    };
    LawPage.prototype.loadPosts = function (page) {
        var _this = this;
        if (!page) {
            var page_1 = '1';
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '?page=' + page)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                resolve(data);
            });
        });
    };
    LawPage.prototype.itemTapped = function (event, item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__post_detail_post_detail__["a" /* PostDetail */], {
            item: item
        });
    };
    LawPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.loadPosts(this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                infiniteScroll.complete();
                return;
            }
            for (var i = length - 1; i >= 0; i--) {
                _this.items.push(items[i]);
            }
            infiniteScroll.complete();
        });
    };
    LawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'law-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/law/law.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Laws</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="article-page">\n<ion-list>\n  <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n  <ion-avatar item-left>\n    <img *ngIf="item.featured_image_urls && item.featured_image_urls.thumbnail" [src]="item.featured_image_urls.thumbnail">\n  </ion-avatar>\n  <h2 [innerHTML]="item.title.rendered"></h2>\n  <p [innerHTML]="item.excerpt.rendered"></p>\n  </button>\n\n</ion-list>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n <ion-infinite-scroll-content> </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/law/law.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */]])
    ], LawPage);
    return LawPage;
}());

//# sourceMappingURL=law.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorPage = /** @class */ (function () {
    function CalculatorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.total = 0;
    }
    CalculatorPage.prototype.addThemFunction = function () {
        var firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0;
        var secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
        this.total = (firstNumber * secondNumber) / 100;
        console.log("clicked!");
    };
    CalculatorPage.prototype.getInstantTotal = function () {
        var firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0;
        var secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
        return (firstNumber * secondNumber) / 100;
    };
    CalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-calculator',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/calculator/calculator.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      		<ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>\n			Mash Output Calculator\n    	</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n	  <!--<div align="center">\n    <ion-card>\n      <img src="./assets/images/Calculation.jpg"/>\n    </ion-card>\n</div>-->\n	<div align="center"><h3>Fill out the form below</h3></div>&nbsp;&nbsp;\n	<ion-item center class="card-color">\n		<p><strong>ABV - Alcohol By Volume (can be found on mash package)</strong></p>\n		<p><strong>Gallons - Total amount of gallons being used in moonshine still</strong></p>\n	</ion-item>\n\n    <ion-list >\n	    <ion-item class="card-color">\n			<ion-label fixed>ABV</ion-label>\n	        <ion-input type="number" [(ngModel)]="firstNumber"></ion-input>\n	    </ion-item>\n	    <ion-item class="card-color">\n	        <ion-label fixed>Total Gallons</ion-label>\n	        <ion-input type="number" [(ngModel)]="secondNumber"></ion-input>\n	    </ion-item>\n	</ion-list>\n\n	<button ion-button full (click)="addThemFunction()">Calculate</button>\n\n	<ion-card class="card-color">\n	    <ion-card-header>\n	    	Calculator Results:\n	    </ion-card-header>\n	    <ion-card-content>\n	    	<p><strong>Alcohol By Volume is... {{firstNumber}}%</strong> \n	        </p>\n	        <!-- {{firstNumber.valueAsNumber}} -->\n	        <p><strong>Total Gallons is... {{secondNumber}}</strong>\n	        </p>\n	        <!--	        <p>Expected Output is... {{getInstantTotal()}}\n	        </p>-->\n	        <p><strong>Expected Mash Output is... {{total}} Gallons</strong>\n	        </p>\n	    </ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/calculator/calculator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], CalculatorPage);
    return CalculatorPage;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeChannelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_channel_video_youtube_channel_video_component__ = __webpack_require__(615);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeChannelComponent = /** @class */ (function () {
    function YoutubeChannelComponent(youtubeService, navController, loadingController) {
        this.youtubeService = youtubeService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    YoutubeChannelComponent.prototype.ngOnInit = function () {
        this.loader = this.loadingController.create({
            content: "Please wait"
        });
        this.getChannel();
    };
    YoutubeChannelComponent.prototype.getChannel = function () {
        var _this = this;
        this.youtubeService.getChannel()
            .subscribe(function (result) {
            _this.videos = result.items;
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    YoutubeChannelComponent.prototype.loadVideo = function (video) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */], {
            video: video
        });
    };
    YoutubeChannelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-channel/youtube-channel.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-buttons start>\n			<button ion-button menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title >{{\'VIDEOS\' | translate}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-image">\n	<ion-list *ngFor="let video of videos" (click)="loadVideo(video)">\n		<ion-item text-wrap padding class="txt-color" >\n			<ion-thumbnail item-left *ngIf="video.snippet.thumbnails.default.url">\n				<img [src]="video.snippet.thumbnails.default.url">\n			</ion-thumbnail>\n			<h2>{{video.snippet.title}}</h2>\n		</ion-item>\n	</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-channel/youtube-channel.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], YoutubeChannelComponent);
    return YoutubeChannelComponent;
}());

//# sourceMappingURL=youtube-channel.component.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeService = /** @class */ (function () {
    function YoutubeService(http, config) {
        this.http = http;
        this.config = config;
        this.youtubeKey = config.youtubeKey;
        this.apiUrl = config.youtubeApiUrl;
        this.username = config.youtubeUsername;
        this.channelId = config.youtubeChannelId;
        this.results = config.youtubeResults;
        this.videosUrl = this.apiUrl + 'playlistItems?part=snippet&key=' + this.youtubeKey + '&order=date&maxResults=' + this.results;
        this.playlistsUrl = this.apiUrl + 'channels?part=contentDetails&key=' + this.youtubeKey;
        this.channelsUrl = this.apiUrl + 'search?part=snippet&key=' + this.youtubeKey + '&order=date&maxResults=' + this.results + '&channelId=' + this.channelId;
    }
    YoutubeService.prototype.getPlaylistId = function () {
        var url = this.playlistsUrl + '&forUsername=' + this.username;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    YoutubeService.prototype.getVideos = function (playlistId) {
        var url = this.videosUrl + '&playlistId=' + playlistId;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    YoutubeService.prototype.getChannel = function () {
        var url = this.channelsUrl;
        return this.http.get(url)
            .map(function (result) {
            return result.json();
        });
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */]])
    ], YoutubeService);
    return YoutubeService;
}());

//# sourceMappingURL=youtube.service.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeChannelVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeChannelVideoComponent = /** @class */ (function () {
    function YoutubeChannelVideoComponent(navParams, sanitizer, socialSharing) {
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.video = navParams.get('video');
        this.prepareResource();
    }
    YoutubeChannelVideoComponent.prototype.prepareResource = function () {
        var url = 'http://www.youtube.com/embed/' + this.video.id.videoId;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeChannelVideoComponent.prototype.shareVideo = function () {
        var _this = this;
        var subject = this.video.snippet.title;
        var message = this.video.snippet.description;
        message = message.replace(/(<([^>]+)>)/ig, "");
        var url = 'http://www.youtube.com/embed/' + this.video.id.videoId;
        setTimeout(function () { return _this.socialSharing.share(message, subject, '', url); }, 0);
    };
    YoutubeChannelVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-channel-video/youtube-channel-video.html"*/'<ion-header>\n	<ion-navbar>\n		<button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{video.snippet.title}}</ion-title>\n        <ion-buttons end>\n          <button (click)="shareVideo()" ion-button icon-only>\n            <ion-icon name="share"></ion-icon>\n          </button>\n        </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="youtube-video">\n    <iframe *ngIf="video.id.videoId" [src]="videoUrl" frameborder="0" allowfullscreen="true"></iframe>\n        \n    <div padding>\n        <h2>{{video.snippet.title}}</h2>\n        <p>Published by <strong>{{video.snippet.channelTitle}}</strong></p>\n        <p [innerHtml]="video.snippet.description"></p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-channel-video/youtube-channel-video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], YoutubeChannelVideoComponent);
    return YoutubeChannelVideoComponent;
}());

//# sourceMappingURL=youtube-channel-video.component.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RewardPage = /** @class */ (function () {
    function RewardPage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
    }
    RewardPage.prototype.openUrl = function (url) {
        var browser = this.iab.create(url, '_blank', 'location=yes');
    };
    RewardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/reward/reward.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n    </button>\n        <ion-title>Rewards</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-card>\n        <img src="./assets/images/rewards1.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Write an SEO Blog/Article about Moonshine for The Distillery Network\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/write-an-seo-blog-article-about-moonshine-for-the-distillery-network/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <img src="./assets/images/rewards2.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Share A Link of our Store and get a 100 Likes\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/share-a-link-of-our-store-and-get-a-100-likes\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <img src="./assets/images/rewards3.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Download the Moonshine Stills App and Register\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/download-the-moonshine-stills-app/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <img src="./assets/images/rewards4.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Design Artwork or Memes for The Distillery Network\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/design-artwork-or-memes-for-the-distillery-network/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <img src="./assets/images/rewards5.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Earn Points for 10,000 views on a Youtube video about The Distillery Network\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/earn-points-for-10000-views-on-a-youtube-video-about-the-distillery-network/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card> \n    <ion-card>\n        <img src="./assets/images/rewards6.jpeg" />\n        <ion-card-content>\n            <ion-card-title>\n                Perform and Post a Training Video on Distilling with our Still\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/perform-and-post-a-training-video-on-distilling-with-our-still/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card> \n    \n    <ion-card>\n        <img src="./assets/images/rewards7.jpeg" />\n        <ion-card-content>\n            <ion-card-title>\n                Promote our Business Offline\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/promote-our-business-offline/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>  \n    \n    <ion-card>\n        <img src="./assets/images/rewards8.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Refer A Friend for a Purchase\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/refer-a-friend-for-a-purchase/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card> \n \n    <ion-card>\n        <img src="./assets/images/rewards9.png" />\n        <ion-card-content>\n            <ion-card-title>\n                Follow Us on Twitter\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/follow-us-on-twitter/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card> \n    \n    <ion-card>\n        <img src="./assets/images/rewards10.jpeg" />\n        <ion-card-content>\n            <ion-card-title>\n                Like One of Our Pages\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/like-one-of-our-pages/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>    \n    \n    <ion-card>\n        <img src="./assets/images/rewards11.png" />\n        <ion-card-content>\n            <ion-card-title>\n                Give us a Great Review on BBB\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/give-us-a-great-review-on-bbb/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>    \n    <ion-card>\n        <img src="./assets/images/rewards12.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Leave Us A Review on Yelp!\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://tdngame.com/leave-us-a-review-on-yelp/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card> \n    \n    <ion-card>\n        <img src="./assets/images/rewards14.jpg" />\n        <ion-card-content>\n            <ion-card-title>\n                Report false duplicates\n            </ion-card-title>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col text-center>\n                <button ion-button clear small danger (click)="openUrl(\'https://www.tdngame.com/report-false-duplicates/\')">\n                <ion-icon name=\'share\'></ion-icon>\n                Click Here\n                </button>\n        </ion-col>\n        </ion-row>\n    </ion-card>     \n    \n\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/reward/reward.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], RewardPage);
    return RewardPage;
}());

//# sourceMappingURL=reward.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_one_product_one_product__ = __webpack_require__(227);
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
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams, shopifyClientProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopifyClientProvider = shopifyClientProvider;
        this.myInput = '';
        this.realItems = [];
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        var collection = this.navParams.get("collection");
        this.allItems = this.navParams.get("products");
        this.title = collection.attrs.title;
        console.log(this.allItems);
    };
    ProductListPage.prototype.search = function (event) {
        var newArr = [];
        for (var i = 0; i < this.realItems.length; i++) {
            if (this.realItems[i].attrs.title.toLowerCase().includes(this.myInput.toLowerCase()))
                newArr.push(this.realItems[i]);
        }
        this.allItems = newArr;
    };
    ProductListPage.prototype.openProduct = function (item) {
        //console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_one_product_one_product__["a" /* OneProductPage */], { item: item });
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-list',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/product-list/product-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col col-6 col-sm-3 *ngFor=" let item of allItems; let i=index "  >\n            <ion-card style="margin: 0px 0px 0px 0px;   height: 220px;" (click)="openProduct(item)">\n                <div class="frame">\n                    <img class="pimage" src="{{item.attrs.images[0].src}}" />\n                </div>\n                <div style="text-overflow: ellipsis;padding: 4%;font-size: 14px;overflow: hidden;color: #656565; white-space: nowrap;   background: rgba(41, 71, 119, 0.17); ">\n                    {{item.attrs.title}}\n                </div>\n                <div style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding: 4%;font-size: 14px; color: #656565;  ">\n                    <span style="float: left">Price</span><span style="float: right">${{item.variants[0].price}}</span>\n                </div>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/product-list/product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, loadingController, sanitizer, navParams, shopifyClientProvider) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
        this.navParams = navParams;
        this.shopifyClientProvider = shopifyClientProvider;
        this.loadCount = 0;
        this.loader = this.loadingController.create({
            content: "Please wait..."
        });
        this.loader.present();
    }
    CheckoutPage.prototype.ngOnInit = function () {
        var url = this.navParams.get("url"); //this.shopifyClientProvider.getCheckoutUrl();
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    CheckoutPage.prototype.presentLoading = function () {
    };
    CheckoutPage.prototype.onLoad = function () {
        this.loadCount++;
        if (this.loadCount == 2) {
            this.loader.dismiss();
        }
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/checkout/checkout.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Checkout</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <iframe [src]=\'url ? url : null\'  width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen (load)="onLoad()">\n    </iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
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
 * Generated class for the VideoCallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
var VideoCallPage = /** @class */ (function () {
    function VideoCallPage(navCtrl, navParams, events, dataProvider, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dataProvider = dataProvider;
        this.viewCtrl = viewCtrl;
        this.showRemoteVideo = false;
        this.showHangup = false;
        this.webRTCClient = this.dataProvider.getwebRTCClient();
        console.log("===webRTCClient==", this.webRTCClient);
        this.events.subscribe('userMediaSuccess', function (e) {
            console.log("==========userMediaSuccess Added");
            _this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "mini", 'miniElt-' + e.detail.callId, {
                width: "128px",
                height: "128px"
            }, true);
        });
        this.events.subscribe('remoteStreamAdded', function (e) {
            _this.showHangup = true;
            _this.showRemoteVideo = true;
            setTimeout(function () {
                _this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "remote", 'remoteElt-' + e.detail.callId, {
                    width: "100%",
                    height: "100%"
                }, false);
            }, 2000);
            console.log("==========remoteStreamAdded Added");
        });
        this.events.subscribe('hangup', function (e) {
            _this.RemoveMediaElements(e.detail.callId);
        });
        this.events.subscribe('rejectCall', function (e) {
            _this.RemoveMediaElements(e);
        });
    }
    VideoCallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoCallPage');
    };
    VideoCallPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('userMediaSuccess');
        this.events.unsubscribe('remoteStreamAdded');
        this.events.unsubscribe('hangup');
        this.events.unsubscribe('rejectCall');
        this.HangUp();
        var callId = this.dataProvider.getIncomingCallid();
        this.RemoveMediaElements(callId);
    };
    VideoCallPage.prototype.RemoveMediaElements = function (callId) {
        console.log("RemoveMediaElements");
        this.webRTCClient.removeElementFromDiv('mini', 'miniElt-' + callId);
        this.webRTCClient.removeElementFromDiv('remote', 'remoteElt-' + callId);
        this.viewCtrl.dismiss();
    };
    VideoCallPage.prototype.HangUp = function () {
        var callId = this.dataProvider.getIncomingCallid();
        this.webRTCClient.hangUp(callId);
    };
    VideoCallPage.prototype.toggleAudioMute = function () {
        this.webRTCClient.toggleAudioMute();
        this.isAudioMute = this.webRTCClient.isAudioMuted();
        console.log(this.isAudioMute);
    };
    VideoCallPage.prototype.toggleVideoMute = function () {
        this.webRTCClient.toggleVideoMute();
        this.isVideoMute = this.webRTCClient.isVideoMuted();
        console.log(this.isVideoMute);
    };
    VideoCallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-video-call',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/video-call/video-call.html"*/'<!--\n  Generated template for the VideoCallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons start>\n        <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Video Call</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n  <div  *ngIf="showHangup">\n    <ion-fab  bottom center (click)=\'toggleVideoMute()\' class="muteVideo">\n      <button ion-fab color="primary" *ngIf="isVideoMute"><img src="assets/video-off.png"></button> <!--- <ion-icon name="videocam-off"></ion-icon>-->\n      <button ion-fab color="primary" *ngIf="!isVideoMute"><ion-icon name="videocam"></ion-icon></button>\n    </ion-fab>\n    <ion-fab  bottom center  (click)=\'HangUp()\'>\n      <button ion-fab color="danger"><ion-icon name="call"></ion-icon></button>\n    </ion-fab>\n    <ion-fab  bottom center (click)=\'toggleAudioMute()\' class="muteAudio">\n      <button ion-fab color="primary" *ngIf="!isAudioMute"><ion-icon name="mic"></ion-icon></button>\n      <button ion-fab color="primary" *ngIf="isAudioMute"><ion-icon name="mic-off"></ion-icon></button>\n    </ion-fab>\n\n    <div id="remote" class="remoteVideo"  *ngIf="showRemoteVideo"></div>\n  </div>\n  <div id="mini" class="miniVideo"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/video-call/video-call.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], VideoCallPage);
    return VideoCallPage;
}());

//# sourceMappingURL=video-call.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseProvider = /** @class */ (function () {
    // Firebase Provider
    // This is the provider class for most of the Firebase updates in the app.
    function FirebaseProvider(angularDb, loadingProvider, alertProvider, dataProvider) {
        this.angularDb = angularDb;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Firebase Provider");
    }
    // Send friend request to userId.
    FirebaseProvider.prototype.sendFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var requestsSent;
        // Use take(1) so that subscription will only trigger once.
        this.dataProvider.getRequests(loggedInUserId).take(1).subscribe(function (requests) {
            requestsSent = requests.requestsSent;
            if (!requestsSent) {
                requestsSent = [userId];
            }
            else {
                if (requestsSent.indexOf(userId) == -1)
                    requestsSent.push(userId);
            }
            // Add requestsSent information.
            _this.angularDb.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then(function (success) {
                var friendRequests;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    friendRequests = requests.friendRequests;
                    if (!friendRequests) {
                        friendRequests = [loggedInUserId];
                    }
                    else {
                        if (friendRequests.indexOf(userId) == -1)
                            friendRequests.push(loggedInUserId);
                    }
                    // Add friendRequest information.
                    _this.angularDb.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showFriendRequestSent();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // Cancel friend request sent to userId.
    FirebaseProvider.prototype.cancelFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var requestsSent;
        this.dataProvider.getRequests(loggedInUserId).take(1).subscribe(function (requests) {
            requestsSent = requests.requestsSent;
            requestsSent.splice(requestsSent.indexOf(userId), 1);
            // Update requestSent information.
            _this.angularDb.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then(function (success) {
                var friendRequests;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    friendRequests = requests.friendRequests;
                    friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
                    // Update friendRequests information.
                    _this.angularDb.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showFriendRequestRemoved();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // Delete friend request.
    FirebaseProvider.prototype.deleteFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.show();
        var friendRequests;
        this.dataProvider.getRequests(loggedInUserId).take(1).subscribe(function (requests) {
            friendRequests = requests.friendRequests;
            friendRequests.splice(friendRequests.indexOf(userId), 1);
            // Update friendRequests information.
            _this.angularDb.object('/requests/' + loggedInUserId).update({
                friendRequests: friendRequests
            }).then(function (success) {
                var requestsSent;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    requestsSent = requests.requestsSent;
                    requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                    // Update requestsSent information.
                    _this.angularDb.object('/requests/' + userId).update({
                        requestsSent: requestsSent
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
                //TODO ERROR
            });
        });
    };
    // Accept friend request.
    FirebaseProvider.prototype.acceptFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        // Delete friend request.
        this.deleteFriendRequest(userId);
        this.loadingProvider.show();
        this.dataProvider.getUser(loggedInUserId).take(1).subscribe(function (account) {
            var friends = account.friends;
            if (!friends) {
                friends = [userId];
            }
            else {
                friends.push(userId);
            }
            // Add both users as friends.
            _this.dataProvider.getUser(loggedInUserId).update({
                friends: friends
            }).then(function (success) {
                _this.dataProvider.getUser(userId).take(1).subscribe(function (account) {
                    var friends = account.friends;
                    if (!friends) {
                        friends = [loggedInUserId];
                    }
                    else {
                        friends.push(loggedInUserId);
                    }
                    _this.dataProvider.getUser(userId).update({
                        friends: friends
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // TimeLine
    FirebaseProvider.prototype.timeline = function (timelineId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.dataProvider.getUser(loggedInUserId).take(1).subscribe(function (account) {
            var timeline = account.timeline;
            if (!timeline) {
                timeline = [timelineId];
            }
            else {
                timeline.push(timelineId);
            }
            // Add both users as friends.
            _this.dataProvider.getUser(loggedInUserId).update({
                timeline: timeline
            }).then(function (success) {
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // ==== Like postBy
    FirebaseProvider.prototype.likePost = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataProvider.postLike(key).take(1).subscribe(function (likes) {
                // console.log("likes=======",likes)
                var likes = likes;
                if (!likes.length) {
                    likes = [__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid];
                }
                else {
                    likes.push(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid);
                }
                // Add both users as friends.
                _this.dataProvider.postLike(key).update(likes).then(function (success) {
                    // alert('sc')
                    resolve(true);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    console.log("err", error);
                    reject(false);
                });
            });
        });
    };
    // ==== Like postBy
    FirebaseProvider.prototype.delikePost = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataProvider.postLike(key).take(1).subscribe(function (likes) {
                likes.splice(likes.indexOf(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid), 1);
                if (likes.length) {
                    //alert(likes.length)
                    _this.angularDb.object('likes/' + key).remove();
                    _this.dataProvider.postLike(key).update(likes).then(function (success) {
                        // alert('sc')
                        resolve(true);
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                        console.log("err", error);
                        reject(false);
                    });
                }
                else {
                    _this.angularDb.object('likes/' + key).remove();
                }
            });
        });
    };
    // ====== Dislike
    FirebaseProvider.prototype.dislikePost = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataProvider.postdisLike(key).take(1).subscribe(function (dislikes) {
                console.log("dislikes=======", dislikes);
                var dislikes = dislikes;
                if (!dislikes.length) {
                    dislikes = [__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid];
                }
                else {
                    dislikes.push(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid);
                }
                // Add both users as friends.
                _this.dataProvider.postdisLike(key).update(dislikes).then(function (success) {
                    // alert('sc')
                    resolve(true);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    console.log("err", error);
                    reject(false);
                });
            });
        });
    };
    // ===== Deldislike
    FirebaseProvider.prototype.dedislikePost = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataProvider.postdisLike(key).take(1).subscribe(function (dislikes) {
                dislikes.splice(dislikes.indexOf(__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid), 1);
                if (dislikes.length) {
                    //alert(likes.length)
                    _this.angularDb.object('dislikes/' + key).remove();
                    _this.dataProvider.postdisLike(key).update(dislikes).then(function (success) {
                        // alert('sc')
                        resolve(true);
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                        console.log("err", error);
                        reject(false);
                    });
                }
                else {
                    _this.angularDb.object('dislikes/' + key).remove();
                }
            });
        });
    };
    FirebaseProvider.prototype.commentPost = function (key, comment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataProvider.getComments(key).take(1).subscribe(function (comments) {
                // console.log("commnets=======",comments)
                var comments = comments;
                if (!comments) {
                    comments = [comment];
                }
                else {
                    comment.push(comment);
                }
                // Add both users as friends.
                _this.dataProvider.postComments(key).update(comments).then(function (success) {
                    resolve(true);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    console.log("err", error);
                    reject(false);
                });
            });
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_4__data__["a" /* DataProvider */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/about/about-component/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-title>{{\'F.A.Q.\' | translate}}</ion-title>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!--Directions-->\n		<ion-card>\n				<img src="./assets/images/instructions-faq.jpg"/>\n				<ion-card-header>\n					Directions\n				</ion-card-header>\n		</ion-card>	\n		<ion-card>\n			<ion-card-content>\n				<p>1. Open your box</p>\n			</ion-card-content>\n		</ion-card>\n		<ion-card>\n			<ion-card-content>\n				<p>2. Place pot with temperature gage on the table towards left hand side.</p>\n			</ion-card-content>\n		</ion-card>\n\n		<ion-card>\n			<ion-card-content>\n				<p>3. Take the smallest piece of the thumper ith drain plug facing towards you and put the right of the pot.</p>\n			</ion-card-content>\n		</ion-card>\n\n		<ion-card>\n			<ion-card-content>\n				<p>4. Take the worm which is attached to coil and put to the right of thumper</p>\n			</ion-card-content>\n		</ion-card>\n\n		<ion-card>\n			<ion-card-content>\n				<p>5. Take the cap and insert it to the top of the pot, the bottom of the cap connects by spinning the spin fittings to the left side of the thumper: the seam of the top of cap should interlock the seam of the back of the pot.</p>\n			</ion-card-content>\n		</ion-card>	\n		<ion-card>\n			<ion-card-content>\n				<p>6. When connecting the spin fitting if they should leak use thread locking tape\n						or wheat paste. The unit .also comes with an adapter piece which is copper\n						and it connects to the top of right hand side of the thumper and goes to the\n						worm spin fittin~ accordingly</p>\n			</ion-card-content>\n		</ion-card>\n		<ion-card>\n			<ion-card-content>\n				<p>7. CONGRATULATIONS YOU HAVE SUCCESSFULLY ASSEMBLED YOUR MOONSHINE STILL BUT YOU STILL NEED TO KNOW HOW TO USE IT</p>\n			</ion-card-content>\n		</ion-card>\n		\n		<ion-card>\n			<ion-card-content>\n				<p>8. You need a burner or any source of flame, you could also have a submerged electric heating element. Once you have a burner and propane you need some MASH. Mash is what you put in the still to get liquor.</p>\n			</ion-card-content>\n		</ion-card>	\n		<ion-card>\n			<ion-card-content>\n				<p>9. MASH= fermented materials that can range from anywhere between 1% to 35% ABV (Alcohol By Vol\'ume) The higher the ABV the more akohot you wilJ be able to pull out. The goal is to take out as much alcohol out of the Mash with your Moonshine Still. VISIT WWW.MASH.RECIPES FOR SOME EASY RECIPES TO GET STARTED You are going to need a Hydrometer whfch measures the alcohol continent of the Mash, cause it\'s always nice to know what your alcohol is in the beginning and end of the process. There are two different types of hydrometer 1 to use for low proof (of Mash) and 1 for high proof Visit our accessory page to purchase more items from us</p>\n			</ion-card-content>\n		</ion-card>	\n		<ion-card>\n			<ion-card-content>\n				<p>10. Strain Mash for any hard materials and pour into pot. You are going to need to seal cap of the pot with old school Wheat Paste or Black Electrical Tape, make sure to seal the unit good. The Thumper is a double purification unit, it is not a necessity. We want you to run the Thumper dry (meaning do not add anything 1n it) unti\'l you \'know what you are doing. All our units are interchangeable which means you can take the Thumper out and run it directly from the pot to the worm with the coil.</p>\n			</ion-card-content>\n		</ion-card>	\n		<ion-card>\n			<ion-card-content>\n				<p>11. Your worm the one with coil needs a constant flow of cool water (we recommend continuously filling it with ice) you can also get a upgraded thumper an worm kit with any of our units which will give you 2 hoses to run water in and out.</p>\n			</ion-card-content>\n		</ion-card>\n		<ion-card>\n			<ion-card-content>\n				<p>12. Put a flame underneath pot until the unit starts to "work" as soon as the worm is dripping product write the temperature down then add 20 degrees to it "that is your operating range" Always keep still within this range to make sure H20 does not go into your product.</p>\n			</ion-card-content>\n		</ion-card>\n		<ion-card>\n			<ion-card-content>\n				<p>13. Your Thumper will fill up with liquid an eventually stop the distillation process. You will need to disregard the Thumper content\'s or save and re-run in your next batch.</p>\n			</ion-card-content>\n		</ion-card>	\n		<ion-card>\n			<ion-card-content>\n				<p>14. Do not just go and start drinking what comes out of the unit. Please do appropriate research to make sure you disregard the appropriate amount of your distillate before drinking.</p>\n				<p>NOW YOU KNOW HOW TO PROPERLY USE YOUR NEW MOONSHINE STILL VISIT OUR FACEBOOK PAGE AT WWW.FACEBOOK.COM/THEDISTILLERYNETWORK TO STAY CONNECTED WITH US.</p>\n			</ion-card-content>\n		</ion-card>														\n\n\n		\n		\n\n	  <ion-card>\n				<img src="./assets/images/FaqShipping.png"/>\n				<ion-card-header>\n					Shipping Questions\n				</ion-card-header>\n		</ion-card>		\n		\n<!--Shipping Questions-->\n	<ion-card>\n	  <ion-card-content>\n	  	<h1>1. How long before I recieve my order?</h1>\n			<p>a. For regular fast shipping orders, the duration out of shop is 1 to 3 weeks, which means it usually take a maximum of 26 days.</p>\n			<p>b. For W.A.W. (Wait-A-While) orders, the duration for thgeting the order of shop is 1-3 months.</p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	  	<h1>2. How can I check the status of the order?</h1>\n			<p>Shortly after a regular order is made, you should recieve an email with a tracking order that can be used to check on the status of the order with the shipper.</p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	  	<h1>3. What can I do, if I wish to return a product, due to it being defective?</h1>\n			<p>a. Our units come with a lifetime warranty, which states that within the first 30 days of the purchase, the customer is not held liable for extra charges. If the customer is dissatisfied in any way they can their unit for another one of equal value.</p>\n			<p>b. After 30 days, if there is an issue with the unite, please sned it back to our address: 21 W Auburn St, Suite 31, Manchester, NH 03101, USA. We will ship out as long as the customer is willing to pay for shipping both ways. </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n	  <ion-card-content>\n	  	<h1>4. Is the box the still ships in "discreet"</h1>\n			<p>a. Yes!</p>\n	  </ion-card-content>\n	</ion-card> &nbsp;\n\n	<ion-card>\n			<img src="./assets/images/FaqProduct.png"/>  \n			<ion-card-header>\n				Product Questions\n			</ion-card-header>\n	</ion-card>		\n<!--Product Questions-->\n	<ion-card>\n	<ion-card-content>\n	  	<h1>1. How do I seal the Cap?</h1>\n			<p>a. Use black electrical tape (use thread lock tape first, so it doesn\'t stick too bad on the copper.)</p>\n			<p>b. Use old school wheat paste.</p>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-content>\n				<h1>2. How do I heat the unit?</h1>\n				<p>a. You can heat the unit with a heat plate.</p>\n				<p>b. You can use an open flame.</p>\n			</ion-card-content>\n		</ion-card>	\n\n	<ion-card>\n		<ion-card-content>\n				<h1>3. Where is the temp guage?</h1>\n				<p>It should be in the worm on the pot installed.</p>\n			</ion-card-content>\n		</ion-card>	\n\n	<ion-card>\n			<ion-card-content>\n					<h1>4. I have been running the still but it\'s not working...what should I do?</h1>\n					<p>Our units work best if you can crank up the heat until the product starts coming out the worm then you write down the temperature. Afterwards, add 20 degrees to it, which should be your sweet spot. Try to stay in range at all times.</p>\n				</ion-card-content>\n			</ion-card>\n			\n		<ion-card>\n				<ion-card-content>\n						<h1>5. Who can I call if I have a question?</h1>\n						<p>If none of your product related questions couldn\'t be found here, please give us a call at 603-997-6786.</p>\n					</ion-card-content>\n				</ion-card>	\n				\n		<ion-card>\n			<ion-card-content>\n							<h1>6. What is the size of the pot, thumper and worm?</h1>\n							<p>The pot is 9x18; the thumper is 6x6; the worm is 7x9.</p>\n						</ion-card-content>\n					</ion-card>			\n\n					<ion-card>\n						<ion-card-content>\n								<h1>7. What is a thumper?</h1>\n								<p>A thumper is a double purification unit, which helps get a higher proof product.</p>\n							</ion-card-content>\n						</ion-card>\n	\n						<ion-card>\n							<ion-card-content>\n									<h1>8. Is this a complete Unit?</h1>\n									<p>This depends on the purchase you\'ve made. DIY Kits are complete with parts, but require some soldering. Complete Units come with everything included.</p>									\n								</ion-card-content>\n							</ion-card>\n			\n							<ion-card>\n								<ion-card-content>\n										<h1>9. How thick is the copper?</h1>\n										<p>20 oz, 22 ga.</p>									\n									</ion-card-content>\n								</ion-card>					\n								\n								<ion-card>\n									<ion-card-content>\n											<h1>10. Is it easy to put together?</h1>\n											<p>Yes it spins apart and can be stored in a closet.</p>									\n										</ion-card-content>\n									</ion-card>	\n									<ion-card>\n										<ion-card-content>\n												<h1>11. Is it made using lead free materials?</h1>\n												<p>Yes! Our flux is water-soluble and solder is 95/5 lead silver solder. Our copper is 99.9% Paul Revere Copper.</p>									\n											</ion-card-content>\n										</ion-card>	\n										<ion-card>\n											<ion-card-content>\n													<h1>12. Is the unit made in America?</h1>\n													<p>Yes! All our of our products are made in America. Also our technicians are American as well.</p>									\n												</ion-card-content>\n											</ion-card>	\n											<ion-card>\n											<ion-card-content>\n												<h1>14. Does my information get reported to the government?</h1>\n												<p>Nope!</p>									\n											</ion-card-content>\n										</ion-card>\n										<ion-card>										\n										<ion-card-content>\n											<h1>15. Does this unit make essential oil?</h1>\n											<p>Yes, but the customer would have to make small adjustments to utilize it in such a way to extract essential oils.</p>									\n										</ion-card-content>\n									</ion-card>		\n\n											<ion-card>									\n									<ion-card-content>\n										<h1>16. What is the common size or best size for beginners?</h1>\n										<p>The 6 Gallon</p>									\n									</ion-card-content>\n								</ion-card>\n\n											<ion-card>\n								<ion-card-content>\n									<h1>17. What are the laws around using moonshine stills?</h1>\n									<p>You can check out the Moonshine Stills App or buyamoonshinestill.com for such information, if you live in the U.S.</p>									\n								</ion-card-content>\n							</ion-card>	\n							\n							\n							<ion-card>\n							<ion-card-content>\n								<h1>18. What can I use these units for?</h1>\n								<p>Our product videos can be found on our app and website (buyamoonshinestill.com)</p>									\n							</ion-card-content>\n						</ion-card>	\n\n						<ion-card>\n						<ion-card-content>\n							<h1>18. Do you have any recipes I can try out?</h1>\n							<p>We have a lot of recipe resources in our mobile app, you can also check some of our favorites at www.mash.recipes</p>									\n						</ion-card-content>\n					</ion-card>									\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/about/about-component/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_email_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_call_service__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_maps_service__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_data__ = __webpack_require__(1012);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GoogleMapsPage } from '../google-maps/google-maps.page';





var ContactPage = /** @class */ (function () {
    function ContactPage(emailService, callService, mapsService, browserService, nav) {
        this.emailService = emailService;
        this.callService = callService;
        this.mapsService = mapsService;
        this.browserService = browserService;
        this.nav = nav;
    }
    ContactPage.prototype.getDirections = function () {
        this.mapsService.openMapsApp(__WEBPACK_IMPORTED_MODULE_6__contact_data__["a" /* data */].officeLocation);
    };
    ContactPage.prototype.sendEmail = function () {
        this.emailService.sendEmail(__WEBPACK_IMPORTED_MODULE_6__contact_data__["a" /* data */].email);
    };
    ContactPage.prototype.openFacebookPage = function () {
        this.browserService.open(__WEBPACK_IMPORTED_MODULE_6__contact_data__["a" /* data */].facebook);
    };
    ContactPage.prototype.callUs = function () {
        this.callService.call(__WEBPACK_IMPORTED_MODULE_6__contact_data__["a" /* data */].phoneNumber);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/contact/contact.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Contact Us</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="getting-started" align="center">\n	<div class="home-hello">\n		<img src="./assets/images/Contactheader.png"/>\n\n		<div class="hello-title" text-wrap>\n			<h1></h1>\n		</div>\n	</div>\n\n	<!--<ion-row *ngFor="let tilePair of tiles">\n		<ion-col *ngFor="let tile of tilePair">\n			<ion-card class="tile" (click)="navigateTo(tile)">\n				<ion-card-content>\n					<ion-item>\n						<h1>\n							<ion-icon [name]="tile.icon"></ion-icon>\n						</h1>\n						<h2>{{tile.title}}</h2>\n					</ion-item>\n				</ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>-->\n	<ion-row>\n		<div align="center">\n		<h2>Contact us via phone, email, facebook or visit us at our address if you are ever in New Hampshire.</h2>\n		</div>\n	</ion-row>\n\n	<ion-row>\n		<ion-card class="quick-action" (click)="callUs()">\n			<ion-card-content>\n				<ion-icon name="phone-portrait"></ion-icon>\n				<span>Call us</span>\n			</ion-card-content>\n		</ion-card>\n	</ion-row>\n\n	<ion-row>\n		<ion-card class="quick-action" (click)="sendEmail()">\n			<ion-card-content>\n				<ion-icon name="mail"></ion-icon>\n				<span>Send us an Email</span>\n			</ion-card-content>\n		</ion-card>\n	</ion-row>\n\n	<ion-row>\n		<ion-card class="quick-action" (click)="getDirections()">\n			<ion-card-content>\n				<ion-icon name="compass"></ion-icon>\n				<span>Find us / Get directions</span>\n			</ion-card-content>\n		</ion-card>\n	</ion-row>\n\n	<ion-row>\n		<ion-card class="quick-action" (click)="openFacebookPage()">\n			<ion-card-content>\n				<ion-icon name="logo-facebook"></ion-icon>\n				<span>Visit us on Facebook</span>\n			</ion-card-content>\n		</ion-card>\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_email_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_3__services_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_4__services_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_in_app_browser_service__["a" /* InAppBrowserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.page.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallService = /** @class */ (function () {
    function CallService() {
    }
    CallService.prototype.call = function (phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    };
    CallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CallService);
    return CallService;
}());

//# sourceMappingURL=call.service.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsService = /** @class */ (function () {
    function MapsService(platform) {
        this.platform = platform;
    }
    MapsService.prototype.openMapsApp = function (location) {
        var q;
        if (this.platform.is('android')) {
            q = 'geo:' + location;
        }
        else {
            q = 'maps://maps.apple.com/?q=' + location;
        }
        window.location.href = q;
    };
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InAppBrowserService = /** @class */ (function () {
    function InAppBrowserService() {
    }
    InAppBrowserService.prototype.open = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    InAppBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], InAppBrowserService);
    return InAppBrowserService;
}());

//# sourceMappingURL=in-app-browser.service.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersPage = /** @class */ (function () {
    function FollowersPage(menu, navParams) {
        this.menu = menu;
        this.navParams = navParams;
        this.list = [];
        this.list = navParams.get('list');
    }
    FollowersPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on this page
        this.menu.enable(false);
    };
    FollowersPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    FollowersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'followers-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/followers/followers.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Followers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="followers-content">\n  <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar> -->\n  <ion-searchbar placeholder="Search"></ion-searchbar>\n  <ion-list class="followers-list">\n    <ion-item class="list-item" *ngFor="let item of list">\n      <ion-thumbnail item-left>\n        <preload-image [ratio]="{w:1, h:1}" [src]="item.image" alt="item.name" title="item.name"></preload-image>\n      </ion-thumbnail>\n      <h2 class="item-title">{{item.name}}</h2>\n      <p class="item-description" rows="2">{{item.about}}</p>\n      <button class="relation-button" [ngClass]="{following: !item.inverse_relation}" ion-button clear icon-only item-right>\n        <ion-icon *ngIf="item.inverse_relation" name="person-add"></ion-icon>\n        <ion-icon *ngIf="!item.inverse_relation" name="checkmark"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/followers/followers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], FollowersPage);
    return FollowersPage;
}());

//# sourceMappingURL=followers.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__walkthrough_walkthrough__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_model__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_service__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsPage = /** @class */ (function () {
    function SettingsPage(nav, modal, loadingCtrl, profileService) {
        this.nav = nav;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.profileService = profileService;
        // make WalkthroughPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__walkthrough_walkthrough__["a" /* WalkthroughPage */];
        this.profile = new __WEBPACK_IMPORTED_MODULE_7__profile_profile_model__["a" /* ProfileModel */]();
        this.loading = this.loadingCtrl.create();
        this.settingsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            currency: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            weather: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService
            .getData()
            .then(function (data) {
            _this.profile.user = data.user;
            _this.settingsForm.setValue({
                name: data.user.name,
                location: data.user.location,
                description: data.user.about,
                currency: 'dollar',
                weather: 'fahrenheit',
                notifications: true
            });
            _this.loading.dismiss();
        });
    };
    SettingsPage.prototype.logout = function () {
        // navigate to the new page if it is not the current page
        this.nav.setRoot(this.rootPage);
    };
    SettingsPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    SettingsPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'settings-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n    <ion-buttons end [hidden]="!settingsForm.dirty">\n      <button ion-button>\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="settings-content">\n  <div class="user-image-content">\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-40>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="profile.user.image" alt="aca va la img" title="IMAGE!"></preload-image>\n      </ion-col>\n    </ion-row>\n    <h3 class="image-action">Change profile picture</h3>\n  </div>\n\n  <form [formGroup]="settingsForm" class="settings-form">\n    <ion-list class="user-data-content">\n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Location</ion-label>\n        <ion-input type="text" formControlName="location"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Description</ion-label>\n        <ion-textarea formControlName="description" rows="5" placeholder="Your description here..."></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-row class="user-preferences-row">\n      <span class="radio-tags-label">Currency</span>\n      <ion-list class="radio-tags" radio-group formControlName="currency">\n        <ion-item class="radio-tag">\n          <ion-label>&#36;</ion-label>\n          <ion-radio value="dollar"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&euro;</span>\n          </ion-label>\n          <ion-radio value="euro"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&pound;</span>\n          </ion-label>\n          <ion-radio value="pound"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n\n    <ion-row class="user-preferences-row">\n      <span class="radio-tags-label">Weather</span>\n      <ion-list class="radio-tags" radio-group formControlName="weather">\n        <ion-item class="radio-tag">\n          <ion-label>&deg;C</ion-label>\n          <ion-radio value="celsius"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&deg;F</span>\n          </ion-label>\n          <ion-radio value="fahrenheit"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n\n    <ion-list class="switchers-list">\n      <ion-item class="switcher-item">\n        <ion-label>Notifications</ion-label>\n        <ion-toggle formControlName="notifications"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <button class="alt-button" ion-button full (click)="showPrivacyModal()">Privacy policy</button>\n\n  <button class="alt-button" ion-button full (click)="showTermsModal()">Terms of use</button>\n\n  <button class="alt-button logout-button" ion-button full icon-left (click)="logout()">\n    <ion-icon name="log-out"></ion-icon>\n    Log out\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_service__["a" /* ProfileService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(630);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(nav) {
        this.nav = nav;
        this.lastSlide = false;
    }
    WalkthroughPage.prototype.skipIntro = function () {
        // You can skip to main app
        // this.nav.setRoot(TabsNavigationPage);
        // Or you can skip to last slide (login/signup slide)
        this.lastSlide = true;
        this.slider.slideTo(this.slider.length());
    };
    WalkthroughPage.prototype.onSlideChanged = function () {
        // If it's the last slide, then hide the 'Skip' button on the header
        this.lastSlide = this.slider.isEnd();
    };
    WalkthroughPage.prototype.goToLogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WalkthroughPage.prototype.goToSignup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], WalkthroughPage.prototype, "slider", void 0);
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'walkthrough-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/walkthrough/walkthrough.html"*/'<ion-header class="walkthrough-header">\n  <ion-toolbar>\n    <ion-buttons end>\n      <button ion-button class="skip-button" (click)="skipIntro()" [hidden]="lastSlide">Skip</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="walkthrough-content">\n  <ion-slides #slider (ionSlideDidChange)="onSlideChanged()" pager="true">\n    <ion-slide class="slide-1">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/logo_white.png" alt="app logo" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">Welcome!</h2>\n      <p class="intro-text">\n        This is the new <b>Ionic 2</b> Full App template\n      </p>\n    </ion-slide>\n    <ion-slide class="slide-2">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-2-img.png" alt="slide 2 img" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">Wake up!</h2>\n      <p class="intro-text">\n        We should get started.\n      </p>\n      <p class="intro-text">\n        Here we have a beautiful walkthrough\n      </p>\n    </ion-slide>\n    <ion-slide class="slide-3">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-3-img.png" alt="slide 3 img" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">Get ready!</h2>\n      <p class="intro-text">\n        Soon your app will look and feel awesome!\n      </p>\n    </ion-slide>\n    <ion-slide class="slide-4">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-4-img.png" alt="slide 4 img" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">Almost done!</h2>\n      <p class="intro-text">\n        Log in to your account.\n      </p>\n      <p class="intro-text">\n        We are ready to rock!\n      </p>\n      <div class="button-bar">\n        <button ion-button primary (click)="goToLogin()">Log in</button>\n        <button ion-button primary (click)="goToSignup()">Sign up</button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/walkthrough/walkthrough.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImageProvider = /** @class */ (function () {
    function ImageProvider(angularDb, alertProvider, loadingProvider, camera, alertCtrl) {
        this.angularDb = angularDb;
        this.alertProvider = alertProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        console.log("Initializing Image Provider");
        this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.photoMessageOptions = {
            quality: 50,
            targetWidth: 300,
            targetHeight: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true,
        };
        this.groupPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
    }
    // Function to convert dataURI to Blob needed by Firebase
    ImageProvider.prototype.imgURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    // Generate a random filename of length for the image to be uploaded
    ImageProvider.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    ImageProvider.prototype.setProfilePhoto = function (user, sourceType) {
        var _this = this;
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                _this.deleteImageFile(user.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                var profile = {
                    displayName: user.name,
                    photoURL: url
                };
                // Update Firebase User.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.updateProfile(profile)
                    .then(function (success) {
                    // Update User Data on Database.
                    _this.angularDb.object('/accounts/' + user.userId).update({
                        img: url
                    }).then(function (success) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showProfileUpdatedMessage();
                    }).catch(function (error) {
                        _this.loadingProvider.hide();
                        _this.alertProvider.showErrorMessage('profile/error-change-photo');
                    });
                })
                    .catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('profile/error-change-photo');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.hide();
        });
    };
    // Upload and set the group object's image.
    ImageProvider.prototype.setGroupPhoto = function (group, sourceType) {
        var _this = this;
        this.groupPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                _this.deleteImageFile(group.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                group.img = url;
                _this.loadingProvider.hide();
            }).catch(function (error) {
                _this.loadingProvider.hide();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.hide();
        });
    };
    // Set group photo and return the group object as promise.
    ImageProvider.prototype.setGroupPhotoPromise = function (group, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.groupPhotoOptions.sourceType = sourceType;
            _this.loadingProvider.show();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.groupPhotoOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    _this.deleteImageFile(group.img);
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    group.img = url;
                    _this.loadingProvider.hide();
                    resolve(group);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    //Delete the image given the url.
    ImageProvider.prototype.deleteImageFile = function (path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    //Delete the user.img given the user.
    ImageProvider.prototype.deleteUserImageFile = function (user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    // Delete group image file on group storage reference.
    ImageProvider.prototype.deleteGroupImageFile = function (groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    // Upload photo message and return the url as promise.
    ImageProvider.prototype.uploadPhotoMessage = function (conversationId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.show();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + conversationId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    _this.loadingProvider.hide();
                    resolve(url);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // Upload group photo message and return a promise as url.
    ImageProvider.prototype.uploadGroupPhotoMessage = function (groupId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.show();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + groupId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    _this.loadingProvider.hide();
                    resolve(url);
                }).catch(function (error) {
                    _this.loadingProvider.hide();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.hide();
            });
        });
    };
    // ======== set post image ========
    ImageProvider.prototype.setImage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.alert = _this.alertCtrl.create({
                title: 'Send Photo Message',
                message: 'Do you want to take a photo or choose from your photo gallery?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) { }
                    },
                    {
                        text: 'Choose from Gallery',
                        handler: function () {
                            _this.photoMessageOptions.sourceType = _this.camera.PictureSourceType.PHOTOLIBRARY;
                            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                                resolve("data:image/jpeg;base64," + imageData);
                            });
                        }
                    },
                    {
                        text: 'Take Photo',
                        handler: function () {
                            _this.photoMessageOptions.sourceType = _this.camera.PictureSourceType.CAMERA;
                            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                                resolve("data:image/jpeg;base64," + imageData);
                            });
                        }
                    }
                ]
            }).present();
        });
    };
    // ======= upload image in post folder ====
    ImageProvider.prototype.uploadPostImage = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var imgBlob = _this.imgURItoBlob(url);
            var metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/post/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                resolve(url);
            }).catch(function (error) {
                _this.alertProvider.showErrorMessage('image/error-image-upload');
                reject(error);
            });
        });
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3__loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_navigation_tabs_navigation__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(nav, modal) {
        this.nav = nav;
        this.modal = modal;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_5__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.signup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        });
    }
    SignupPage.prototype.doSignup = function () {
        console.log(this.signup.value);
        this.nav.setRoot(this.main_page.component);
    };
    SignupPage.prototype.doFacebookSignup = function () {
        this.nav.setRoot(this.main_page.component);
    };
    /**doGoogleSignup() {
      this.nav.setRoot(this.main_page.component);
    }**/
    SignupPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    SignupPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'signup-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/signup/signup.html"*/'<ion-header class="signup-header auth-header">\n  <ion-navbar>\n    <ion-title>Sign up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="signup-content auth-content">\n  <h2 class="auth-title">Create an account</h2>\n  <form class="signup-form auth-form" [formGroup]="signup" (ngSubmit)="doSignup()">\n    <ion-item>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    <show-hide-container>\n      <ion-item>\n        <ion-input type="password" placeholder="Password" formControlName="password" show-hide-input></ion-input>\n      </ion-item>\n    </show-hide-container>\n    <show-hide-container>\n      <ion-item>\n        <ion-input type="password" placeholder="Confirm password" formControlName="confirm_password" show-hide-input></ion-input>\n      </ion-item>\n    </show-hide-container>\n    <button ion-button block class="auth-action-button signup-button" type="submit" [disabled]="!signup.valid">Sign up</button>\n  </form>\n  <p class="auth-divider">\n    Or\n  </p>\n  <button ion-button block class="facebook-auth-button" (click)="doFacebookSignup()">Sign up with Facebook</button>\n  <button ion-button block class="google-auth-button" (click)="doGoogleSignup()">Sign up with Google</button>\n  <p class="legal-stuff">\n    By creating an account you agree to our <a class="legal-action" (click)="showPrivacyModal()">Privacy policy</a> and <a class="legal-action" (click)="showTermsModal()">Terms of use</a>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_model__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_service__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(nav, notificationsService, loadingCtrl) {
        this.nav = nav;
        this.notificationsService = notificationsService;
        this.loadingCtrl = loadingCtrl;
        this.notifications = new __WEBPACK_IMPORTED_MODULE_3__notifications_model__["a" /* NotificationsModel */]();
        this.loading = this.loadingCtrl.create();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.notificationsService
            .getData()
            .then(function (data) {
            _this.notifications.today = data.today;
            _this.notifications.yesterday = data.yesterday;
            _this.loading.dismiss();
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notifications-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="notifications-content">\n  <ion-item-group>\n    <ion-item-divider class="notifications-divider">Today</ion-item-divider>\n    <ion-item class="notification-item" *ngFor="let notification of notifications.today">\n      <ion-avatar item-left>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n      </ion-avatar>\n      <h2 class="item-title">{{notification.name}}</h2>\n      <p class="item-description">{{notification.message}}</p>\n      <ion-note class="item-time" item-right>{{notification.date}}</ion-note>\n    </ion-item>\n    <ion-item-divider class="notifications-divider">Yesterday</ion-item-divider>\n    <ion-item class="notification-item" *ngFor="let notification of notifications.yesterday">\n      <ion-avatar item-left>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n      </ion-avatar>\n      <h2 class="item-title">{{notification.name}}</h2>\n      <p class="item-description">{{notification.message}}</p>\n      <ion-note class="item-time" item-right>{{notification.date}}</ion-note>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.getData = function () {
        return this.http.get('./assets/example_data/notifications.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotificationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NotificationsService);
    return NotificationsService;
}());

//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserModel */
/* unused harmony export ProfilePostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());

var ProfilePostModel = /** @class */ (function () {
    function ProfilePostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return ProfilePostModel;
}());

var ProfileModel = /** @class */ (function () {
    function ProfileModel() {
        this.user = new UserModel();
        this.following = [];
        this.followers = [];
        this.posts = [];
    }
    return ProfileModel;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.getPosts = function () {
        return this.http.get('./assets/example_data/feed.json')
            .toPromise()
            .then(function (response) { return response.json().feed; })
            .catch(this.handleError);
    };
    FeedService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    FeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FeedService);
    return FeedService;
}());

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormLayoutPage = /** @class */ (function () {
    function FormLayoutPage(nav, alertCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.section = "event";
        this.post_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            servings: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](2, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(10, 1)),
            time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('01:30', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            temperature: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](180)
        });
        this.event_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            from_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('2016-09-18', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            from_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('13:00', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            to_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            to_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        });
        this.card_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            card_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            card_holder: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            cvc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            exp_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            save_card: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        });
    }
    FormLayoutPage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    FormLayoutPage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    FormLayoutPage.prototype.createPost = function () {
        console.log(this.post_form.value);
    };
    FormLayoutPage.prototype.createEvent = function () {
        console.log(this.event_form.value);
    };
    FormLayoutPage.prototype.createCard = function () {
        console.log(this.card_form.value);
    };
    FormLayoutPage.prototype.chooseCategory = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'category-prompt'
        });
        alert.setTitle('Category');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Confirm',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.categories_checkbox_open = false;
                _this.categories_checkbox_result = data;
            }
        });
        alert.present().then(function () {
            _this.categories_checkbox_open = true;
        });
    };
    FormLayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-layout-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/form-layout/form-layout.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Forms Examples</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forms-examples-content">\n  <ion-segment class="forms-examples-segment" [(ngModel)]="section" (ionChange)="onSegmentChanged($event)">\n    <ion-segment-button value="post" (ionSelect)="onSegmentSelected($event)">\n      Post\n    </ion-segment-button>\n    <ion-segment-button value="event" (ionSelect)="onSegmentSelected($event)">\n      Event\n    </ion-segment-button>\n    <ion-segment-button value="card" (ionSelect)="onSegmentSelected($event)">\n      Card\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]="section" class="forms-wrapper">\n    <div *ngSwitchCase="\'post\'" class="post-example-view">\n      <form class="sample-form post-form" [formGroup]="post_form" (ngSubmit)="createPost()">\n        <section class="form-section">\n          <ion-item>\n            <ion-input type="text" placeholder="Title: e.g. Krabby Patty" formControlName="title"></ion-input>\n          </ion-item>\n          <button ion-button block large class="upload-image-button">\n            <ion-icon name="camera"></ion-icon>\n            <h3 class="button-title">upload an image</h3>\n          </button>\n        </section>\n        <ion-item>\n          <ion-textarea rows="7" placeholder="Write a description or something..." formControlName="description"></ion-textarea>\n        </ion-item>\n        <section class="form-section">\n          <button ion-button block icon-right class="choose-category-button" (click)="chooseCategory()">\n            Choose category\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </section>\n        <h2 class="section-title">Serves, times and temps</h2>\n        <ion-item class="counter-item">\n          <span class="counter-label">Servings</span>\n          <counter-input formControlName="servings"></counter-input>\n        </ion-item>\n        <ion-item class="time-item">\n          <ion-label>Time</ion-label>\n          <ion-datetime formControlName="time" displayFormat="h:mm" pickerFormat="h mm"></ion-datetime>\n        </ion-item>\n        <ion-item class="range-item">\n          <ion-label>\n            <h2 class="range-label">Temperature</h2>\n            <h3 class="range-value">{{post_form.controls.temperature.value}} &deg;C</h3>\n          </ion-label>\n          <ion-range formControlName="temperature" min="0" max="220" step="5" snaps="true" pin="false"></ion-range>\n        </ion-item>\n        <section class="form-section">\n          <button ion-button block class="form-action-button create-post-button" type="submit" [disabled]="!post_form.valid">Post!</button>\n        </section>\n      </form>\n    </div>\n    <div *ngSwitchCase="\'event\'" class="event-example-view">\n      <form class="sample-form event-form" [formGroup]="event_form" (ngSubmit)="createEvent()">\n        <section class="form-section">\n          <h2 class="section-title">Add an event</h2>\n          <ion-item>\n            <ion-input type="text" placeholder="Event title" formControlName="title"></ion-input>\n          </ion-item>\n          <ion-item icon-right>\n            <ion-input type="text" placeholder="Location" formControlName="location"></ion-input>\n            <ion-icon name="navigate" item-right></ion-icon>\n          </ion-item>\n          <ion-row no-padding class="multi-input-row">\n            <ion-col no-padding width-60>\n              <ion-item class="multi-input time-item">\n                <ion-label floating>From</ion-label>\n                <ion-datetime formControlName="from_date" displayFormat="DD/MM/YY" pickerFormat="DD-MM-YYYY"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding width-40>\n              <ion-item class="multi-input time-item">\n                <ion-datetime formControlName="from_time" displayFormat="h mm a" pickerFormat="h mm A"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row no-padding class="multi-input-row">\n            <ion-col no-padding width-60>\n              <ion-item class="multi-input time-item">\n                <ion-label floating>To</ion-label>\n                <ion-datetime formControlName="to_date" displayFormat="DD/MM/YY" pickerFormat="DD-MM-YYYY"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding width-40>\n              <ion-item class="multi-input time-item">\n                <ion-datetime formControlName="to_time" displayFormat="h mm a" pickerFormat="h mm A"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </section>\n        <section class="form-section">\n          <button ion-button block class="form-action-button create-event-button" type="submit" [disabled]="!event_form.valid">Done!</button>\n        </section>\n      </form>\n    </div>\n    <div *ngSwitchCase="\'card\'" class="card-example-view">\n      <form class="sample-form card-form" [formGroup]="card_form" (ngSubmit)="createCard()">\n        <section class="form-section">\n          <h2 class="section-title">Credit Card Information</h2>\n          <ion-item>\n            <ion-label floating>Card Number</ion-label>\n            <ion-input type="text" formControlName="card_number"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Card Holder</ion-label>\n            <ion-input type="text" formControlName="card_holder"></ion-input>\n          </ion-item>\n          <ion-row no-padding class="multi-input-row">\n            <ion-col no-padding width-50>\n              <ion-item class="multi-input">\n                <ion-label floating>CVC</ion-label>\n                <ion-input type="text" formControlName="cvc"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding width-50>\n              <ion-item class="multi-input time-item">\n                <ion-label floating>Exp. Date</ion-label>\n                <ion-datetime formControlName="exp_date" displayFormat="MM/YYYY" pickerFormat="MM-YYYY"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </section>\n        <ion-list class="card-preferences">\n          <ion-item class="switcher-item">\n            <ion-label>Save this card</ion-label>\n            <ion-toggle formControlName="save_card"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        <section class="form-section">\n          <button ion-button block class="form-action-button create-card-button" type="submit" [disabled]="!card_form.valid">Confirm</button>\n        </section>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/form-layout/form-layout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FormLayoutPage);
    return FormLayoutPage;
}());

//# sourceMappingURL=form-layout.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FiltersPage = /** @class */ (function () {
    function FiltersPage(nav) {
        this.nav = nav;
        this.rangeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            single: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](25),
            dual: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ lower: 33, upper: 60 })
        });
        this.checkboxForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            person_1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true),
            person_2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            person_3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            person_4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true),
            person_5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false)
        });
        this.radioForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            selected_option: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('apple')
        });
        this.checkboxTagsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            tag_1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            tag_2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            tag_3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true),
            tag_4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true),
            tag_5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            tag_6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            tag_7: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true),
            tag_8: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false)
        });
        this.radioTagsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            selected_option: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('any')
        });
        this.switchersForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true),
            email_notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false)
        });
        this.counterForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            counter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](5, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(7, 1)),
            counter2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](2, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(5, 1))
        });
        this.ratingForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            rate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](2.5),
            rate2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](1.5)
        });
        this.radioColorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            selected_color: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('#fc9961')
        });
    }
    FiltersPage.prototype.rangeChange = function (range) {
        console.log("range, change, ratio: " + range.ratio + ", value: " + range.value);
    };
    FiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'filters-page',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/filters/filters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Filters</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="filters-content">\n  <ion-item-group class="filters-group">\n    <ion-item-divider>Range</ion-item-divider>\n    <form [formGroup]="rangeForm">\n      <ion-list class="range-list">\n        <ion-item class="range-item">\n          <ion-label>\n            <h3 class="range-value">{{rangeForm.controls.dual.value.lower}}</h3>\n            <h2 class="range-label">Quantity</h2>\n            <h3 class="range-value">{{rangeForm.controls.dual.value.upper}}</h3>\n          </ion-label>\n          <ion-range dualKnobs="true" formControlName="dual" (ionChange)="rangeChange($event)" min="21" max="72" step="3" snaps="true" pin="false"></ion-range>\n        </ion-item>\n        <ion-item class="range-item single-range">\n          <ion-label>\n            <h2 class="range-label">Amount</h2>\n            <h3 class="range-value">{{rangeForm.controls.single.value}}</h3>\n          </ion-label>\n          <ion-range formControlName="single" (ionChange)="rangeChange($event)" min="0" max="50" step="1" snaps="true" pin="false"></ion-range>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Multiple items</ion-item-divider>\n    <form [formGroup]="checkboxForm">\n      <ion-list class="checkbox-list">\n        <ion-item class="checkbox-item">\n          <ion-label>Sophia Martin</ion-label>\n          <ion-checkbox formControlName="person_1"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Mattie Abbott</ion-label>\n          <ion-checkbox formControlName="person_2"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Marguerite Alvarez</ion-label>\n          <ion-checkbox formControlName="person_3"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Lewis Padilla</ion-label>\n          <ion-checkbox formControlName="person_4"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Nannie Willis</ion-label>\n          <ion-checkbox formControlName="person_5"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Pick one</ion-item-divider>\n    <form [formGroup]="radioForm">\n      <ion-list class="radio-group" radio-group formControlName="selected_option">\n        <ion-item class="radio-item">\n          <ion-label>Apple</ion-label>\n          <ion-radio item-left value="apple"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-item">\n          <ion-label>Banana</ion-label>\n          <ion-radio item-left value="banana"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-item">\n          <ion-label>Orange</ion-label>\n          <ion-radio item-left value="orange" disabled="true"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-item">\n          <ion-label>Kiwi</ion-label>\n          <ion-radio item-left value="kiwi"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Tags (multiple)</ion-item-divider>\n    <form [formGroup]="checkboxTagsForm">\n      <ion-list class="checkbox-tags">\n        <ion-item class="checkbox-tag">\n          <ion-label>Indonesia</ion-label>\n          <ion-checkbox formControlName="tag_1"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Pitcairn Islands</ion-label>\n          <ion-checkbox formControlName="tag_2"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Malta</ion-label>\n          <ion-checkbox formControlName="tag_3"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Sierra Leone</ion-label>\n          <ion-checkbox formControlName="tag_4"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Dominican Republic</ion-label>\n          <ion-checkbox formControlName="tag_5"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Antigua and Barbuda</ion-label>\n          <ion-checkbox formControlName="tag_6"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Macedonia</ion-label>\n          <ion-checkbox formControlName="tag_7"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Vietnam</ion-label>\n          <ion-checkbox formControlName="tag_8"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>More Tags (multiple)</ion-item-divider>\n    <form [formGroup]="checkboxTagsForm">\n      <ion-list class="checkbox-tags rounded-tags">\n        <ion-item class="checkbox-tag">\n          <ion-label>Indonesia</ion-label>\n          <ion-checkbox formControlName="tag_1"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Pitcairn Islands</ion-label>\n          <ion-checkbox formControlName="tag_2"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Malta</ion-label>\n          <ion-checkbox formControlName="tag_3"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Sierra Leone</ion-label>\n          <ion-checkbox formControlName="tag_4"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Dominican Republic</ion-label>\n          <ion-checkbox formControlName="tag_5"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Antigua and Barbuda</ion-label>\n          <ion-checkbox formControlName="tag_6"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Macedonia</ion-label>\n          <ion-checkbox formControlName="tag_7"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Vietnam</ion-label>\n          <ion-checkbox formControlName="tag_8"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Budget (Radio Tags)</ion-item-divider>\n    <form [formGroup]="radioTagsForm">\n      <ion-list class="radio-tags" radio-group formControlName="selected_option">\n        <ion-item class="radio-tag">\n          <ion-label>Any</ion-label>\n          <ion-radio value="any"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&#36;</span>\n          </ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&#36;&#36;</span>\n          </ion-label>\n          <ion-radio value="2" disabled="true"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&#36;&#36;&#36;</span>\n          </ion-label>\n          <ion-radio value="3"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Switchers</ion-item-divider>\n    <form [formGroup]="switchersForm">\n      <ion-list class="switchers-list">\n        <ion-item class="switcher-item">\n          <ion-label>Notifications</ion-label>\n          <ion-toggle formControlName="notifications"></ion-toggle>\n        </ion-item>\n        <ion-item class="switcher-item">\n          <ion-label>Email notifications</ion-label>\n          <ion-toggle formControlName="email_notifications"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Add & Subtract</ion-item-divider>\n    <form [formGroup]="counterForm">\n      <ion-list class="counter-list">\n        <ion-item class="counter-item">\n          <span class="counter-label">Amount</span>\n          <counter-input formControlName="counter"></counter-input>\n        </ion-item>\n        <ion-item class="counter-item">\n          <span class="counter-label">Bedrooms</span>\n          <span class="counter-value">{{counterForm.controls.counter2.value}}</span>\n          <counter-input formControlName="counter2" basic></counter-input>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Rating</ion-item-divider>\n    <form [formGroup]="ratingForm">\n      <ion-list class="ratings-list">\n        <ion-item class="rating-item">\n          <span class="rating-label">Minimum</span>\n          <rating formControlName="rate" max="5"></rating>\n        </ion-item>\n        <ion-item class="rating-item">\n          <span class="rating-label">Read Only</span>\n          <rating formControlName="rate2" max="3" read-only="true"></rating>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>Color</ion-item-divider>\n    <form [formGroup]="radioColorForm">\n      <ion-list class="radio-tags color-tags" radio-group formControlName="selected_color">\n        <ion-item class="radio-tag" color-radio="#fc6161">\n          <ion-label>Red</ion-label>\n          <ion-radio value="#fc6161"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#fc9961">\n          <ion-radio value="#fc9961"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#fcea61">\n          <ion-label>Yellow</ion-label>\n          <ion-radio value="#fcea61" disabled="true"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#affc61">\n          <ion-label>Green</ion-label>\n          <ion-radio value="#affc61"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#61fcc5">\n          <ion-radio value="#61fcc5"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#fc61ad">\n          <ion-radio value="#fc61ad"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#b561fc">\n          <ion-radio value="#b561fc"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#6182fc">\n          <ion-radio value="#6182fc"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#61d1fc">\n          <ion-radio value="#61d1fc"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/filters/filters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = /** @class */ (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.getData = function () {
        return this.http.get('./assets/example_data/schedule.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ScheduleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ScheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ScheduleService);
    return ScheduleService;
}());

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List1Service = /** @class */ (function () {
    function List1Service(http) {
        this.http = http;
    }
    List1Service.prototype.getData = function () {
        return this.http.get('./assets/example_data/lists.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    List1Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    List1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], List1Service);
    return List1Service;
}());

//# sourceMappingURL=list-1.service.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List2Service = /** @class */ (function () {
    function List2Service(http) {
        this.http = http;
    }
    List2Service.prototype.getData = function () {
        return this.http.get('./assets/example_data/lists.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    List2Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    List2Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], List2Service);
    return List2Service;
}());

//# sourceMappingURL=list-2.service.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideInput = /** @class */ (function () {
    function ShowHideInput(el) {
        this.el = el;
        this.type = 'password';
    }
    ShowHideInput.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])(),
        __metadata("design:type", String)
    ], ShowHideInput.prototype, "type", void 0);
    ShowHideInput = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[show-hide-input]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ShowHideInput);
    return ShowHideInput;
}());

//# sourceMappingURL=show-hide-input.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeVideoComponent = /** @class */ (function () {
    function YoutubeVideoComponent(navParams, sanitizer, socialSharing) {
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.video = navParams.get('video');
        this.prepareResource();
    }
    YoutubeVideoComponent.prototype.prepareResource = function () {
        var url = 'http://www.youtube.com/embed/' + this.video.snippet.resourceId.videoId;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeVideoComponent.prototype.shareVideo = function () {
        var _this = this;
        var subject = this.video.snippet.title;
        var message = this.video.snippet.description;
        message = message.replace(/(<([^>]+)>)/ig, "");
        var url = 'http://www.youtube.com/embed/' + this.video.snippet.resourceId.videoId;
        setTimeout(function () { return _this.socialSharing.share(message, subject, '', url); }, 250);
    };
    YoutubeVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-video/youtube-video.html"*/'<ion-header>\n	<ion-navbar>\n		<button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{video.snippet.title}}</ion-title>\n        <ion-buttons end>\n          <button (tap)="shareVideo()" ion-button icon-only>\n            <ion-icon name="share"></ion-icon>\n          </button>\n        </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="youtube-video">\n    <iframe *ngIf="video.snippet.resourceId.videoId" [src]="videoUrl" frameborder="0" allowfullscreen="true"></iframe>\n        \n    <div padding>\n        <h2>{{video.snippet.title}}</h2>\n        <p>Published by <strong>{{video.snippet.channelTitle}}</strong></p>\n        <p [innerHtml]="video.snippet.description"></p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/youtube/youtube-video/youtube-video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], YoutubeVideoComponent);
    return YoutubeVideoComponent;
}());

//# sourceMappingURL=youtube-video.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserInfoPage = /** @class */ (function () {
    // UserInfoPage
    // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
    function UserInfoPage(navCtrl, navParams, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
    }
    UserInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = this.navParams.get('userId');
        this.loadingProvider.show();
        // Get user info.
        this.dataProvider.getUser(this.userId).subscribe(function (user) {
            _this.user = user;
            _this.loadingProvider.hide();
        });
        // Get friends of current logged in user.
        this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe(function (user) {
            _this.friends = user.friends;
        });
        // Get requests of current logged in user.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            _this.friendRequests = requests.friendRequests;
            _this.requestsSent = requests.requestsSent;
        });
    };
    // Back
    UserInfoPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Enlarge user's profile image.
    UserInfoPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    // Accept friend request.
    UserInfoPage.prototype.acceptFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Accept',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Deny friend request.
    UserInfoPage.prototype.rejectFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Reject Friend Request',
            message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Cancel friend request sent.
    UserInfoPage.prototype.cancelFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Send friend request.
    UserInfoPage.prototype.sendFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(_this.userId);
                    }
                }
            ]
        }).present();
    };
    // Open chat with this user.
    UserInfoPage.prototype.sendMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */], { userId: this.userId });
    };
    // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
    UserInfoPage.prototype.canAdd = function () {
        if (this.friendRequests) {
            if (this.friendRequests.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.requestsSent) {
            if (this.requestsSent.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.friends) {
            if (this.friends.indexOf(this.userId) > -1) {
                return false;
            }
        }
        return true;
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-info',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/user-info/user-info.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title *ngIf="user">{{user.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- User Info -->\n  <div *ngIf="user">\n    <div class="profile">\n      <img src="{{user.img}}" tappable (click)="enlargeImage(user.img)" />\n    </div>\n    <h4>\n      <span>{{user.name}} </span>\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n    </h4>\n    <p class="username">@{{user.username}}</p>\n    <p class="description">{{user.description}}</p>\n    <div class="divider"></div>\n    <div class="center">\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n      <div *ngIf="friendRequests && friendRequests.indexOf(user.$key) > -1">\n        <p class="info">Sent you a friend request.</p>\n        <button ion-button icon-only class="danger" tappable (click)="rejectFriendRequest()"><ion-icon name="md-close"></ion-icon></button>\n        <button ion-button icon-only class="success" tappable (click)="acceptFriendRequest()"><ion-icon name="md-checkmark"></ion-icon></button>\n      </div>\n      <div *ngIf="requestsSent && requestsSent.indexOf(user.$key) > -1">\n        <p class="info">Friend request sent.</p>\n        <button ion-button class="dark" tappable (click)="cancelFriendRequest()">Cancel Friend Request</button>\n      </div>\n      <div *ngIf="canAdd()">\n        <p class="info">You are not yet friends.</p>\n        <button ion-button class="primary" tappable (click)="sendFriendRequest()">Send Friend Request</button>\n      </div>\n      <div *ngIf="friends && friends.indexOf(user.$key) > -1">\n        <p class="info">You are already friends.</p>\n        <button ion-button class="primary" tappable (click)="sendMessage()">Send Message</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/user-info/user-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase__["a" /* FirebaseProvider */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feeds_feeds_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedCategoryComponent = /** @class */ (function () {
    function FeedCategoryComponent(feedService, navParams, navController, loadingController) {
        this.feedService = feedService;
        this.navParams = navParams;
        this.navController = navController;
        this.loadingController = loadingController;
        this.category = navParams.get('category');
        if (!this.category) {
            this.getCategory();
        }
    }
    FeedCategoryComponent.prototype.getCategory = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.feedService.getCategory()
            .subscribe(function (result) {
            _this.category = result;
            loader.dismiss();
        });
    };
    FeedCategoryComponent.prototype.loadFeeds = function (feedUrl) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__feeds_feeds_component__["a" /* FeedsComponent */], {
            feedUrl: feedUrl
        });
    };
    FeedCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feed-category/feed-category.html"*/'<ion-header>\n	<ion-navbar>\n		<button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{category.title}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<section padding>\n		<h2>{{category.title}}</h2>\n		<p>{{category.description}}</p>\n	</section>\n	<ion-list>\n		<ion-item *ngFor="let item of category.items" (click)="loadFeeds(item.url)">\n			<h2>{{item.title}}</h2>\n			<p>{{item.description}}</p>\n			<button ion-button item-right outline>More</button>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feed-category/feed-category.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], FeedCategoryComponent);
    return FeedCategoryComponent;
}());

//# sourceMappingURL=feed-category.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedsComponent = /** @class */ (function () {
    function FeedsComponent(feedService, navParams, navController, loadingController) {
        this.feedService = feedService;
        this.navParams = navParams;
        this.navController = navController;
        this.loadingController = loadingController;
        this.feedUrl = navParams.get('feedUrl');
    }
    FeedsComponent.prototype.ngOnInit = function () {
        this.getFeeds();
    };
    FeedsComponent.prototype.getFeeds = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.feedService.getFeeds(this.feedUrl)
            .subscribe(function (result) {
            _this.title = result.query.results.rss.channel.title;
            _this.description = result.query.results.rss.channel.description;
            _this.link = result.query.results.rss.channel.link;
            if (result.query.results.rss.channel.image) {
                _this.image = result.query.results.rss.channel.image.url;
            }
            _this.feeds = result.query.results.rss.channel.item;
            loader.dismiss();
        });
    };
    FeedsComponent.prototype.loadFeed = function (feed) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */], {
            feed: feed
        });
    };
    FeedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feeds/feeds.html"*/'<ion-header>\n	<ion-navbar>\n		<button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{title}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<section padding>\n		<h2>{{title}}</h2>\n		<p>{{description}}</p>\n		<div class="list card">\n  <div align="center">\n    <ion-card>\n      <img src="./assets/images/thanks.png"/>\n    </ion-card>\n  </div>\n		</div>\n	</section>\n	<ion-list>\n		<ion-item *ngFor="let feed of feeds" (click)="loadFeed(feed)">\n			<h2>{{feed.title}}</h2>\n			<p>{{feed.summary}}</p>\n			<button ion-button item-right outline>More</button>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feeds/feeds.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
    ], FeedsComponent);
    return FeedsComponent;
}());

//# sourceMappingURL=feeds.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedComponent = /** @class */ (function () {
    function FeedComponent(navParams, iab, socialSharing) {
        this.navParams = navParams;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.feed = navParams.get('feed');
    }
    FeedComponent.prototype.previewFeed = function () {
        var browser = this.iab.create(this.feed.link, '_blank');
        browser.show();
    };
    FeedComponent.prototype.shareFeed = function () {
        var subject = this.feed.title;
        var message = this.feed.description;
        message = message.replace(/(<([^>]+)>)/ig, "");
        var url = this.feed.link;
        this.socialSharing.share(message, subject, '', url);
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feed/feed.html"*/'<ion-header>\n	<ion-navbar>\n		<button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{feed.title}}</ion-title>\n		<ion-buttons end>\n	      <button (click)="shareFeed()" ion-button icon-only>\n	        <ion-icon name="share"></ion-icon>\n	      </button>\n	    </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<section padding>\n		<h1 [innerHtml]=feed.title></h1>\n		<div>{{feed.pubDate | date}}</div>\n	</section>\n\n    <video id="video" [src]="feed.enclosure.url" controls autoplay *ngIf="feed.enclosure && feed.enclosure.type === \'video/mp4\' "></video>\n    <audio id="audio" [src]="feed.enclosure.url" controls autoplay *ngIf="feed.enclosure && feed.enclosure.type === \'audio/mpeg\' "></audio>\n	<img [src]="feed.enclosure.url" *ngIf="feed.enclosure && feed.enclosure.type === \'image/jpeg\' " />\n\n	<section padding [innerHtml]="feed.description"></section>\n\n	<button ion-button full (click)=previewFeed()>View</button>\n</ion-content>'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/feeds/feed/feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], FeedComponent);
    return FeedComponent;
}());

//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FriendPipe = /** @class */ (function () {
    function FriendPipe() {
    }
    // FriendPipe
    // Filter friend by name or username.
    FriendPipe.prototype.transform = function (friends, search) {
        if (!friends) {
            return;
        }
        else if (!search) {
            return friends;
        }
        else {
            var term_1 = search.toLowerCase();
            return friends.filter(function (friend) { return friend.name.toLowerCase().indexOf(term_1) > -1 || friend.username.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    FriendPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'friendFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], FriendPipe);
    return FriendPipe;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    // SearchPipe
    // Filter user search results for name or username excluding the excludedIds.
    SearchPipe.prototype.transform = function (accounts, data) {
        var excludedIds = data[0];
        var term = data[1];
        if (!accounts) {
            return;
        }
        else if (!excludedIds) {
            return accounts;
        }
        else if (excludedIds && !term) {
            return accounts.filter(function (account) { return excludedIds.indexOf(account.userId) == -1; });
        }
        else {
            term = term.toLowerCase();
            return accounts.filter(function (account) { return excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1); });
        }
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'searchFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConversationPipe = /** @class */ (function () {
    function ConversationPipe() {
    }
    // ConversationPipe
    // Filter conversation based on friend's name or username.
    ConversationPipe.prototype.transform = function (conversations, search) {
        if (!conversations) {
            return;
        }
        else if (!search) {
            return conversations;
        }
        else {
            var term_1 = search.toLowerCase();
            return conversations.filter(function (conversation) { return conversation.friend.name.toLowerCase().indexOf(term_1) > -1 || conversation.friend.username.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    ConversationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'conversationFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ConversationPipe);
    return ConversationPipe;
}());

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    // DateFormatPipe
    // Show moment.js dateFormat for time elapsed.
    DateFormatPipe.prototype.transform = function (date, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(date)).fromNow();
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'DateFormat'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], DateFormatPipe);
    return DateFormatPipe;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupPipe = /** @class */ (function () {
    function GroupPipe() {
    }
    // GroupPipe
    // Filter group by name
    GroupPipe.prototype.transform = function (groups, search) {
        if (!groups) {
            return;
        }
        else if (!search) {
            return groups;
        }
        else {
            var term_1 = search.toLowerCase();
            return groups.filter(function (group) { return group.name.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    GroupPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'groupFilter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], GroupPipe);
    return GroupPipe;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TimeAgoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TimeAgoPipe.prototype.transform = function (time) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //return value.toLowerCase();
        var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")), diff = (((new Date()).getTime() - date.getTime()) / 1000), day_diff = Math.floor(diff / 86400);
        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
            return;
        return day_diff == 0 && (diff < 60 && "just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
            day_diff == 1 && "Yesterday" ||
            day_diff < 7 && day_diff + " days ago" ||
            day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
    };
    TimeAgoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'timeAgo',
        })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());

//# sourceMappingURL=time-ago.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoadingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    LoadingService.prototype.dismiss = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(667);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_followers_followers__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forms_forms__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_navigation_tabs_navigation__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_walkthrough_walkthrough__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_list_1_list_1__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_2_list_2__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_grid_grid__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_form_layout_form_layout__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filters_filters__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_of_service_terms_of_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_privacy_policy_privacy_policy__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_preload_image_preload_image__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_background_image_background_image__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_show_hide_password_show_hide_container__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_show_hide_password_show_hide_input__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_color_radio_color_radio__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_counter_input_counter_input__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_rating_rating__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_feed_feed_service__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_listing_listing_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_profile_profile_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_notifications_notifications_service__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_list_1_list_1_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_list_2_list_2_service__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_schedule_schedule_service__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_common_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_post_detail_post_detail__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_article_article__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_law_law__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_calculator_calculator__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_reward_reward__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_youtube_youtube_module__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_home1_home__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_checkout_checkout__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_tabs1_tabs__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_cart_cart__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_collections_collections__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_one_product_one_product__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_product_list_product_list__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_shopify_client_shopify_client__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pipes_pipes_safe_safe__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_cart_cart__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ionic2_super_tabs__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_keyboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_toast__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_google_maps__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_geolocation__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_home_home__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_verification_verification__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_trial_trial__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_messages_messages__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_groups_groups__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_friends_friends__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_search_people_search_people__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_requests_requests__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_user_info_user_info__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_new_message_new_message__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_message_message__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_new_group_new_group__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_group_group__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_add_post_add_post__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_timeline_timeline__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_group_info_group_info__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_add_members_add_members__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_image_modal_image_modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__providers_login__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__providers_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__providers_alert__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__providers_firebase__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__pages_comments_comments__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__pages_video_call_video_call__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96_angularfire2__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98_firebase_app__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_98_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__ionic_native_native_audio__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__pipes_friend__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__pipes_search__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__pipes_conversation__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__pipes_date__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__pipes_group__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__providers_video__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__pages_feeds_feeds_module__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__shared_shared_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__pages_about_about_module__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__pages_contact_contact_module__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__services_email_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__ionic_native_onesignal__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__providers_rss_service_rss_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__providers_loading_service_loading_service__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__pages_rss_rss__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__providers_facebook_facebook__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__pages_facebook_facebook_facebook__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__pipes_time_ago_time_ago__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































//Article, Reward, Law





//Youtube

//import { YoutubeChannelVideoComponent } from '../pages/youtube/youtube-channel-video/youtube-channel-video.component';
//import { YoutubeChannelComponent } from '../pages/youtube/youtube-channel/youtube-channel.component';
//Youtube
//Shopify











//Facebook Imports

//import { GooglePlus } from '@ionic-native/google-plus';
































// import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';











//import { PipesModule } from '../pipes/pipes.module';
//Feeds&Modules





//Onesingal

//RSS Feed

//import { RssHomePage } from '../pages/rss/rss-home/rss-home';

//import { RssPageModule } from '../pages/rss/rss.module';

//facebook



__WEBPACK_IMPORTED_MODULE_98_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_100__login__["a" /* Login */].firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__["a" /* ListingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_followers_followers__["a" /* FollowersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forms_forms__["a" /* FormsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_list_1_list_1__["a" /* List1Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_2_list_2__["a" /* List2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_grid_grid__["a" /* GridPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_form_layout_form_layout__["a" /* FormLayoutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_law_law__["a" /* LawPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_post_detail_post_detail__["a" /* PostDetail */],
                __WEBPACK_IMPORTED_MODULE_49__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_preload_image_preload_image__["a" /* PreloadImage */],
                __WEBPACK_IMPORTED_MODULE_28__components_background_image_background_image__["a" /* BackgroundImage */],
                __WEBPACK_IMPORTED_MODULE_29__components_show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
                __WEBPACK_IMPORTED_MODULE_30__components_show_hide_password_show_hide_input__["a" /* ShowHideInput */],
                __WEBPACK_IMPORTED_MODULE_31__components_color_radio_color_radio__["a" /* ColorRadio */],
                __WEBPACK_IMPORTED_MODULE_32__components_counter_input_counter_input__["a" /* CounterInput */],
                __WEBPACK_IMPORTED_MODULE_33__components_rating_rating__["a" /* Rating */],
                //Facebook Imports
                __WEBPACK_IMPORTED_MODULE_68__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_trial_trial__["a" /* TrialPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_search_people_search_people__["a" /* SearchPeoplePage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_requests_requests__["a" /* RequestsPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_new_message_new_message__["a" /* NewMessagePage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_80__pages_new_group_new_group__["a" /* NewGroupPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_group_info_group_info__["a" /* GroupInfoPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_add_members_add_members__["a" /* AddMembersPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_image_modal_image_modal__["a" /* ImageModalPage */],
                __WEBPACK_IMPORTED_MODULE_101__pipes_friend__["a" /* FriendPipe */],
                __WEBPACK_IMPORTED_MODULE_103__pipes_conversation__["a" /* ConversationPipe */],
                __WEBPACK_IMPORTED_MODULE_102__pipes_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_104__pipes_date__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_105__pipes_group__["a" /* GroupPipe */],
                __WEBPACK_IMPORTED_MODULE_83__pages_timeline_timeline__["a" /* TimelinePage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_add_post_add_post__["a" /* AddPostPage */],
                __WEBPACK_IMPORTED_MODULE_94__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_95__pages_video_call_video_call__["a" /* VideoCallPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_home1_home__["a" /* HomePage1 */],
                __WEBPACK_IMPORTED_MODULE_54__pages_tabs1_tabs__["a" /* TabsPage1 */],
                __WEBPACK_IMPORTED_MODULE_53__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_60__pipes_pipes_safe_safe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_55__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_61__components_cart_cart__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_collections_collections__["a" /* CollectionsPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_one_product_one_product__["a" /* OneProductPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_reward_reward__["a" /* RewardPage */],
                //RssHomePage,
                __WEBPACK_IMPORTED_MODULE_115__pages_rss_rss__["a" /* RssPage */],
                __WEBPACK_IMPORTED_MODULE_117__pages_facebook_facebook_facebook__["a" /* FacebookPage */],
                __WEBPACK_IMPORTED_MODULE_118__pipes_time_ago_time_ago__["a" /* TimeAgoPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_41__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_51__pages_youtube_youtube_module__["a" /* YoutubeModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_107__pages_feeds_feeds_module__["a" /* FeedsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */],
                __WEBPACK_IMPORTED_MODULE_62_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/add-post/add-post.module#AddPostPageModule', name: 'AddPostPage', segment: 'add-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facebook/facebook/facebook-comment/facebook-comment.module#FacebookCommentPageModule', name: 'FacebookCommentPage', segment: 'facebook-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facebook/facebook/facebook.module#FacebookPageModule', name: 'FacebookPage', segment: 'facebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rss/rss-favorite/rss-favorite.module#RssFavoritePageModule', name: 'RssFavoritePage', segment: 'rss-favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rss/rss-home/rss-home.module#RssHomePageModule', name: 'RssHomePage', segment: 'rss-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rss/rss.module#RssPageModule', name: 'RssPage', segment: 'rss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_96_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_100__login__["a" /* Login */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_97_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_109__pages_about_about_module__["a" /* AboutModule */],
                __WEBPACK_IMPORTED_MODULE_108__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_110__pages_contact_contact_module__["a" /* ContactModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__["a" /* ListingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_followers_followers__["a" /* FollowersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forms_forms__["a" /* FormsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_list_1_list_1__["a" /* List1Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_2_list_2__["a" /* List2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_grid_grid__["a" /* GridPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_form_layout_form_layout__["a" /* FormLayoutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_law_law__["a" /* LawPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_post_detail_post_detail__["a" /* PostDetail */],
                __WEBPACK_IMPORTED_MODULE_49__pages_calculator_calculator__["a" /* CalculatorPage */],
                //Facebook Import
                __WEBPACK_IMPORTED_MODULE_68__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_trial_trial__["a" /* TrialPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_search_people_search_people__["a" /* SearchPeoplePage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_requests_requests__["a" /* RequestsPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_new_message_new_message__["a" /* NewMessagePage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_80__pages_new_group_new_group__["a" /* NewGroupPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_group_info_group_info__["a" /* GroupInfoPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_add_members_add_members__["a" /* AddMembersPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_image_modal_image_modal__["a" /* ImageModalPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_timeline_timeline__["a" /* TimelinePage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_add_post_add_post__["a" /* AddPostPage */],
                __WEBPACK_IMPORTED_MODULE_94__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_95__pages_video_call_video_call__["a" /* VideoCallPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_home1_home__["a" /* HomePage1 */],
                __WEBPACK_IMPORTED_MODULE_54__pages_tabs1_tabs__["a" /* TabsPage1 */],
                __WEBPACK_IMPORTED_MODULE_53__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_collections_collections__["a" /* CollectionsPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_one_product_one_product__["a" /* OneProductPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_reward_reward__["a" /* RewardPage */],
                //RssHomePage,
                __WEBPACK_IMPORTED_MODULE_115__pages_rss_rss__["a" /* RssPage */],
                __WEBPACK_IMPORTED_MODULE_117__pages_facebook_facebook_facebook__["a" /* FacebookPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_34__pages_feed_feed_service__["a" /* FeedService */], __WEBPACK_IMPORTED_MODULE_111__services_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_35__pages_listing_listing_service__["a" /* ListingService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_112__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_36__pages_profile_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_37__pages_notifications_notifications_service__["a" /* NotificationsService */], __WEBPACK_IMPORTED_MODULE_38__pages_list_1_list_1_service__["a" /* List1Service */], __WEBPACK_IMPORTED_MODULE_39__pages_list_2_list_2_service__["a" /* List2Service */], __WEBPACK_IMPORTED_MODULE_40__pages_schedule_schedule_service__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_63__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_65__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_66__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_67__ionic_native_geolocation__["a" /* Geolocation */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_87__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_88__providers_logout__["a" /* LogoutProvider */], __WEBPACK_IMPORTED_MODULE_89__providers_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_90__providers_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_91__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_92__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_93__providers_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_99__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_106__providers_video__["a" /* VideoProvider */], __WEBPACK_IMPORTED_MODULE_113__providers_rss_service_rss_service__["a" /* RssService */], __WEBPACK_IMPORTED_MODULE_59__providers_shopify_client_shopify_client__["a" /* ShopifyClientProvider */], __WEBPACK_IMPORTED_MODULE_114__providers_loading_service_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_116__providers_facebook_facebook__["a" /* FacebookService */],],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validator__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    // LoginPage
    // This is the page where the user can register and login to our app.
    // It's important to initialize the loginProvider here and setNavController as it will direct the routes of our app.
    function LoginPage(navCtrl, loginProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.formBuilder = formBuilder;
        // It's important to hook the navController to our loginProvider.
        this.loginProvider.setNavController(this.navCtrl);
        // Create our forms and their validators based on validators set on validator.ts.
        this.emailPasswordForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_4__validator__["a" /* Validator */].emailValidator,
            password: __WEBPACK_IMPORTED_MODULE_4__validator__["a" /* Validator */].passwordValidator
        });
        this.emailForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_4__validator__["a" /* Validator */].emailValidator
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        // Set view mode to main.
        this.mode = 'main';
    };
    // Call loginProvider and login the user with email and password.
    // You may be wondering where the login function for Facebook and Google are.
    // They are called directly from the html markup via loginProvider.facebookLogin() and loginProvider.googleLogin().
    LoginPage.prototype.login = function () {
        this.loginProvider.emailLogin(this.emailPasswordForm.value["email"], this.emailPasswordForm.value["password"]);
    };
    // Call loginProvider and register the user with email and password.
    LoginPage.prototype.register = function () {
        this.loginProvider.register(this.emailPasswordForm.value["email"], this.emailPasswordForm.value["password"]);
    };
    // Call loginProvider and send a password reset email.
    LoginPage.prototype.forgotPassword = function () {
        this.loginProvider.sendPasswordReset(this.emailForm.value["email"]);
        this.clearForms();
    };
    // Clear the forms.
    LoginPage.prototype.clearForms = function () {
        this.emailPasswordForm.reset();
        this.emailForm.reset();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/login/login.html"*/'<ion-content class="no-scroll" class="bg-image">\n  <div>\n      <img src="assets/still-logo.png" />          \n  </div>\n  <!-- Social Login Buttons -->\n  <div class="bottom">\n    <div class="buttons" *ngIf="mode == \'main\'">\n      <div>\n        <button ion-button icon-left class="facebook" tappable (click)="loginProvider.facebookLogin()"><ion-icon name="logo-facebook"></ion-icon>Continue with Facebook</button>\n        <!--<button ion-button icon-left class="google" tappable (click)="loginProvider.googleLogin()"><ion-icon name="logo-google"></ion-icon>Continue with Google</button>-->\n        <!--<button ion-button icon-left class="secondary" tappable (click)="loginProvider.guestLogin()"><ion-icon name="happy"></ion-icon>Continue as Guest</button>-->\n        <button ion-button icon-left class="dark" tappable (click)="clearForms(); mode = \'register\'"><ion-icon name="md-mail-open"></ion-icon>Signup with Email</button>\n        <button ion-button icon-left class class="secondary" tappable (click)="clearForms(); mode = \'login\'">Already Registered?</button>\n      </div>\n    </div>\n    <!-- Login Form -->\n    <div class="form" *ngIf="mode == \'login\'">\n      <button class="clear" ion-button icon-only tappable (click)="mode = \'main\'"><ion-icon name="md-close"></ion-icon></button>\n      <form [formGroup]="emailPasswordForm">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label>Email</ion-label>\n            <ion-input type="email" formControlName="email" placeholder="Your Email Address"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label>Password</ion-label>\n            <ion-input type="password" formControlName="password" placeholder="Your Password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button icon-left class="dark" tappable (click)="login()" [disabled]="!emailPasswordForm.valid"><ion-icon name="md-key"></ion-icon>Log in to the MS App</button>\n      </form>\n      <p tappable (click)="clearForms(); mode = \'forgotPassword\'">Forgot your Password?</p>\n    </div>\n    <!-- Registration Form -->\n    <div class="form" *ngIf="mode == \'register\'">\n      <button class="clear" ion-button icon-only tappable (click)="mode = \'main\'"><ion-icon name="md-close"></ion-icon></button>\n      <form [formGroup]="emailPasswordForm">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label>Email</ion-label>\n            <ion-input type="email" formControlName="email" placeholder="Your Email Address"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label>Password</ion-label>\n            <ion-input type="password" formControlName="password" placeholder="Create Password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button icon-left class="dark" tappable (click)="register()" [disabled]="!emailPasswordForm.valid"><ion-icon name="md-log-in"></ion-icon>Join the MS App</button>\n      </form>\n      <p>By joining you agree to our <b>Terms</b> &amp; <b>Privacy Policy.</b></p>\n    </div>\n    <!-- Forgot Password Form -->\n    <div class="form" *ngIf="mode == \'forgotPassword\'">\n      <button class="clear" ion-button icon-only tappable (click)="clearForms(); mode = \'login\'"><ion-icon name="md-close"></ion-icon></button>\n      <form [formGroup]="emailForm">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label>Email</ion-label>\n            <ion-input type="email" formControlName="email" placeholder="Your Email Address"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button icon-left class="dark" tappable (click)="forgotPassword()" [disabled]="!emailForm.valid"><ion-icon name="md-unlock"></ion-icon>Reset Password</button>\n      </form>\n      <p tappable (click)="clearForms(); mode = \'login\'">Password found? <b>Log in</b></p>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageModalPage = /** @class */ (function () {
    function ImageModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImageModalPage.prototype.ionViewDidLoad = function () {
        this.image = this.navParams.get('img');
    };
    ImageModalPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    ImageModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-image-modal',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/image-modal/image-modal.html"*/'<ion-content>\n  <div class="content" (click)="close()" tappable>\n    <img src={{image}}/>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/image-modal/image-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ImageModalPage);
    return ImageModalPage;
}());

//# sourceMappingURL=image-modal.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(18);
// Validators
// This file contains all your validators for the formGroups and for inputPrompts.
// Patterns can be tested by using a RegEx validator such as http://www.regexpal.com, https://regex101.com, among others.

var Validator;
(function (Validator) {
    // Set your validators here, don't forget to import and use them in the appropriate class that uses formGroups.
    // In this example, they are used on LoginPage where a formGroup for email and passwords is used.
    Validator.emailValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')
        ]
    ];
    // Set your prompt input validators here, don't forget to import and use them on the AlertController prompt.
    // In this example they are used by home.ts where the user are allowed to change their profile.
    // errorMessages are used by the AlertProvider class and is imported inside AlertProvider.errorMessages which is used by showErrorMessage().
    Validator.profileNameValidator = {
        minLength: 5,
        lengthError: { title: 'Name Too Short!', subTitle: 'Sorry, but name must be more than 4 characters.' },
        pattern: /^[a-zA-Z0-9\s]*$/g,
        patternError: { title: 'Invalid Name!', subTitle: 'Sorry, but the name you entered contains special characters.' }
    };
    Validator.profileEmailValidator = {
        pattern: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g,
        patternError: { title: 'Invalid Email Address!', subTitle: 'Sorry, but the email you have entered is invalid.' }
    };
    Validator.profilePasswordValidator = {
        minLength: 5,
        lengthError: { title: 'Password Too Short!', subTitle: 'Sorry, but password must be more than 4 characters.' },
        pattern: /^[a-zA-Z0-9!@#$%^&*()_+-=]*$/g,
        patternError: { title: 'Invalid Password!', subTitle: 'Sorry, but the password you have entered contains special characters.' }
    };
    // Group Form Validators
    Validator.groupNameValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].minLength(1)]];
    Validator.groupDescriptionValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].minLength(1)]];
})(Validator || (Validator = {}));
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verification_verification__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_trial_trial__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(68);
// Login Constants.
// This file contains all your Firebase settings, and app routes.
// It's important to set in your Firebase, Facebook, and Google app credentials here.
// If you have a different view for the homePage, trialPage, and verificationPage
// You can import them here and set them accordingly.
// If you want to disable emailVerification, simply set it to false.

//import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';



var Login;
(function (Login) {
    // Get your Firebase app's config on your Firebase console. "Add Firebase to your web app".
    Login.firebaseConfig = {
        // Testing ACCOUNT
        //  apiKey: "AIzaSyD4QCmiUjKC01v5S6wjJO5k40F-XGHad1U",
        //  authDomain: "socialappionic3.firebaseapp.com",
        //  databaseURL: "https://socialappionic3.firebaseio.com",
        //  projectId: "socialappionic3",
        //  storageBucket: "socialappionic3.appspot.com",
        //  messagingSenderId: "854823107381"
        apiKey: "AIzaSyA7bjGwot0ahPdNfUbTKHPmN1GQYKTFMIw",
        authDomain: "moonshine-stills-app-2.firebaseapp.com",
        databaseURL: "https://moonshine-stills-app-2.firebaseio.com",
        projectId: "moonshine-stills-app-2",
        storageBucket: "moonshine-stills-app-2.appspot.com",
        messagingSenderId: "1024389242669"
    };
    // Get your Facebook App Id from your app at http://developers.facebook.com
    Login.facebookAppId = "217479888701670"; // 1025234637591184
    //  LIVE ACCOUNT MAKE SURE TO GET THE client_id OF client_type 3 and NOT client_type 1!!!
    // export const googleClientId: string ="277373824972-lbl3fm2n204a3oreegisp5an1qko1fm6.apps.googleusercontent.com"
    // TESTing account
    // export const googleClientId: string ="854823107381-k0er0frh6q3s7msa4o2ovk14v89tj13h.apps.googleusercontent.com"
    Login.googleClientId = "1024389242669-oh1rjpgv34d9j5b8jt3nl5likbl2ldqi.apps.googleusercontent.com";
    // Set in your appropriate Login routes, don't forget to import the pages on app.module.ts
    Login.homePage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
    Login.verificationPage = __WEBPACK_IMPORTED_MODULE_1__pages_verification_verification__["a" /* VerificationPage */];
    Login.trialPage = __WEBPACK_IMPORTED_MODULE_2__pages_trial_trial__["a" /* TrialPage */];
    Login.loginpage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
    // Set whether emailVerification is enabled or not.
    Login.emailVerification = true;
})(Login || (Login = {}));
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutProvider = /** @class */ (function () {
    // Logout Provider
    // This is the provider class for logging out.
    // Before logout function can be used it's important to set the app to the Provider
    // by calling setApp(app) in the constructor of the controller that needs the logout functionality.
    function LogoutProvider(app, loadingProvider, dataProvider) {
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Logout Provider");
    }
    // Hooks the app to this provider, this is needed to clear the navigation views when logging out.
    LogoutProvider.prototype.setApp = function (app) {
        this.app = app;
    };
    // Logs the user out on Firebase, and clear navigation stacks.
    // It's important to call setApp(app) on the constructor of the controller that calls this function.
    LogoutProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadingProvider.show();
            // Sign the user out on Firebase
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut().then(function (success) {
                // Clear navigation stacks
                _this.app.getRootNav().popToRoot().then(function () {
                    _this.loadingProvider.hide();
                    resolve(true);
                    // Restart the entire app
                    //document.location.href = 'index.html';
                });
            });
        });
    };
    LogoutProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__data__["a" /* DataProvider */]])
    ], LogoutProvider);
    return LogoutProvider;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_video__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MessagePage = /** @class */ (function () {
    // MessagePage
    // This is the page where the user can chat with a friend.
    function MessagePage(navCtrl, navParams, dataProvider, angularDb, loadingProvider, alertCtrl, imageProvider, modalCtrl, camera, keyboard, videoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.angularDb = angularDb;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.keyboard = keyboard;
        this.videoProvider = videoProvider;
        this.startIndex = -1;
        this.scrollDirection = 'bottom';
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    MessagePage_1 = MessagePage;
    MessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = this.navParams.get('userId');
        // Get friend details.
        this.dataProvider.getUser(this.userId).subscribe(function (user) {
            _this.title = user.name;
            _this.toUserUniqueId = user.uniqueId;
            _this.isOnline = user.isOnline;
        });
        // Get conversationInfo with friend.
        this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).subscribe(function (conversation) {
            if (conversation.$exists()) {
                // User already have conversation with this friend, get conversation
                _this.conversationId = conversation.conversationId;
                // Get conversation
                _this.dataProvider.getConversationMessages(_this.conversationId).subscribe(function (messages) {
                    if (_this.messages) {
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > _this.messages.length) {
                            var message_1 = messages[messages.length - 1];
                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                message_1.avatar = user.img;
                                message_1.isOnline = user.isOnline;
                            });
                            _this.messages.push(message_1);
                            // Also append to messagesToShow.
                            _this.messagesToShow.push(message_1);
                            // Reset scrollDirection to bottom.
                            _this.scrollDirection = 'bottom';
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        _this.messages = [];
                        messages.forEach(function (message) {
                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                message.avatar = user.img;
                                message.isOnline = user.isOnline;
                            });
                            _this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (_this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((_this.messages.length - _this.numberOfMessages) > 0) {
                                _this.startIndex = _this.messages.length - _this.numberOfMessages;
                            }
                            else {
                                _this.startIndex = 0;
                            }
                        }
                        if (!_this.messagesToShow) {
                            _this.messagesToShow = [];
                        }
                        // Set messagesToShow
                        for (var i = _this.startIndex; i < _this.messages.length; i++) {
                            _this.messagesToShow.push(_this.messages[i]);
                        }
                        _this.loadingProvider.hide();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        var date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Load previous messages in relation to numberOfMessages.
    MessagePage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.show();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if ((that.startIndex - that.numberOfMessages) > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            that.scrollDirection = 'top';
            // Populate list again.
            that.ionViewDidLoad();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    MessagePage.prototype.ionViewWillLeave = function () {
        if (this.messages)
            this.setMessagesRead(this.messages);
    };
    // Check if currentPage is active, then update user's messagesRead.
    MessagePage.prototype.setMessagesRead = function (messages) {
        if (this.navCtrl.getActive().instance instanceof MessagePage_1) {
            // Update user's messagesRead on database.
            var totalMessagesCount;
            this.dataProvider.getConversationMessages(this.conversationId).subscribe(function (messages) {
                totalMessagesCount = messages.length;
            });
            this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
                messagesRead: totalMessagesCount
            });
        }
    };
    // Check if 'return' button is pressed and send the message.
    MessagePage.prototype.onType = function (keyCode) {
        if (keyCode == 13) {
            this.keyboard.close();
            this.send();
        }
    };
    // Scroll to bottom of page after a short delay.
    MessagePage.prototype.scrollBottom = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    };
    // Scroll to top of the page after a short delay.
    MessagePage.prototype.scrollTop = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    };
    // Scroll depending on the direction.
    MessagePage.prototype.doScroll = function () {
        if (this.scrollDirection == 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection == 'top') {
            this.scrollTop();
        }
    };
    // Check if the user is the sender of the message.
    MessagePage.prototype.isSender = function (message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    // Back
    MessagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Send message, if there's no conversation yet, create a new conversation.
    MessagePage.prototype.send = function () {
        var _this = this;
        if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
                // Add Message to the existing conversation
                // Clone an instance of messages object so it will not directly be updated.
                // The messages object should be updated by our observer declared on ionViewDidLoad.
                var messages_1 = JSON.parse(JSON.stringify(this.messages));
                messages_1.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                // Update conversation on database.
                this.dataProvider.getConversation(this.conversationId).update({
                    messages: messages_1
                });
                // Clear messagebox.
                this.message = '';
            }
            else {
                // New Conversation with friend.
                var messages = [];
                messages.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                var users = [];
                users.push(__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid);
                users.push(this.userId);
                // Add conversation.
                this.angularDb.list('conversations').push({
                    dateCreated: new Date().toString(),
                    messages: messages,
                    users: users
                }).then(function (success) {
                    var conversationId = success.key;
                    _this.message = '';
                    // Add conversation reference to the users.
                    _this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    _this.angularDb.object('/accounts/' + _this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
            }
        }
    };
    // View user info
    MessagePage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Send photoMessage.
    MessagePage.prototype.sendPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Photo Message',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Upload image then return the url.
                        _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Upload image then return the url.
                        _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                }
            ]
        }).present();
    };
    // Process photoMessage on database.
    MessagePage.prototype.sendPhotoMessage = function (url) {
        var _this = this;
        if (this.conversationId) {
            // Add image message to existing conversation.
            var messages_2 = JSON.parse(JSON.stringify(this.messages));
            messages_2.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                type: 'image',
                url: url
            });
            // Update conversation on database.
            this.dataProvider.getConversation(this.conversationId).update({
                messages: messages_2
            });
        }
        else {
            // Create new conversation.
            var messages = [];
            messages.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                type: 'image',
                url: url
            });
            var users = [];
            users.push(__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid);
            users.push(this.userId);
            // Add conversation.
            this.angularDb.list('conversations').push({
                dateCreated: new Date().toString(),
                messages: messages,
                users: users
            }).then(function (success) {
                var conversationId = success.key;
                // Add conversation references to users.
                _this.angularDb.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                    conversationId: conversationId,
                    messagesRead: 1
                });
                _this.angularDb.object('/accounts/' + _this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid).update({
                    conversationId: conversationId,
                    messagesRead: 0
                });
            });
        }
    };
    // Enlarge image messages.
    MessagePage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    MessagePage.prototype.videoCall = function () {
        console.log("====make call user id", this.toUserUniqueId);
        this.videoProvider.MakeCall(this.toUserUniqueId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], MessagePage.prototype, "content", void 0);
    MessagePage = MessagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/Users/yomi/Desktop/MSA/moonshine/src/pages/message/message.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons start>\n     <button ion-button tappable (click)="back()">Back</button>\n   </ion-buttons>\n   <ion-title>{{title}}</ion-title>\n   <!--<ion-buttons end>\n     <button (click)="videoCall()" ion-button icon-only [disabled]="!isOnline">\n       <ion-icon name="videocam"></ion-icon>\n     </button>\n   </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n<ion-content has-footer>\n  <!-- Messages -->\n  <div class="messages">\n    <p class="center" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n    <ion-row *ngFor="let message of messagesToShow">\n      <!--  Message -->\n      <ion-col col-2 class="center" *ngIf="isSender(message)">\n        <ion-thumbnail>\n        <img src="{{message.avatar}}" (load)="doScroll()" />\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col col-1 *ngIf="!isSender(message)">\n      </ion-col>\n      <ion-col col-9 class="sender" *ngIf="isSender(message)">\n        <div class="left" *ngIf="message.type == \'text\'">\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col col-9 *ngIf="!isSender(message)">\n        <div class="right" *ngIf="message.type == \'text\'">\n          <p>{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <p>{{title}}</p>\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col col-1 *ngIf="isSender(message)">\n      </ion-col>\n      <ion-col col-2 class="center" *ngIf="!isSender(message)">\n        <ion-icon name="radio-button-on" class="online" [ngClass]="message.isOnline?\'isOnline\' : \'isOffline\'"></ion-icon>\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()" />\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<!-- Message Box -->\n<ion-footer>\n  <div class="bottom_bar">\n    <!--<ion-col>\n    <ion-fab middle left>\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n    </ion-fab>\n    </ion-col>-->\n    <ion-input type="text" placeholder="  Type your message" [(ngModel)]="message" (ionfocus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-input>\n    <!--<ion-fab middle right>-->\n      <ion-buttons>\n      <button ion-button icon-right (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n      <button ion-button icon-left (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n      </ion-buttons>\n    <!--</ion-fab>-->\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/yomi/Desktop/MSA/moonshine/src/pages/message/message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_11__providers_video__["a" /* VideoProvider */]])
    ], MessagePage);
    return MessagePage;
    var MessagePage_1;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingModel; });
/* unused harmony export ListingItemModel */
var ListingModel = /** @class */ (function () {
    function ListingModel() {
    }
    return ListingModel;
}());

var ListingItemModel = /** @class */ (function () {
    function ListingItemModel() {
    }
    return ListingItemModel;
}());

//# sourceMappingURL=listing.model.js.map

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 444,
	"./af.js": 444,
	"./ar": 445,
	"./ar-dz": 446,
	"./ar-dz.js": 446,
	"./ar-kw": 447,
	"./ar-kw.js": 447,
	"./ar-ly": 448,
	"./ar-ly.js": 448,
	"./ar-ma": 449,
	"./ar-ma.js": 449,
	"./ar-sa": 450,
	"./ar-sa.js": 450,
	"./ar-tn": 451,
	"./ar-tn.js": 451,
	"./ar.js": 445,
	"./az": 452,
	"./az.js": 452,
	"./be": 453,
	"./be.js": 453,
	"./bg": 454,
	"./bg.js": 454,
	"./bm": 455,
	"./bm.js": 455,
	"./bn": 456,
	"./bn.js": 456,
	"./bo": 457,
	"./bo.js": 457,
	"./br": 458,
	"./br.js": 458,
	"./bs": 459,
	"./bs.js": 459,
	"./ca": 460,
	"./ca.js": 460,
	"./cs": 461,
	"./cs.js": 461,
	"./cv": 462,
	"./cv.js": 462,
	"./cy": 463,
	"./cy.js": 463,
	"./da": 464,
	"./da.js": 464,
	"./de": 465,
	"./de-at": 466,
	"./de-at.js": 466,
	"./de-ch": 467,
	"./de-ch.js": 467,
	"./de.js": 465,
	"./dv": 468,
	"./dv.js": 468,
	"./el": 469,
	"./el.js": 469,
	"./en-SG": 470,
	"./en-SG.js": 470,
	"./en-au": 471,
	"./en-au.js": 471,
	"./en-ca": 472,
	"./en-ca.js": 472,
	"./en-gb": 473,
	"./en-gb.js": 473,
	"./en-ie": 474,
	"./en-ie.js": 474,
	"./en-il": 475,
	"./en-il.js": 475,
	"./en-nz": 476,
	"./en-nz.js": 476,
	"./eo": 477,
	"./eo.js": 477,
	"./es": 478,
	"./es-do": 479,
	"./es-do.js": 479,
	"./es-us": 480,
	"./es-us.js": 480,
	"./es.js": 478,
	"./et": 481,
	"./et.js": 481,
	"./eu": 482,
	"./eu.js": 482,
	"./fa": 483,
	"./fa.js": 483,
	"./fi": 484,
	"./fi.js": 484,
	"./fo": 485,
	"./fo.js": 485,
	"./fr": 486,
	"./fr-ca": 487,
	"./fr-ca.js": 487,
	"./fr-ch": 488,
	"./fr-ch.js": 488,
	"./fr.js": 486,
	"./fy": 489,
	"./fy.js": 489,
	"./ga": 490,
	"./ga.js": 490,
	"./gd": 491,
	"./gd.js": 491,
	"./gl": 492,
	"./gl.js": 492,
	"./gom-latn": 493,
	"./gom-latn.js": 493,
	"./gu": 494,
	"./gu.js": 494,
	"./he": 495,
	"./he.js": 495,
	"./hi": 496,
	"./hi.js": 496,
	"./hr": 497,
	"./hr.js": 497,
	"./hu": 498,
	"./hu.js": 498,
	"./hy-am": 499,
	"./hy-am.js": 499,
	"./id": 500,
	"./id.js": 500,
	"./is": 501,
	"./is.js": 501,
	"./it": 502,
	"./it-ch": 503,
	"./it-ch.js": 503,
	"./it.js": 502,
	"./ja": 504,
	"./ja.js": 504,
	"./jv": 505,
	"./jv.js": 505,
	"./ka": 506,
	"./ka.js": 506,
	"./kk": 507,
	"./kk.js": 507,
	"./km": 508,
	"./km.js": 508,
	"./kn": 509,
	"./kn.js": 509,
	"./ko": 510,
	"./ko.js": 510,
	"./ku": 511,
	"./ku.js": 511,
	"./ky": 512,
	"./ky.js": 512,
	"./lb": 513,
	"./lb.js": 513,
	"./lo": 514,
	"./lo.js": 514,
	"./lt": 515,
	"./lt.js": 515,
	"./lv": 516,
	"./lv.js": 516,
	"./me": 517,
	"./me.js": 517,
	"./mi": 518,
	"./mi.js": 518,
	"./mk": 519,
	"./mk.js": 519,
	"./ml": 520,
	"./ml.js": 520,
	"./mn": 521,
	"./mn.js": 521,
	"./mr": 522,
	"./mr.js": 522,
	"./ms": 523,
	"./ms-my": 524,
	"./ms-my.js": 524,
	"./ms.js": 523,
	"./mt": 525,
	"./mt.js": 525,
	"./my": 526,
	"./my.js": 526,
	"./nb": 527,
	"./nb.js": 527,
	"./ne": 528,
	"./ne.js": 528,
	"./nl": 529,
	"./nl-be": 530,
	"./nl-be.js": 530,
	"./nl.js": 529,
	"./nn": 531,
	"./nn.js": 531,
	"./pa-in": 532,
	"./pa-in.js": 532,
	"./pl": 533,
	"./pl.js": 533,
	"./pt": 534,
	"./pt-br": 535,
	"./pt-br.js": 535,
	"./pt.js": 534,
	"./ro": 536,
	"./ro.js": 536,
	"./ru": 537,
	"./ru.js": 537,
	"./sd": 538,
	"./sd.js": 538,
	"./se": 539,
	"./se.js": 539,
	"./si": 540,
	"./si.js": 540,
	"./sk": 541,
	"./sk.js": 541,
	"./sl": 542,
	"./sl.js": 542,
	"./sq": 543,
	"./sq.js": 543,
	"./sr": 544,
	"./sr-cyrl": 545,
	"./sr-cyrl.js": 545,
	"./sr.js": 544,
	"./ss": 546,
	"./ss.js": 546,
	"./sv": 547,
	"./sv.js": 547,
	"./sw": 548,
	"./sw.js": 548,
	"./ta": 549,
	"./ta.js": 549,
	"./te": 550,
	"./te.js": 550,
	"./tet": 551,
	"./tet.js": 551,
	"./tg": 552,
	"./tg.js": 552,
	"./th": 553,
	"./th.js": 553,
	"./tl-ph": 554,
	"./tl-ph.js": 554,
	"./tlh": 555,
	"./tlh.js": 555,
	"./tr": 556,
	"./tr.js": 556,
	"./tzl": 557,
	"./tzl.js": 557,
	"./tzm": 558,
	"./tzm-latn": 559,
	"./tzm-latn.js": 559,
	"./tzm.js": 558,
	"./ug-cn": 560,
	"./ug-cn.js": 560,
	"./uk": 561,
	"./uk.js": 561,
	"./ur": 562,
	"./ur.js": 562,
	"./uz": 563,
	"./uz-latn": 564,
	"./uz-latn.js": 564,
	"./uz.js": 563,
	"./vi": 565,
	"./vi.js": 565,
	"./x-pseudo": 566,
	"./x-pseudo.js": 566,
	"./yo": 567,
	"./yo.js": 567,
	"./zh-cn": 568,
	"./zh-cn.js": 568,
	"./zh-hk": 569,
	"./zh-hk.js": 569,
	"./zh-tw": 570,
	"./zh-tw.js": 570
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 993;

/***/ })

},[662]);
//# sourceMappingURL=main.js.map