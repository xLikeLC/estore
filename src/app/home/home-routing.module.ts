import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ProductGalleryComponent} from "./components/product-gallery/product-gallery.component";
import {ProductdetailsComponent} from "./components/productdetails/productdetails.component";
import {CartComponent} from "./components/cart/cart.component";
import {UserSignupComponent} from "./components/users/user-signup/user-signup.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'products',
        component: ProductGalleryComponent,
      },
      {
        path:'product/:id',
        component: ProductdetailsComponent,
      },
      {
        path:'cart',
        component:CartComponent,
      },
      {
        path:'signup',
        component:UserSignupComponent,
      }
    ]
  },
]

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {

}
