import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { LoadingProvider } from './loading';
import { AlertProvider } from './alert';
import { DataProvider } from './data';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/take';

@Injectable()
export class FirebaseProvider {
  // Firebase Provider
  // This is the provider class for most of the Firebase updates in the app.

  constructor(public angularDb:AngularFireDatabase, public loadingProvider: LoadingProvider, public alertProvider: AlertProvider, public dataProvider: DataProvider) {
    console.log("Initializing Firebase Provider");
  }

  // Send friend request to userId.
  sendFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loadingProvider.show();

    var requestsSent;
    // Use take(1) so that subscription will only trigger once.
    this.dataProvider.getRequests(loggedInUserId).take(1).subscribe((requests) => {
      requestsSent = requests.requestsSent;
      if (!requestsSent) {
        requestsSent = [userId];
      } else {
        if(requestsSent.indexOf(userId) == -1)
          requestsSent.push(userId);
      }
      // Add requestsSent information.
      this.angularDb.object('/requests/' + loggedInUserId).update({
        requestsSent: requestsSent
      }).then((success) => {
        var friendRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          friendRequests = requests.friendRequests;
          if (!friendRequests) {
            friendRequests = [loggedInUserId];
          } else {
            if(friendRequests.indexOf(userId) == -1)
              friendRequests.push(loggedInUserId);
          }
          // Add friendRequest information.
          this.angularDb.object('/requests/' + userId).update({
            friendRequests: friendRequests
          }).then((success) => {
            this.loadingProvider.hide();
            this.alertProvider.showFriendRequestSent();
          }).catch((error) => {
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

  // Cancel friend request sent to userId.
  cancelFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loadingProvider.show();

    var requestsSent;
    this.dataProvider.getRequests(loggedInUserId).take(1).subscribe((requests) => {
      requestsSent = requests.requestsSent;
      requestsSent.splice(requestsSent.indexOf(userId), 1);
      // Update requestSent information.
      this.angularDb.object('/requests/' + loggedInUserId).update({
        requestsSent: requestsSent
      }).then((success) => {
        var friendRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          friendRequests = requests.friendRequests;
          friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
          // Update friendRequests information.
          this.angularDb.object('/requests/' + userId).update({
            friendRequests: friendRequests
          }).then((success) => {
            this.loadingProvider.hide();
            this.alertProvider.showFriendRequestRemoved();
          }).catch((error) => {
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

  // Delete friend request.
  deleteFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loadingProvider.show();

    var friendRequests;
    this.dataProvider.getRequests(loggedInUserId).take(1).subscribe((requests) => {
      friendRequests = requests.friendRequests;
      friendRequests.splice(friendRequests.indexOf(userId), 1);
      // Update friendRequests information.
      this.angularDb.object('/requests/' + loggedInUserId).update({
        friendRequests: friendRequests
      }).then((success) => {
        var requestsSent;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          requestsSent = requests.requestsSent;
          requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
          // Update requestsSent information.
          this.angularDb.object('/requests/' + userId).update({
            requestsSent: requestsSent
          }).then((success) => {
            this.loadingProvider.hide();

          }).catch((error) => {
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        this.loadingProvider.hide();
        //TODO ERROR
      });
    });
  }

  // Accept friend request.
  acceptFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    // Delete friend request.
    this.deleteFriendRequest(userId);

    this.loadingProvider.show();
    this.dataProvider.getUser(loggedInUserId).take(1).subscribe((account) => {
      var friends = account.friends;
      if (!friends) {
        friends = [userId];
      } else {
        friends.push(userId);
      }
      // Add both users as friends.
      this.dataProvider.getUser(loggedInUserId).update({
        friends: friends
      }).then((success) => {
        this.dataProvider.getUser(userId).take(1).subscribe((account) => {
          var friends = account.friends;
          if (!friends) {
            friends = [loggedInUserId];
          } else {
            friends.push(loggedInUserId);
          }
          this.dataProvider.getUser(userId).update({
            friends: friends
          }).then((success) => {
            this.loadingProvider.hide();
          }).catch((error) => {
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

  // TimeLine
  timeline(timelineId){
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.dataProvider.getUser(loggedInUserId).take(1).subscribe((account) => {
      var timeline = account.timeline;
      if (!timeline) {
        timeline = [timelineId];
      } else {
        timeline.push(timelineId);
      }
      // Add both users as friends.
      this.dataProvider.getUser(loggedInUserId).update({
        timeline: timeline
      }).then((success) => {

      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

  // ==== Like postBy
  likePost(key){
    return new Promise((resolve,reject)=>{
      this.dataProvider.postLike(key).take(1).subscribe((likes) => {
        // console.log("likes=======",likes)
        var likes = likes;
        if (!likes.length) {
          likes = [firebase.auth().currentUser.uid];
        } else {
          likes.push(firebase.auth().currentUser.uid);
        }
        // Add both users as friends.
        this.dataProvider.postLike(key).update(likes).then((success) => {
          // alert('sc')
          resolve(true)
        }).catch((error) => {
          this.loadingProvider.hide();
          console.log("err",error)
          reject(false)
        });
      });
    })
  }

  // ==== Like postBy
  delikePost(key){
    return new Promise((resolve,reject)=>{
      this.dataProvider.postLike(key).take(1).subscribe((likes) => {
        likes.splice(likes.indexOf(firebase.auth().currentUser.uid), 1);
        if(likes.length){
          //alert(likes.length)
          this.angularDb.object('likes/'+key).remove()

          this.dataProvider.postLike(key).update(likes).then((success) => {
            // alert('sc')
            resolve(true)
          }).catch((error) => {
            this.loadingProvider.hide();
            console.log("err",error)
            reject(false)
          });
        }else{
          this.angularDb.object('likes/'+key).remove()
        }

       });
    })
  }


  // ====== Dislike
  dislikePost(key){
    return new Promise((resolve,reject)=>{
      this.dataProvider.postdisLike(key).take(1).subscribe((dislikes) => {

         console.log("dislikes=======",dislikes)
        var dislikes = dislikes;
        if (!dislikes.length) {
          dislikes = [firebase.auth().currentUser.uid];
        } else {
          dislikes.push(firebase.auth().currentUser.uid);
        }
        // Add both users as friends.
        this.dataProvider.postdisLike(key).update(dislikes).then((success) => {
          // alert('sc')
          resolve(true)
        }).catch((error) => {
          this.loadingProvider.hide();
          console.log("err",error)
          reject(false)
        });
      });
    })
  }

  // ===== Deldislike
  dedislikePost(key){
    return new Promise((resolve,reject)=>{
      this.dataProvider.postdisLike(key).take(1).subscribe((dislikes) => {
        dislikes.splice(dislikes.indexOf(firebase.auth().currentUser.uid), 1);
        if(dislikes.length){
          //alert(likes.length)
          this.angularDb.object('dislikes/'+key).remove()

          this.dataProvider.postdisLike(key).update(dislikes).then((success) => {
            // alert('sc')
            resolve(true)
          }).catch((error) => {
            this.loadingProvider.hide();
            console.log("err",error)
            reject(false)
          });
        }else{
          this.angularDb.object('dislikes/'+key).remove()
        }

       });
    })
  }
  commentPost(key,comment){
    return new Promise((resolve,reject)=>{
      this.dataProvider.getComments(key).take(1).subscribe((comments:any[]) => {
        // console.log("commnets=======",comments)
        var comments = comments;
        if (!comments) {
          comments = [comment];
        } else {
          comment.push(comment);
        }
        // Add both users as friends.
        this.dataProvider.postComments(key).update(comments).then((success) => {
          resolve(true)
        }).catch((error) => {
          this.loadingProvider.hide();
          console.log("err",error)
          reject(false)
        });
      });
    })

  }
}
