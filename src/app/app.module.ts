import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';
import { TicketService } from './services/ticket.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { CompanyComponent } from './components/company/company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    AddUsersComponent,
    CompanyComponent,
    AddCompanyComponent,
    TicketComponent,
    AddTicketComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'tickets'),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, CompanyService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
