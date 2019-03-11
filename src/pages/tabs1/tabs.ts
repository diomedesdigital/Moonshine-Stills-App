import { Component, ViewChild } from '@angular/core';

import { HomePage1 } from '../home1/home';
import { CartPage } from '../cart/cart';
import { CollectionsPage } from '../collections/collections';
import { SuperTabsController, SuperTabs } from 'ionic2-super-tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage1 {
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  collections = CollectionsPage;
  tab1Root = HomePage1;
  tab4Root = CartPage;

  constructor(private superTabsCtrl: SuperTabsController) {
  	//this.superTabsCtrl.slideTo(2);
  }
}
