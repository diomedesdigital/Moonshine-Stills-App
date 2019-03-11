import { NgModule } from '@angular/core';
import { SafePipe } from '../pipes/pipes/safe/safe';
import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { GroupPipe } from '../pipes/group';

/**
 * Generated class for the PipesModulePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@NgModule({
  declarations:[
    SafePipe,
    FriendPipe,
    SearchPipe,
    ConversationPipe,
    DateFormatPipe,
    GroupPipe,
  ],
  imports:[],

  exports:[
  SafePipe,
  FriendPipe,
  SearchPipe,
  ConversationPipe,
  DateFormatPipe,
  GroupPipe,
]

})
export class PipesModule{}
