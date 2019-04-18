import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormLayoutPage } from '../form-layout/form-layout';
import { FiltersPage } from '../filters/filters';
import { TimelineAnythingPage } from '../timeline-anything/timeline-anything';
import { TimelineDiyPage } from '../timeline-diy/timeline-diy';
import { TimelineRecipesPage } from '../timeline-recipes/timeline-recipes';
import { TimelineCulturePage } from '../timeline-culture/timeline-culture';

@Component({
  selector: 'forms-page',
  templateUrl: 'forms.html'
})
export class FormsPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(public nav: NavController) {
    this.items = [
      { title: 'Forms Examples', component: FormLayoutPage },
      { title: 'Filters', component: FiltersPage },
      //{ title: 'DIY Moonshine Making', component: TimelineDiyPage },
      //{ title: 'Moonshine Recipes', component: TimelineRecipesPage },
      //{ title: 'Moonshine Culture', component: TimelineCulturePage },
      //{ title: 'Anything', component: TimelineAnythingPage },            

    ];
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }
}
