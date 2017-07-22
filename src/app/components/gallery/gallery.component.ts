import { Component, OnInit, OnChanges, Input } from '@angular/core';


import { ImageService } from '../../services/image.service';


@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

	visibleImages: any[] = [];
	@Input() filterBy?:string = 'all';

	constructor(
		private imageService: ImageService
	) {
		this.visibleImages = this.imageService.getImages();
	}

	ngOnInit() {
	}

	ngOnChanges(){
		this.visibleImages = this.imageService.getImages();
	}

}
