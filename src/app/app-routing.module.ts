import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UsersComponent } from './components/users/users.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyComponent} from './components/company/company.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
  

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'addUser', component: AddUsersComponent},
    {path: 'users', component: UsersComponent},
    {path: 'addCompamy', component: AddCompanyComponent},
    {path: 'Company', component: CompanyComponent},
    {path: 'addTicket', component: AddTicketComponent},
    {path: 'ticket', component: TicketComponent},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }