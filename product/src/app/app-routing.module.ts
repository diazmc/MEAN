import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductCreationComponent } from './product-creation/product-creation.component'
import { ProductEditComponent } from './product-edit/product-edit.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductCreationComponent },
  { path: 'products/edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})

export class AppRoutingModule { }
