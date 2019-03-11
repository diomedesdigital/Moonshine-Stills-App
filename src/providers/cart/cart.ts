import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';

declare var ShopifyBuy: any;

/*
  Generated class for the CartProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartProvider {
    shopClient = ShopifyBuy.buildClient({
        accessToken: '04ed33ce64484adb7ef1649e8ec2b2a1',
        domain: 'h123456789.myshopify.com',
        appId: '6'
    });

  constructor(public events: Events, public shopifyClientProvider: ShopifyClientProvider) {

  }

    getCart() {
	return this.shopClient.fetchCart(this.shopifyClientProvider.getCartID());
    }

}
