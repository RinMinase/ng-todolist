import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { 
	MatButtonModule, 
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatListModule,
	MatCheckboxModule, 
} from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: HomeComponent }]),
		ReactiveFormsModule,

		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
	]
})
export class HomeModule { }
