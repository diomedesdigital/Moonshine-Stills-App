import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import xml2js from 'xml2js';
import { Observable } from 'rxjs/Observable';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

const STORAGE_KEY="rss_favorites";
/*
  Generated class for the RssServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class RssService{
    public category:any=[
      { 
        'title':'Moonshine Distilling',
        'link':'https://feed.rssunify.com/5c9110e45af8f/rss.xml'
      },
      {
        'title':'Precious Metals',
        'link':'https://feed.rssunify.com/5c913911c449d/rss.xml'
      },
      {
        'title':'Survivalist News',
        'link':'https://feed.rssunify.com/5c9139b024fea/rss.xml'
      },
      {
        'title':'Politics and Economy',
        'link':'https://feed.rssunify.com/5c913aabdd9eb/rss.xml'
      },
      {
        'title':'Moonshine Recipes',
        'link':'https://feed.rssunify.com/5c98e4b560897/rss.xml'
      },      
      {
        'title':'Moonshine Culture',
        'link':'https://feed.rssunify.com/5c913bfd4fa1a/rss.xml'
      }, 
      {
        'title':'Moonshine Podcasts',
        'link':'https://feed.rssunify.com/5c913d97e1baa/rss.xml'
      }           
    ];

  	constructor(
      public http: HttpClient,
      public iab: InAppBrowser,
      public socialSharing:SocialSharing,
      public storage:Storage
      ) {

  	}

  	getCategory(data): Observable<any>{
      return new Observable(observer=>{
  			observer.next(data);
  			observer.complete();
  		})
  	}

  	getPosts(link:string=null):Observable<any>{
  		return this.http.get(link,{ responseType: "text" });
  	}

    convertToJson(data:string){
  			let res;
  			xml2js.parseString(data, { explicitArray: false }, (error, result) => {
  				if (error) {
  					throw new Error(error);
  				} else {
  					res = result;
  				}
  			});
  			return res;
  	}

    isFavorite(item){
      return this.getAllFavorites().then(result => {
        if(result){
          if(this.getIndexOf(item.link,result)!=-1){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      });
    }

    favorite(item){
      return this.getAllFavorites().then(result => {
        if (result) {
          result.push(item);
          return this.storage.set(STORAGE_KEY, result);
        } else {
          return this.storage.set(STORAGE_KEY, [item]);
        }
      });
    }

    unFavorite(item){
      return this.getAllFavorites().then(result=>{
        if(result){
          let index=this.getIndexOf(item.link,result);
          result.splice(index,1);
          return this.storage.set(STORAGE_KEY,result);
        }
      })
    }

    getAllFavorites(){
      return this.storage.get(STORAGE_KEY);
    }

    getIndexOf(link:any,result:any){
      for (var i = 0; i < result.length; i++) {
        if(result[i].link == link ){
          return i;
        }
      }
      return -1;
    }

    clearAllFavorite(){
      this.storage.remove(STORAGE_KEY);
    }

    //action on click event
    doFavorite(item){
      this.isFavorite(item).then(result=>{
        if(result==false){
          item.isFavorite=true;
          this.favorite(item);
        }else{
          item.isFavorite=false;
          this.unFavorite(item);
        }
      })
    }

    goToHomePage(navCtrl,item){
      navCtrl.push('RssHomePage',{
        'item':item
      })
    }

    doOpen(item){
       this.iab.create(item.link);
    }

    doShare(item){
       this.socialSharing.share(item.title, item.description, null, item.link);
    }
    
    goToFavoritePage(navCtrl){
      navCtrl.push('RssFavoritePage');
    }

  }
