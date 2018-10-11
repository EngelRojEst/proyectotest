import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../models/userInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  user: UserInterface = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    type: '',
    password: '',
    status: false,
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSaveUser(myForm: NgForm){
    this.userService.addUser(this.user);
  }

}
