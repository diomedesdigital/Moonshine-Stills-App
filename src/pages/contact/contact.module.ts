import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { ContactPage } from './contact.page';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { MapsService } from '../../services/maps.service';

@NgModule({
	imports: [IonicModule],
	declarations: [ContactPage],
	entryComponents: [ContactPage],
	providers: [
		EmailService,
		CallService,
		InAppBrowserService,
		MapsService
	]
})
export class ContactModule {

}