import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmanagerAppComponent } from './productmanager-app.component';
import { SidebarProductCategoryComponent } from './components/sidebar-product-category/sidebar-product-category.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    ProductmanagerAppComponent,
    SidebarProductCategoryComponent
  ]
})
export class ProductmanagerModule { }
