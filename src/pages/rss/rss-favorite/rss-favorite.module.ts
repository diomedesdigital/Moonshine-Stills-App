import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RssFavoritePage } from './rss-favorite';

@NgModule({
  declarations: [
    RssFavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(RssFavoritePage),
  ],
})
export class RssFavoritePageModule {}
