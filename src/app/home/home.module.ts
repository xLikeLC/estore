import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsService } from './services/product/products.service';
import { ProductsStoreItem } from './services/product/products.storeItem';
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import {CartStoreItem} from "./services/cart/cart.storeItem";
import { CartComponent } from './components/cart/cart.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
    ProductGalleryComponent,
    ProductdetailsComponent,
    CartComponent,
    UserSignupComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, SharedModule, HttpClientModule,RouterModule,HomeRoutingModule,ReactiveFormsModule],
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsService,
    ProductsStoreItem,
    CartStoreItem
  ],
})
export class HomeModule {}
