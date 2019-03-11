import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';
import { CheckoutPage } from '../../pages/checkout/checkout';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
cart: any;
    qty: any = 1;
    amount: any = 0;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public events:Events, public navParams: NavParams, private shopifyClientProvider: ShopifyClientProvider) {

        this.events.subscribe('cart:amount', (data) => {
            console.log("amount ", data);
            this.amount = data.amount;
        });

  }

    getAmount(){
      //  this.amount = this.globals.getTotalAmout();// call getTotalAmout() from globals provider
    }

    getBarcode() {
        // this.barcodeScanner.scan().then((barcodeData) => {
        //     this.presentToast(barcodeData)
        // }, (err) => {
        //     // An error occurred
        // });
    }

    emptyCart(){
      //  this.globals.clearCart(); // call clearCart() from globals provider
        this.presentToast('Cart cleared!')
    }

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 1000,
        position: 'bottom'
      });
  
      toast.present();
    }    

    checkout(){
      let that = this;
      this.shopifyClientProvider.getCart().then(function(cart){
        let url = cart.checkoutUrl;
      that.navCtrl.push(CheckoutPage, {url:url});
      })
    }

}
