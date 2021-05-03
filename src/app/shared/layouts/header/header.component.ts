import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/auth-service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
