import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPublicMenuComponent } from './app-public-menu/app-public-menu.component';
import { LoginComponent } from './app-public-menu/login/login.component';
import { HomeComponent } from './app-public-menu/home/home.component';
import { AboutComponent } from './app-public-menu/about/about.component';
import { AppPrivateMenuComponent } from './app-private-menu/app-private-menu.component';
import { CrudComponent } from './app-private-menu/crud/crud.component';
import { DashboardComponent } from './app-private-menu/dashboard/dashboard.component';
import { GaleriaComponent } from './app-private-menu/galeria/galeria.component';
import { ProfileComponent } from './app-private-menu/profile/profile.component';
import { Guard1Guard } from 'src/guards/guard1.guard';

const routes: Routes = [
  {
    path: '',
    component: AppPublicMenuComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {
    path: 'apppublic',
    component: AppPublicMenuComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {
    path: 'appprivate',
    component: AppPrivateMenuComponent,
    canActivate: [Guard1Guard],
    children: [
      {
        path: 'crud',
        component: CrudComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'galeria',
        component: GaleriaComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
