import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssService } from '../../../providers/rss-service/rss-service';
/**
 * Generated class for the RssFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rss-favorite',
  templateUrl: 'rss-favorite.html',
})
export class RssFavoritePage {
 	data:any=new Array();
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public rssService:RssService
		) {
	}

	ionViewDidEnter(){
		this.data=new Array();
		this.rssService.getAllFavorites().then(result=>{
			this.data=result;
			console.log(this.data);
		})
	}

	doFavorite(item){
 		this.rssService.doFavorite(item);
 		let index = this.rssService.getIndexOf(item.link,this.data);
        if(index !=-1){
          this.data.splice(index, 1);
        }
 	}

 	doClear(){
 		this.rssService.clearAllFavorite();
 		this.data=new Array();
 	}

}
