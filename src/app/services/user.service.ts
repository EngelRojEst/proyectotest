import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserInterface } from '../models/userInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<UserInterface>;
  users: Observable<UserInterface[]>;
  userDoc: AngularFirestoreDocument<UserInterface>;

  constructor(public afs: AngularFirestore) {
    //this.users = afs.collection('users').valueChanges();
    this.usersCollection = afs.collection<UserInterface>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log('hgjhgjkj')
        const data = a.payload.doc.data() as UserInterface;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
   }

   getUsers() {
     console.log('asdfghj');
     return this.users;
   }
   addUser(user: UserInterface){
     console.log('NEW USER');
     this.usersCollection.add(user);
     
   }
   deleteUser(user: UserInterface){
     //console.log('DELETE USER');
     this.userDoc = this.afs.doc(`users/${user.id}`);
     this.userDoc.delete();
   }
   updateUser(user: UserInterface){
     //console.log('Update');
     this.userDoc = this.afs.doc(`users/${user.id}`);
     this.userDoc.update(user);
   }
}
