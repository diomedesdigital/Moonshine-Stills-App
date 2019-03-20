import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, Events, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { TimelinePage } from '../pages/timeline/timeline';
import { TabsPage } from '../pages/tabs/tabs';

import {PostDetail} from '../pages/post-detail/post-detail';
import {ArticlePage} from '../pages/article/article';
import {LawPage} from '../pages/law/law';
import {CalculatorPage} from '../pages/calculator/calculator';
import { YoutubeChannelComponent } from '../pages/youtube/youtube-channel/youtube-channel.component';
import {RewardPage} from '../pages/reward/reward';

//Shopify
import { ShopifyClientProvider } from '../providers/shopify-client/shopify-client';
import { TabsPage1 } from '../pages/tabs1/tabs';
import { HomePage1 } from '../pages/home1/home';
import { CartPage } from '../pages/cart/cart';
import { ProductListPage } from '../pages/product-list/product-list';
import { CartComponent } from '../components/cart/cart';
import { CollectionsPage } from '../pages/collections/collections';
import { VideoCallPage } from '../pages/video-call/video-call';
import { Keyboard } from '@ionic-native/keyboard';

import { GroupsPage } from '../pages/groups/groups';
import { AboutComponent } from '../pages/about/about-component/about.component';
import { ContactPage } from '../pages/contact/contact.page';

//Onesignal
import { OneSignal } from '@ionic-native/onesignal';

//RSS
import { RssHomePage } from '../pages/rss/rss-home/rss-home';
import { RssPage } from '../pages/rss/rss';


@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  rootPage: any = LoginPage;

  pages: Array<{title: string, icon: string, component: any}>;
  pushPages: Array<{title: string, icon: string, component: any}>;
  chatPages: Array<{title: string, icon: string, component: any}>; 

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public modalCtrl:ModalController,
    public events:Events,
    public keyboard: Keyboard,    
    public shopifyClientProvider: ShopifyClientProvider,
    private oneSignal: OneSignal    
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      this.splashScreen.hide();
      this.statusBar.styleDefault();

      this.oneSignal.startInit('ead78954-5c8f-4f95-945b-37219ca72b36', '1024389242669');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
              });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        });

      this.oneSignal.endInit();      
      
      this.events.subscribe('openVideocall',()=>{
        let profileModal = this.modalCtrl.create(VideoCallPage);
        profileModal.present();
      })
      keyboard.hideKeyboardAccessoryBar(false);
    });

    this.pages = [
      { title: 'Home', icon: 'home', component: TabsPage },
      { title: 'Forums', icon: 'create', component: GroupsPage },
      { title: 'RSS', icon: 'create', component: RssPage },      
      { title: 'US State Laws', icon: 'book', component: LawPage },
      { title: 'Blog', icon: 'paper', component: ArticlePage },
      { title: 'Mash Calcuator', icon: 'calculator', component: CalculatorPage },
      { title: 'TDN Videos', icon: 'videocam', component: YoutubeChannelComponent},
      { title: 'Contact Us', icon: 'send', component: ContactPage },                         
    ];

    this.pushPages = [
      //{ title: 'Layouts', icon: 'grid', component: LayoutsPage },
      //{ title: 'Settings', icon: 'settings', component: SettingsPage },
      //{ title: 'Timeline', icon: 'list-box', component: TimelinePage }
    ];
    this.chatPages = [
      //{ title: 'Layouts', icon: 'grid', component: LayoutsPage },
        { title: 'Catalog', icon: 'chatbubbles', component: CollectionsPage },  
        { title: 'Categories', icon: 'chatbubbles', component: HomePage1},
        { title: 'Cart', icon: 'chatbubbles', component: CartPage},
        { title: 'FAQ', icon: 'book', component: AboutComponent },
        { title: 'Rewards', icon: 'book', component: RewardPage }        


    ];    
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
  chatPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  } 

}
