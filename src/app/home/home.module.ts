import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {CatnavigationComponent} from "./components/catnavigation/catnavigation.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HomeComponent} from "./home.component";




@NgModule({
  declarations: [HeaderComponent,CatnavigationComponent, HomeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
