import { Injectable } from '@angular/core';
import { CartModel} from './cart-model';
import { CartItemModel } from './cart-item-model';

@Injectable()
export class CartService {

  constructor() { }
    cart: CartModel = {
        totalprice: 0,
        totalquantity: 0,
        items: []
    };

}
