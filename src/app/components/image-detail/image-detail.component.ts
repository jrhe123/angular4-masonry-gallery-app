import { Component, OnInit } from '@angular/core';


import { ImageService } from '../../services/image.service';


import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-image-detail',
	templateUrl: './image-detail.component.html',
	styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

	image: any;

	constructor(
		private imageService: ImageService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.image = this.imageService.getImage(id);
	}

}
