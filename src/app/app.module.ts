import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { UpperHeaderComponent } from './core/header/upper-header/upper-header.component';
import { MiddleHeaderComponent } from './core/header/middle-header/middle-header.component';
import { LowerHeaderComponent } from './core/header/lower-header/lower-header.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ProductService } from './_services/Product.service';
import { routing } from './app.routing';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpperHeaderComponent,
    MiddleHeaderComponent,
    LowerHeaderComponent,
    ProductsComponent,
    ProductItemComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
