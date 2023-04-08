import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';

const routes: Routes = [{
  path:'shippingDetails',component:ShippingDetailsComponent,

},{path:'deals',component:MainLayoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
