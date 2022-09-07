import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Guard1Guard implements CanActivate {
  user: string | null = '';
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.user = sessionStorage.getItem('usersession');
    if (this.user == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
