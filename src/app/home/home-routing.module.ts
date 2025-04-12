import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ProductGalleryComponent} from "./components/product-gallery/product-gallery.component";
import {ProductdetailsComponent} from "./components/productdetails/productdetails.component";

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
