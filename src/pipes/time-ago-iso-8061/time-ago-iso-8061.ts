import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimeAgoIso_8061Pipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timeAgoIso_8061',
})
export class TimeAgoIso_8061Pipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(time: string, ...args) {
    var date = new Date(time);
    var myDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return myDate;
  }
}