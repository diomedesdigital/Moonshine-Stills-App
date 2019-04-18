import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { FacebookService} from '../../../providers/facebook/facebook';
/**
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-facebook',
 	templateUrl: 'facebook.html',
 })
 
 export class FacebookPage {
 	list:Array<any>;
 	next:any=null;
 	page:any=null;
 	spnState:string='show';

 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public http:Http,
 		public fbService: FacebookService
 		) {
 		this.list = new Array();
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FacebookPage');
 		this.spnState='show';
 		this.fbService.getPage().subscribe(data=>{
 			this.page=data;
 			this.loadMore();
 		},error=>{
 			this.spnState='hide';
 		});
 	}

 	loadMore(infiniteScroll:any=null){
 		if(this.next==null){
            this.fbService.getPosts(this.next).subscribe(data=>{
				var tmpData=data.data;
 				console.log(tmpData);
 				this.next=data.paging.next;
 				this.list=this.list.concat(tmpData);
 				if(infiniteScroll){
 					infiniteScroll.complete();
 				}
 				this.spnState='hide';
            },error=>{
			    console.log(error);
 				if(infiniteScroll!=null){
 					infiniteScroll.enable(false);
 				}
 				this.spnState='hide';
            })
 		}else{
 			this.fbService.getPosts(this.next).subscribe(data=>{
			var tmpData=data.data;
 				this.next=data.paging.next;
 				this.list=this.list.concat(tmpData);
 				if(infiniteScroll){
 					infiniteScroll.complete();
 				}
 				if(this.next==undefined){
 					infiniteScroll.enable(false);
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
 }
