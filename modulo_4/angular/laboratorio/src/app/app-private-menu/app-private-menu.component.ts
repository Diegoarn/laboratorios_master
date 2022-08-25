import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-private-menu',
  templateUrl: './app-private-menu.component.html',
  styleUrls: ['./app-private-menu.component.scss'],
})
export class AppPrivateMenuComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/dashboard'], { relativeTo: this.route });
  }
}
