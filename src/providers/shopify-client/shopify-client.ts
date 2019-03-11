import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';

declare var ShopifyBuy: any;

/*
  Generated class for the ShopifyClientProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()
export class ShopifyClientProvider {
    cartID: any;
    cart: any;
    checkoutURL: any;
    shopClient = ShopifyBuy.buildClient({
        accessToken: '04a86f1f61f4d1b2df8ece16b7e9aaa3',
        domain: 'moonshine-stills-com.myshopify.com',
        appId: '6'
    });

    constructor(public events: Events) {


        events.subscribe('cart:updated', () => {
        //    this.getCart();
        });

        if (!this.cartID)
            this.createCart();
    }


    getCollections() {
        return this.shopClient.fetchAllCollections()
    }

    getProducts() {
        return this.shopClient.fetchAllProducts()
    }

    createCart() {
        var that = this;
            this.shopClient.createCart().then(function(resp) {
                console.log("new cartID", resp);
                that.cart = resp;
                that.cartID = resp.id;
            })
            .catch(function(err) {
                console.log('Request failed', err);
            });
    }

    addToCart(product) {
    	var that = this;
        this.cart.addVariants({ variant: product, quantity: 1 }).then(cart => {
            that.checkoutURL = cart.checkoutUrl;
            that.cart = cart;
            this.events.publish('cart:updated');
        });
    }



    updateLineItem(itemID, qty){
    	let that = this;
			this.cart.updateLineItem(itemID, qty).then(cart => {
           		 that.checkoutURL = cart.checkoutUrl;
           		 that.cart = cart;
			     that.events.publish('cart:updated');
			});
    }


    getCart() {
        return this.shopClient.fetchCart(this.getCartID())
    }

    getShopClient() {
        return this.shopClient;
    }

    getCartID() {
        return this.cartID;
    }

    getCheckoutUrl() {
    	return this.checkoutURL;
    }

    getProduct(id){
        this.shopClient.fetchProduct(id)
          .then(function (product) {
            console.log(product.selectedVariant);
          })
          .catch(function () {
            console.log('Request failed');
          });
    }

    getCollection(id){
        return this.shopClient.fetchQueryProducts({ collection_id: id })
    }

    removeItemFromCart(id){
       //this.checkoutURL = cart.checkoutUrl;
        return this.cart.removeLineItem(id)       
    }

}
