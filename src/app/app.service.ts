import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AppService {
	constructor(private firestore: AngularFirestore) { }

	add(data: string) {
		return new Promise((resolve, reject) =>{
			this.firestore
				.collection("todo")
				.add({
					deleted: false,
					status: false,
					value: data,
					timestamp: new Date().getTime(),
				})
				.then(() => resolve())
				.catch((err) => reject(err));
		});
	}
}
