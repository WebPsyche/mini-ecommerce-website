import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmanagerAppComponent } from './productmanager-app.component';
import { SidebarProductCategoryComponent } from './components/sidebar-product-category/sidebar-product-category.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'', component:ProductmanagerAppComponent,
      children:[
        {path:'', component: MainContentComponent }
      ]
    },
      {path:'', redirectTo: '', pathMatch:'full'}
  
]


@NgModule({
  declarations: [
    MainContentComponent,
    ProductmanagerAppComponent,
    SidebarProductCategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductmanagerModule { }
