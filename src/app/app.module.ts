import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, Pipe, PipeTransform } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook} from '@ionic-native/facebook';


import { ListingPage } from '../pages/listing/listing';
import { FeedPage } from '../pages/feed/feed';
import { FollowersPage } from '../pages/followers/followers';
import { LayoutsPage } from '../pages/layouts/layouts';
import { FormsPage } from '../pages/forms/forms';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SchedulePage } from '../pages/schedule/schedule';
import { List1Page } from '../pages/list-1/list-1';
import { List2Page } from '../pages/list-2/list-2';
import { GridPage } from '../pages/grid/grid';
import { FormLayoutPage } from '../pages/form-layout/form-layout';
import { FiltersPage } from '../pages/filters/filters';


import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';

import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';

import { FeedService } from '../pages/feed/feed.service';
import { ListingService } from '../pages/listing/listing.service';
import { ProfileService } from '../pages/profile/profile.service';
import { NotificationsService } from '../pages/notifications/notifications.service';
import { List1Service } from '../pages/list-1/list-1.service';
import { List2Service } from '../pages/list-2/list-2.service';
import { ScheduleService } from '../pages/schedule/schedule.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Article, Reward, Law
import {PostDetail} from '../pages/post-detail/post-detail';
import {ArticlePage} from '../pages/article/article';
import {LawPage} from '../pages/law/law';
import {CalculatorPage} from '../pages/calculator/calculator';
import {RewardPage} from '../pages/reward/reward';

//Youtube
import { YoutubeModule } from '../pages/youtube/youtube.module';
//import { YoutubeChannelVideoComponent } from '../pages/youtube/youtube-channel-video/youtube-channel-video.component';
//import { YoutubeChannelComponent } from '../pages/youtube/youtube-channel/youtube-channel.component';
//Youtube

//Shopify
import { HomePage1 } from '../pages/home1/home';
import { CheckoutPage } from '../pages/checkout/checkout';
import { TabsPage1 } from '../pages/tabs1/tabs';
import { CartPage } from '../pages/cart/cart';
import { CollectionsPage } from '../pages/collections/collections';
import { OneProductPage } from '../pages/one-product/one-product';
import { ProductListPage } from '../pages/product-list/product-list';
import { ShopifyClientProvider } from '../providers/shopify-client/shopify-client';
import { SafePipe } from '../pipes/pipes/safe/safe';
import { CartComponent } from '../components/cart/cart';
import { SuperTabsModule } from 'ionic2-super-tabs';


//Facebook Imports
import { Camera } from '@ionic-native/camera';
//import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Toast } from '@ionic-native/toast';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../pages/home/home';
import { VerificationPage } from '../pages/verification/verification';
import { TrialPage } from '../pages/trial/trial';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagesPage } from '../pages/messages/messages';
import { GroupsPage } from '../pages/groups/groups';
import { FriendsPage } from '../pages/friends/friends';
import { SearchPeoplePage } from '../pages/search-people/search-people';
import { RequestsPage } from '../pages/requests/requests';
import { UserInfoPage } from '../pages/user-info/user-info';
import { NewMessagePage } from '../pages/new-message/new-message';
import { MessagePage } from '../pages/message/message';
import { NewGroupPage } from '../pages/new-group/new-group';
import { GroupPage } from '../pages/group/group';
import { AddPostPage } from '../pages/add-post/add-post';
import { TimelinePage } from '../pages/timeline/timeline';
import { GroupInfoPage } from '../pages/group-info/group-info';
import { AddMembersPage } from '../pages/add-members/add-members';
import { ImageModalPage } from '../pages/image-modal/image-modal';
import { LoginProvider } from '../providers/login';
import { LogoutProvider } from '../providers/logout';
import { LoadingProvider } from '../providers/loading';
import { AlertProvider } from '../providers/alert';
import { ImageProvider } from '../providers/image';
import { DataProvider } from '../providers/data';
import { FirebaseProvider } from '../providers/firebase';
import { CommentsPage} from '../pages/comments/comments';
import { VideoCallPage } from '../pages/video-call/video-call';
// import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NativeAudio } from '@ionic-native/native-audio';

import { Login } from '../login';

import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { GroupPipe } from '../pipes/group';
import { VideoProvider } from '../providers/video';
//import { PipesModule } from '../pipes/pipes.module';

