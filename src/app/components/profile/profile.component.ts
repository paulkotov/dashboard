import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/UsersService/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public data;
  constructor(private usersServise: UsersService) { }

  ngOnInit() {
    this.data = {
      name: 'Anton P.',
      userName: 'administrator',
      date: '21.03.2019',
      selectedGame: 'csgo',
      status: true
    };
  }

}
