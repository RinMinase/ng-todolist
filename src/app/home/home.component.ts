import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	addField = new FormControl('');
	list: any;

	constructor(
		private firestore: AngularFirestore,
		private service: AppService
	) { }

	ngOnInit() {
		this.retrieve();
	}

	add() {
		this.service.add(this.addField.value);
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
