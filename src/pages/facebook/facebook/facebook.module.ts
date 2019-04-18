import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookPage } from './facebook';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    FacebookPage
  ],
  imports: [
    IonicPageModule.forChild(FacebookPage),
    PipesModule
  ]
})
export class FacebookPageModule {}
