import { Component, Input, OnInit, Output } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {Observable, Observer} from 'rxjs';

export interface AnimateTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
  
})


export class MainContentComponent {
  centered = true;
  //showMains = false
  asyncTabs: Observable<AnimateTab[]>;
  labelIcon:string = '<mat-icon>description</mat-icon'
 
  
  radius: number = 2;
  color: string = 'red';
  
  products:any = [
    { "productName" : 'Crisp',
      "imageUrl" : "https://th.bing.com/th/id/OIP.rut6R1rfiMdosVrLT8PZfQHaI0?w=145&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "price": 5000,
      "id" : 123,
      "Description" : "Your fashion hub ",
      "showMain" :false,
      toggleMain(): void { this.showMain = !this.showMain}
  },
  { "productName" : 'Gown',
      "imageUrl" : "https://th.bing.com/th/id/OIP.rut6R1rfiMdosVrLT8PZfQHaI0?w=145&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "price": 5000,
      "id" : 123,
      "Description" : "Your fashion hub ",
      "showMain" :false,
      toggleMain(): void { this.showMain = !this.showMain}
  },
  { "productName" : 'Cocktail',
      "imageUrl" : "https://th.bing.com/th/id/OIP.rut6R1rfiMdosVrLT8PZfQHaI0?w=145&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "price": 5000,
      "id" : 121,
      "Description" : "Your fashion hub is raedy and steady",
      "showMain" :false,
      toggleMain(): void { this.showMain = !this.showMain}
  },
  { "productName" : 'Ghost',
      "imageUrl" : "https://th.bing.com/th/id/OIP.rut6R1rfiMdosVrLT8PZfQHaI0?w=145&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "price": 5000,
      "id" : 121,
      "Description" : "Your fashion hub is raedy and steady",
      "showMain" : false,
      toggleMain(): void { this.showMain = !this.showMain}
      },
]
  
constructor() {
  this.asyncTabs = new Observable(function (observer: Observer<AnimateTab[]>) {
      setTimeout(() => {
        observer.next([
          { label: 'First', content: 'Content 1' },
          { label: 'Second', content: 'Content 2' },
          { label: 'Third', content: 'Content 3' },
        ]);
      }, 1000);
    });
  }
}
