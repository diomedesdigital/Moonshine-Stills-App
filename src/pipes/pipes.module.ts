import { NgModule } from '@angular/core';
import { SafePipe } from '../pipes/pipes/safe/safe';
import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { GroupPipe } from '../pipes/group';
import { TimeAgoPipe } from '../pipes/time-ago/time-ago';
import { TimeAgoIso_8061Pipe } from '../pipes/time-ago-iso-8061/time-ago-iso-8061';

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
    TimeAgoPipe,
    TimeAgoIso_8061Pipe,
  ],
  imports:[],

  exports:[
  SafePipe,
  FriendPipe,
  SearchPipe,
  ConversationPipe,
  DateFormatPipe,
  GroupPipe,
  TimeAgoPipe,
  TimeAgoIso_8061Pipe,
]

})
export class PipesModule{}
