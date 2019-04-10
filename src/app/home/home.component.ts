import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	homeForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private service: AppService
	) { }

	ngOnInit() {
		this.homeForm = this.formBuilder.group({
			item: ["", Validators.required],
		});
	}

	onSubmit() {
		this.service.add(this.homeForm.value).then((res: any) => { });
	}

	get form() {
		return this.homeForm.controls
	}

}
