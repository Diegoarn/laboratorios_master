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
    let login = this.authservice.login(this.username, this.password);
    if (login == true) {
      this.router.navigate(['/appprivate']);
    }
  }

  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {}
}
