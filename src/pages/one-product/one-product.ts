import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController  } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';
import { CheckoutPage } from '../../pages/checkout/checkout';
/**
 * Generated class for the OneProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-one-product',
  templateUrl: 'one-product.html',
})
export class OneProductPage {
product: any;
image: any;
@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, public shopifyClientProvider: ShopifyClientProvider) {

    this.product = this.navParams.get("item") 
    this.image = this.product.images[0].src;
    console.log(this.product);
  }

  ngAfterViewInit() {
  }

	addToCart(){
console.log(this.product.selectedVariant);
this.shopifyClientProvider.addToCart(this.product.selectedVariant);
this.presentToast('Item added to cart!') 
	}

  selectImage(image) {
  	console.log(image);
    this.image = image.src;
  }


    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 1000,
        position: 'middle'
      });
  
      toast.present();
    }  


    checkout(){
    	 //this.navCtrl.push(CheckoutPage, {url:this.product.seectedVariant.checkoutUrl() });
    	 this.shopifyClientProvider.getProduct(this.product.id);

    }


}
