import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Facebook } from '@ionic-native/facebook';
import { EmailComposer } from '@ionic-native/email-composer';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { TruncatePipe } from './pipes/truncate.pipe';
import { TrimHtmlPipe } from './pipes/trim-html.pipe';

import { Config } from '../app.config';

export function createTranslateLoader(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/translations/', '.json');
}

@NgModule({
  declarations: [
    TruncatePipe,
    TrimHtmlPipe
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    CommonModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    BrowserModule,
    HttpModule,
    IonicModule,
    TranslateModule,
    TruncatePipe,
    TrimHtmlPipe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    BarcodeScanner,
    Facebook,
    EmailComposer,
    Config
  ]
})
export class SharedModule {}
