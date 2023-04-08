import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FilterSearchPipe } from './Models/filter-search.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ActivitiesComponent } from './components/activities/activities.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShippingDetailsComponent,
    MainLayoutComponent,
    SearchPipe,
    FilterSearchPipe,
    LoadingComponent,
    ActivitiesComponent,


  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,MatChipsModule,DragDropModule, FormsModule,MatInputModule,MatIconModule,MatTooltipModule],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
