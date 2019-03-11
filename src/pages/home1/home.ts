import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController, LoadingController  } from 'ionic-angular';
import { ShopifyClientProvider } from '../../providers/shopify-client/shopify-client';
import { ProductListPage } from '../../pages/product-list/product-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage1 {
    collections : any ;
    pages: any;

  constructor(public navCtrl: NavController, public loadingController :LoadingController , public shopifyClientProvider: ShopifyClientProvider,public menu: MenuController) {

var that = this;
shopifyClientProvider.getCollections()
  .then(function (data) {
      console.log(data);
    that.collections = data
    that.pages = data
  })
  .catch(function (err) {
    console.log('Request failed',err);
  });

}

  openCollection(item) {
    let id = item.attrs.collection_id
    let that = this;
    this.presentLoading();
    this.shopifyClientProvider.getCollection(id).then(function(data){
    that.navCtrl.push(ProductListPage, {products: data, collection: item})
    })
  }


  presentLoading() {
    let loader = this.loadingController.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }


}
