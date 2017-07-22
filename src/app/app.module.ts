import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// Router
import { RouterModule } from '@angular/router';


// Modules
import { AlertModule } from 'ng2-bootstrap';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';

// Services
import { ImageService } from './services/image.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';


const appRoute = [
	{path:"gallery", component: GalleryComponent},
	{path:"image/:id", component: ImageDetailComponent},
	{path:"", redirectTo: "/gallery", pathMatch: "full"}
];


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		GalleryComponent,
		ImageDetailComponent,

		// Pipes
		FilterPipe
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,

		// Router
		RouterModule.forRoot(appRoute),

		// bootstrap alert
		AlertModule.forRoot()
	],
	providers: [
		ImageService,

		// Pipes
		FilterPipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
