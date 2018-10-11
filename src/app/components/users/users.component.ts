import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../models/userInterface';
import { UserService } from '../../services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[];
  editState: boolean = false;
  userToEdit: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      //console.log(users);
      this.users = users;
    })
  }

  editUser(event, user: UserInterface){
    this.editState = true;
    this.userToEdit = user;
  }
  onUpdateUser(user: UserInterface){
    this.userService.updateUser(user);
    this.clearState();
  }
  deleteUser(event, user:UserInterface){
    this.userService.deleteUser(user);
    this.clearState();
  }


  clearState(){
    this.editState = false;
    this.userToEdit = null;


  }

}
