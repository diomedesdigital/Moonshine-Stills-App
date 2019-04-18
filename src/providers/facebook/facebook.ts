import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import * as Constants from '../../config/constants';
import { Observable } from 'rxjs/Observable';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
/*
  Generated class for the FacebookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const config={
    'graph_link':'https://graph.facebook.com/v2.9/',
    'app_access_token':'1552011421763113|-A86UxDz911AEhnyrWwJoYtFdRI',
    'page_id':'1579091215665858',
    'limit_post':10,
    'limit_comment':20
}

@Injectable()
export class FacebookService {

  constructor(
    public http: HttpClient,
    public iab: InAppBrowser,
    public socialSharing:SocialSharing) {
  }

  public getPage():Observable<any>{
    return this.http.get(config.graph_link+config.page_id+'?fields=picture,name&access_token='+config.app_access_token);
  }

  public getPosts(next:any):Observable<any>{
  	if(next==null){
     return this.http.get(config.graph_link+config.page_id+'/feed?access_token='+config.app_access_token+'&fields=full_picture,picture,name,message,link,type,updated_time,likes.summary(true),comments.summary(true)&limit='+config.limit_post);
  	}else{
  	 return this.http.get(next);
  	}
  }

  public getComments(next:any,item:any):Observable<any>{
    if(next==null){
      return this.http.get(config.graph_link+item.id+'/comments?access_token='+config.app_access_token+'&limit='+config.limit_comment+'&fields=message');
    }else{
      return this.http.get(next);
    }
  }

  goToComment(item,navCtrl){
     navCtrl.push('FacebookCommentPage',{
       'item':item
     });
  }

  doOpen(item){
     const browser = this.iab.create(item.link);
  }

  doShare(item){
      this.socialSharing.share(item.name, item.message, null, item.link);
  }

}
