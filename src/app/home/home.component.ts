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

	edit($event: any, data: any) {
		$event.target.blur();
		const value = $event.target.outerText.replace(/(\r\n|\n|\r)/gm,"");
		$event.target.innerText = value;

		this.firestore.collection('todo')
			.doc(data.payload.doc.id)
			.set({ value }, { merge: true });
	}

	delete(data: any) {
		this.firestore.collection('todo')
			.doc(data.payload.doc.id)
			.set({ deleted: true }, { merge: true });
	}

	getData(item: any) {
		return item.payload.doc.data();
	}

	hardDelete(data: any) {
		this.firestore.collection('todo')
			.doc(data.payload.doc.id)
			.delete();
	}

	toggleStatus(data: any) {
		if (this.getData(data).status === true) {
			this.firestore.collection('todo')
				.doc(data.payload.doc.id)
				.set({ status: false }, { merge: true });
		} else {
			this.firestore.collection('todo')
				.doc(data.payload.doc.id)
				.set({ status: true }, { merge: true });
		}
	}

	private retrieve() {
		this.firestore
			.collection('todo', ref => ref
				.orderBy('timestamp')
				.where('deleted', '==', false))
			.snapshotChanges()
			.subscribe(response => this.list = response);
	}

}
