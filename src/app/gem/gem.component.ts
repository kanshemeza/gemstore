import { Component, OnInit, Input } from '@angular/core';

import {GemModel} from '../gem-model';

import {CartModel} from '../cart-model';
import {CartItemModel} from '../cart-item-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
title: string = 'Gem Component';
    @Input()
    gem: GemModel;
    
    @Input()
    gemCart: CartModel;

  constructor() { }

  ngOnInit() {
  }
    addToCart(){
        
        this.gem.inventory = this.gem.inventory - 1;
        
        this.gemCart.totalquantity = this.gemCart.totalquantity + 1;
        
        this.gemCart.totalprice = this.gemCart.totalprice + this.gem.price;
        
        let existingGem = this.gemCart.items.find((item) => {return item.gemid === this.gem.id })
        
        if(existingGem){
            existingGem.quantity = existingGem.quantity + 1;
            
        }  else {
            
           let newGem: CartItemModel = {
                gemid: this.gem.id,
                name: this.gem.name,
                unitprice: this.gem.price,
                quantity: 1
            }
            this.gemCart.items.push(newGem);
        }                                
           
    }

}
