import { Component } from '@angular/core';
import {CartModel} from './cart-model';
import {CartItemModel} from './cart-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  year = (new Date().getFullYear());
  author = 'Amon Mwombeki';
    
    appCart: CartModel = {
        totalprice: 0,
        totalquantity: 0,
        items: []
    };
}
