import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})

export class CheckoutPage {
  checkouturl: any;
  url: SafeResourceUrl;
  loadCount: any = 0;
  loader: any;
  constructor(public navCtrl: NavController, public loadingController :LoadingController,private sanitizer: DomSanitizer, public navParams: NavParams, public shopifyClientProvider: ShopifyClientProvider) {
  
    this.loader = this.loadingController.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  ngOnInit() {
  	var url = this.navParams.get("url")//this.shopifyClientProvider.getCheckoutUrl();
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  presentLoading() {

  }

  onLoad(): void {
    this.loadCount++;
    if(this.loadCount == 2)
    {
    this.loader.dismiss();
    }
  }


}
