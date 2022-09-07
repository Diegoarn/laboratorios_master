import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss']
})
export class HeaderPrivateComponent implements OnInit {

  userLogged: string|null = '';
  constructor() {}

  ngOnInit(): void {
    this.userLogged = sessionStorage.getItem('usersession');

}
}
