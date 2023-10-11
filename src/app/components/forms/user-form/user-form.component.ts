import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/UsersService/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private id;
  public user: User;
  public roles = ['admin', 'player', 'bot'];
  public games = ['csgo', 'warcraft', 'dota'];
  public balance = 0;
  public strategy;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    if (this.id && this.id !== 'new') {
      this.usersService.getUserById(this.id).subscribe(user => {
        this.user = user;
      });
    } else {
      this.user = new User();
    }
  }

  // getUserById(id) {
  //   this.user = {
  //     name: 'Alex',
  //     email: 'mail@mail.t',
  //     password: '',
  //     role: 'Admin',
  //     game: 'csgo',
  //     isActive: false
  //   };
  // }

  setUserRole(event) {
    this.user.role = event.target.value;
  }

  setUserGame(event) {
    this.user.game = event.target.value;
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
