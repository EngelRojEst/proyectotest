import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CompanyInterface } from '../models/companyInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companysCollection: AngularFirestoreCollection<CompanyInterface>;
  companys: Observable<CompanyInterface[]>;
  companyDoc: AngularFirestoreDocument<CompanyInterface>;

  constructor(public afs: AngularFirestore) {
    //this.companys = afs.collection('company').valueChanges();
    this.companysCollection = afs.collection<CompanyInterface>('company');
    this.companys = this.companysCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CompanyInterface;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
   }

   getCompanys() {
    return this.companys;
  }
  addCompany(company: CompanyInterface){
    console.log('NEW COMPANY');
    this.companysCollection.add(company);
  }
  deleteCompany(company: CompanyInterface){
    //console.log('DELETE COMPANY');
    this.companyDoc = this.afs.doc(`company/${company.id}`);
    this.companyDoc.delete();
  }
  updateCompany(company: CompanyInterface){
    //console.log('UPDATE COMPANY');
    this.companyDoc = this.afs.doc(`company/${company.id}`);
    this.companyDoc.update(company);
  }
}
