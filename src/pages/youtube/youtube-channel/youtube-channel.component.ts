import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { YoutubeService } from '../shared/services/youtube.service';
import { YoutubeChannelVideoComponent } from '../youtube-channel-video/youtube-channel-video.component';

@Component({
	templateUrl: './youtube-channel.html',
	providers: [ YoutubeService ]
})
export class YoutubeChannelComponent {

	videos: any;
	loader: any;

	constructor(
		private youtubeService: YoutubeService,
		private navController: NavController,
		private loadingController: LoadingController) {}

	ngOnInit() {
		this.loader = this.loadingController.create({
			content: "Please wait"
		});
		this.getChannel();
	}

	getChannel() {
		this.youtubeService.getChannel()
		.subscribe(result => {
			this.videos = result.items;
			this.loader.dismiss();	
		}, error => {
			this.loader.dismiss();
		});
	}

	loadVideo(video) {
		this.navController.push(YoutubeChannelVideoComponent, {
			video: video
		});
	}

}
