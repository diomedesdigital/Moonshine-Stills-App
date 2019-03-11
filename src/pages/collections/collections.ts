import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';
import { OneProductPage } from '../../pages/one-product/one-product';

/**
 * Generated class for the CollectionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-collections',
  templateUrl: 'collections.html',
})
export class CollectionsPage {
	collections: any;
    myInput = ''
    allItems: any = [];
    realItems: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopifyClientProvider: ShopifyClientProvider) {
  }

  ionViewDidLoad() {
	var that = this;
	this.shopifyClientProvider.getProducts()
	  .then(function (data) {
	      console.log("collections",data);
	    that.realItems = data
	    that.allItems = data
	  })
	  .catch(function (err) {
	    console.log('Request failed',err);
	  });
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
