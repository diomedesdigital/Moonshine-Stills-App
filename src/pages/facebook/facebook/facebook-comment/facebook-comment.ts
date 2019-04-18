import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookService} from '../../../../providers/facebook/facebook';
/**
 * Generated class for the FacebookCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-facebook-comment',
 	templateUrl: 'facebook-comment.html',
 })
 export class FacebookCommentPage {
 	item:any;
 	list:Array<any>;
 	next:any=null;
 	spnState:string='show';

 	constructor(public navCtrl: NavController,
 		public navParams: NavParams,
 		public facebookService:FacebookService) {
 		this.item=this.navParams.get('item');
 		this.list=new Array<any>();
 		this.loadMore();
 	}

 	loadMore(infiniteScroll:any=null){
 		this.facebookService.getComments(this.next,this.item).subscribe(data=>{
 			var tmpData=data.data;
 			this.next=data.paging.next;
 			this.list=this.list.concat(tmpData);
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 			if(this.next==undefined){
 				if(infiniteScroll!=null){
 					infiniteScroll.enable(false);
 			    }
 			}
 			this.spnState='hide';
 		},error=>{
 			console.log(error);
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 			this.spnState='hide';
 		})
 	}

 }
