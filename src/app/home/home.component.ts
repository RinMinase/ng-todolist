import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	addForm: FormGroup;
	list: any;

	constructor(
		private formBuilder: FormBuilder,
		private firestore: AngularFirestore,
		private service: AppService
	) { }

	ngOnInit() {
		this.addForm = this.formBuilder.group({ add: ['', Validators.required] })
		this.retrieve();
	}

	add() {
		if (this.addForm.valid) {
			this.service.add(this.addForm.controls.add.value);
		}
	}

	getData(item: any) {
		return item.payload.doc.data();
	}

	private retrieve() {
		this.firestore
			.collection('todo', ref => ref.orderBy('timestamp'))
			.snapshotChanges()
			.subscribe(response => this.list = response);
	}

}
