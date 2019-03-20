import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RssHomePage } from './rss-home';

@NgModule({
  declarations: [
    RssHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RssHomePage),
  ],
})
export class RssHomePageModule {}
