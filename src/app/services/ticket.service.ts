import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { TicketInterface } from '../models/ticketInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketsCollection: AngularFirestoreCollection<TicketInterface>;
  tickets: Observable<TicketInterface[]>;
  ticketDoc: AngularFirestoreDocument<TicketInterface>;

  constructor(public afs: AngularFirestore) {
    this.tickets = afs.collection('ticket').valueChanges();
   }

   getTickets() {
    return this.tickets;
  }
}
