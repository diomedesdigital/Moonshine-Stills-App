import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';
import { OneProductPage } from '../../pages/one-product/one-product';

/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
	collections: any;
    myInput = ''
    allItems: any;
    realItems: any = [];
    title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopifyClientProvider: ShopifyClientProvider) {
  }

  ionViewDidLoad() {

  	let collection = this.navParams.get("collection")
  	this.allItems = this.navParams.get("products")
  	this.title = collection.attrs.title;
    console.log(this.allItems);
	  }


    search(event) {
        let newArr = [];
        for (let i = 0; i < this.realItems.length; i++) {
            if (this.realItems[i].attrs.title.toLowerCase().includes(this.myInput.toLowerCase()))
                newArr.push(this.realItems[i]);
        }
        this.allItems = newArr;
    }

  openProduct(item){
    //console.log(item);
    this.navCtrl.push(OneProductPage, {item: item})
  }  
}
