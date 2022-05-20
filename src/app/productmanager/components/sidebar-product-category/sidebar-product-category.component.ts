import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-product-category',
  templateUrl: './sidebar-product-category.component.html',
  styleUrls: ['./sidebar-product-category.component.css']
})
export class SidebarProductCategoryComponent implements OnInit {
  //showFiller = false;
  Sidebar = true;
  click = true;
  constructor() { }

  ngOnInit(): void {
    
  }
  category:any[] = [
     'Shoes',
     'Suites',
     "Men's wear",
     'Jewellries',
     'Makeups',
     "Women's wear",
     'Bikinis',
     'Gowns',
     'Accessories'
  ];
  pCategory: string[] = [
    'ShoeCategory',
  ]
toggleSideBar():void{
  this.Sidebar = !this.Sidebar
}
}
