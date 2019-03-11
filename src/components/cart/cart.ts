import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';

import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';

@Component({
    selector: 'cart',
    templateUrl: 'cart.html'
})
export class CartComponent {

    qty = 1;
    text: string;
    items: any = [];
    animateClass: any;

    constructor(private navCtrl: NavController, private toastCtrl: ToastController, public events: Events, private shopifyClientProvider: ShopifyClientProvider) {

        events.subscribe('cart:updated', () => {
            console.log("updated cart");
           this.ngAfterViewInit();
        });

    }

    add(item) {
        this.shopifyClientProvider.updateLineItem(item.id, item.quantity + 1);
    }

    sub(item) {
        if (item.quantity != 1)
        {
        this.shopifyClientProvider.updateLineItem(item.id, item.quantity - 1);
        this.events.publish('cart:updated');
        }
    }

    ngAfterViewInit(){
            let that = this;
            this.shopifyClientProvider.getCart().then(function(cart){
            that.items = cart.lineItems;
            console.log(cart.lineItems);
            that.events.publish("cart:amount", {amount: cart.subtotal});
            })
    }

    removeItem(item) {
        let that = this;
        this.shopifyClientProvider.removeItemFromCart(item.id).then(function(resp){
            that.ngAfterViewInit();
            that.presentToast('Item removed from Cart!')
        })
    }

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 1000,
        position: 'bottom'
      });
  
      toast.present();
    }   

}
