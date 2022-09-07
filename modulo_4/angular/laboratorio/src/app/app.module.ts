import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './app-public-menu/home/home.component';
import { LoginComponent } from './app-public-menu/login/login.component';
import { AboutComponent } from './app-public-menu/about/about.component';
import { MenuComponent } from './app-public-menu/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AppPublicMenuComponent } from './app-public-menu/app-public-menu.component';
import { AppPrivateMenuComponent } from './app-private-menu/app-private-menu.component';
import { GaleriaComponent } from './app-private-menu/galeria/galeria.component';
import { DashboardComponent } from './app-private-menu/dashboard/dashboard.component';
import { ProfileComponent } from './app-private-menu/profile/profile.component';
import { CrudComponent } from './app-private-menu/crud/crud.component';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './app-public-menu/header/header.component';
import { FooterComponent } from './app-public-menu/footer/footer.component';
import { MenuPrivateComponent } from './app-private-menu/menu-private/menu-private.component';
import { HeaderPrivateComponent } from './app-private-menu/header-private/header-private.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    MenuComponent,
    AppPublicMenuComponent,
    AppPrivateMenuComponent,
    GaleriaComponent,
    DashboardComponent,
    ProfileComponent,
    CrudComponent,
    HeaderComponent,
    FooterComponent,
    MenuPrivateComponent,
    HeaderPrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
