import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssService } from '../../providers/rss-service/rss-service';
/**
 * Generated class for the RssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-rss',
 	templateUrl: 'rss.html',
 })
 export class RssPage {
  list_category:Array<any>;
  constructor(public navCtrl: NavController,
   public rssService:RssService,
   public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RssCategoryPage');
    this.rssService.getCategory(this.rssService.category).subscribe(data=>{
      this.list_category=new Array();
  		this.list_category=data;
  		console.log(this.list_category);
  	});
  }
 }
