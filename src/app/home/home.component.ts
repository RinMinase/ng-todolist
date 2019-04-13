import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	homeForm: FormGroup;
	list: any;

	constructor(
		private formBuilder: FormBuilder,
		private firestore: AngularFirestore,
		private service: AppService
	) { }

	ngOnInit() {
		this.homeForm = this.formBuilder.group({
			item: ['', Validators.required],
		});

		this.retrieve();
	}

	onSubmit() {
		this.service.add(this.homeForm.value).then((res: any) => { });
	}

	get form() {
		return this.homeForm.controls
	}

	getData(item: any) {
		return item.payload.doc.data();
	}

	private retrieve() {
		this.firestore.collection('todo')
			.snapshotChanges()
			.subscribe(response => this.list = response);
	}

}
