import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-public-menu',
  templateUrl: './app-public-menu.component.html',
  styleUrls: ['./app-public-menu.component.scss'],
})
export class AppPublicMenuComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}
