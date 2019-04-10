import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve } from 'url';

@Injectable({ providedIn: 'root' })
export class AppService {
	constructor(private firestore: AngularFirestore) { }

	add(data: any) {
		return new Promise((resolve, reject) =>{
			this.firestore
				.collection("todo")
				.add(data)
				.then(() => resolve())
				.catch((err) => reject(err));
		});
	}
}
