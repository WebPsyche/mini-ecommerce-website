import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productmanager-app',
  template: `<app-sidebar-product-category></app-sidebar-product-category> `,
  styles: [
  ]
})

export class ProductmanagerAppComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

}