//Feeds&Modules
import { FeedsModule } from '../pages/feeds/feeds.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from '../pages/about/about.module';
import { ContactModule } from '../pages/contact/contact.module';
import { EmailService } from '../services/email.service';

//Onesingal
import { OneSignal } from '@ionic-native/onesignal';

//RSS Feed
import { RssService } from '../providers/rss-service/rss-service';
//import { RssHomePage } from '../pages/rss/rss-home/rss-home';
import { LoadingService } from '../providers/loading-service/loading-service';
//import { RssPageModule } from '../pages/rss/rss.module';
import { RssPage } from '../pages/rss/rss';

//facebook
import { FacebookService } from '../providers/facebook/facebook';
import {FacebookPage} from '../pages/facebook/facebook/facebook';
import {TimeAgoPipe} from '../pipes/time-ago/time-ago'

firebase.initializeApp(Login.firebaseConfig);



@NgModule({
  declarations: [
    MyApp,
    ListingPage,
    FeedPage,
    FollowersPage,
    LayoutsPage,
    FormsPage,
    LoginPage,
    NotificationsPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    SignupPage,
    ForgotPasswordPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    ArticlePage,
    LawPage,
    PostDetail,
    CalculatorPage,  
    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    //Facebook Imports
    HomePage,
    VerificationPage,
    TrialPage,
    TabsPage,
    MessagesPage,
    GroupsPage,
    FriendsPage,
    SearchPeoplePage,
    RequestsPage,
    UserInfoPage,
    NewMessagePage,
    MessagePage,
    NewGroupPage,
    GroupPage,
    GroupInfoPage,
    AddMembersPage,
    ImageModalPage,
    FriendPipe,
    ConversationPipe,
    SearchPipe,
    DateFormatPipe,
    GroupPipe,
    TimelinePage,        
    AddPostPage,
    CommentsPage,
    VideoCallPage,
    HomePage1,
    TabsPage1,
    CheckoutPage,
    SafePipe,
    CartPage,
    CartComponent,
    CollectionsPage,
    OneProductPage,
    ProductListPage,
    RewardPage,
    //RssHomePage,
    RssPage,
    FacebookPage,
    TimeAgoPipe,      
  ],
  imports: [
    BrowserModule,
    YoutubeModule,      
    HttpModule,
    HttpClientModule,    
    FeedsModule,
    IonicPageModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      scrollAssist: false,
      autoFocusAssist: false
    }),
    AngularFireModule.initializeApp(Login.firebaseConfig),
    AngularFireDatabaseModule,
    AboutModule,
    SharedModule,
    ContactModule,
    //PipesModule,
    //RssPageModule,

        
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListingPage,
    FeedPage,
    FollowersPage,
    LayoutsPage,
    FormsPage,
    LoginPage,
    NotificationsPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    ForgotPasswordPage,
    SignupPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    ArticlePage,
    LawPage,
    PostDetail, 
    CalculatorPage,        
    //Facebook Import
    HomePage,
    VerificationPage,
    TrialPage,
    TabsPage,
    MessagesPage,
    GroupsPage,
    FriendsPage,
    SearchPeoplePage,
    RequestsPage,
    UserInfoPage,
    NewMessagePage,
    MessagePage,
    NewGroupPage,
    GroupPage,
    GroupInfoPage,
    AddMembersPage,
    ImageModalPage,
    TimelinePage,                 
    AddPostPage,
    CommentsPage,
    VideoCallPage,
    HomePage1,
    TabsPage1,
    CheckoutPage,
    CartPage,
    CollectionsPage,
    OneProductPage,
    ProductListPage,
    RewardPage,
    //RssHomePage,
    RssPage,
    FacebookPage,

  ],
  providers: [FeedService, EmailService, ListingService, SocialSharing, InAppBrowser, Facebook, OneSignal,  ProfileService, NotificationsService, List1Service, List2Service, ScheduleService, SplashScreen, StatusBar, Camera, 
    Keyboard, Toast, GoogleMaps,Geolocation,{ provide: ErrorHandler, useClass: IonicErrorHandler }, LoginProvider,LogoutProvider, LoadingProvider, 
    AlertProvider, ImageProvider, DataProvider, FirebaseProvider,NativeAudio, VideoProvider,  RssService, ShopifyClientProvider, LoadingService, FacebookService, ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
