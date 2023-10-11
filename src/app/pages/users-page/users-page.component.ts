import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/UsersService/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public users;

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
    // this.usersService.getUsers().subscribe(data => this.users = data);
      this.usersService.getUsers().subscribe(({users}) => {
      console.log('users: ', users);
      this.users = users;
    });
  }

  addUser() {
    this.router.navigate(['/user/new']);
  }

}
