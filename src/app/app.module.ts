import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, CatnavigationComponent, HomeComponent],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
