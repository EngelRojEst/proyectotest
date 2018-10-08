import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';
import { TicketService } from './services/ticket.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { UsersComponent } from './componets/users/users.component';
import { AddUsersComponent } from './componets/add-users/add-users.component';
import { CompanyComponent } from './componets/company/company.component';
import { AddCompanyComponent } from './componets/add-company/add-company.component';
import { TicketComponent } from './componets/ticket/ticket.component';
import { AddTicketComponent } from './componets/add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    AddUsersComponent,
    CompanyComponent,
    AddCompanyComponent,
    TicketComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'tickets'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UserService, CompanyService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
