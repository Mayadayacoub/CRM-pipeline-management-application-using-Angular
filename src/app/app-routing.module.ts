import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { ActivitiesComponent } from './components/activities/activities.component';

const routes: Routes = [
  {
    path: 'shippingDetails',
    component: ShippingDetailsComponent,
  },
  { path: 'deals', component: MainLayoutComponent },
  { path: 'activities', component: ActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
