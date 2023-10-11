import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/AuthService/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  public selectedOption: string;

  constructor(private authService: AuthService,
              private router: Router) {}

  selectMenu(event) {
    if (event.value === 'logout') {
      this.logOut();
    }
  }

  logOut() {
    this.authService.logoutUser();
    this.router.navigateByUrl('/login');
  }

  profile() {

  }
}
