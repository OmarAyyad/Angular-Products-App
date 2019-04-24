import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './features/products/products.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';

const appRoutes: Routes = [
    {path:'products/listing',component:ProductsComponent},
    {path:'products/add',component:AddProductComponent},
    {path:'products/edit/:id',component:AddProductComponent},
    {path:'products/details/:id',component:ProductDetailsComponent},
    {path:'home',component:ProductsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',redirectTo:'home',pathMatch:'full'}
    
];

export const routing = RouterModule.forRoot(appRoutes);