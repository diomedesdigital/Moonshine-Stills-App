import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RssPage } from './rss';

@NgModule({
  declarations: [
    RssPage,
  ],
  imports: [
    IonicPageModule.forChild(RssPage),
  ],
})
export class RssPageModule {}
