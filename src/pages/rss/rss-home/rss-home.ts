import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssService } from '../../../providers/rss-service/rss-service';
import { LoadingService } from '../../../providers/loading-service/loading-service';
/**
 * Generated class for the RssHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-rss-home',
 	templateUrl: 'rss-home.html',
 })
 export class RssHomePage {
 	data:Array<any>=new Array();
 	item:any;
 	spnState:string='show';
 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public rssService: RssService,
 		public loadingService:LoadingService
 		) {
 		this.item=this.navParams.get('item');
 		this.rssService.getPosts(this.item.link).subscribe(data=>{
 			let json=this.rssService.convertToJson(data);
 			json = json.rss.channel.item;
 			this.data=json;
 			this.spnState='hide';
 		});
 	}

 	ionViewDidEnter() {
 		if(this.data.length!=0){
 			for(let i = 0; i < this.data.length; i++) {
 				this.rssService.isFavorite(this.data[i]).then(result=>{
 					this.data[i].isFavorite=result;
 				})
 			}
 		}
 	}
 }
