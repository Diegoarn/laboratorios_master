import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  loginPage() {
    sessionStorage.setItem('usersession', this.username);
    let login = this.authservice.login(this.username, this.password);
    if (login) {
      this.router.navigate(['/appprivate/crud']);
    }
  }

  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {
    sessionStorage.removeItem('usersession');
  }
}
