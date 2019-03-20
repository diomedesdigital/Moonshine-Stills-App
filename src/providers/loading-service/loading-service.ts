import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';


/*
  Generated class for the LoadingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingService{
  loading:any;

  constructor(private loadingCtrl: LoadingController){
  }

  show(){
    this.loading = this.loadingCtrl.create({
        content: 'Loading...'
    });
    this.loading.present();
  }

  dismiss() {
    this.loading.dismiss();
  }
}
