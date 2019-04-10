import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [{
	path: "",
	pathMatch: "full",
	redirectTo: "",
}];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		BrowserAnimationsModule,

		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
