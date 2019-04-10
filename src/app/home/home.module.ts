import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: HomeComponent }]),

		MatButtonModule,
		MatCheckboxModule,
		MatGridListModule,
	]
})
export class HomeModule { }
