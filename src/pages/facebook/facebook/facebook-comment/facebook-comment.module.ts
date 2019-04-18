import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookCommentPage } from './facebook-comment';


@NgModule({
  declarations: [
    FacebookCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(FacebookCommentPage),
  ],
})
export class FacebookCommentPageModule {}
