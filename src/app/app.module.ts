import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { environment } from '@env/environment';

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

		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,

		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
