import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from './shared/material.module';
//import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexboxComponent } from './app/flexbox/flexbox.component';
import { ProductmanagerModule } from './productmanager/productmanager.module';

const routes:Routes = [
  {path:'productmanager', loadChildren:()=> import('./productmanager/productmanager.module').then(m=>m.ProductmanagerModule)},
  {path:'""', redirectTo:'productmanager', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FlexboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    //MaterialModule,
    FlexLayoutModule,
    //FormsModule,
    ProductmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
