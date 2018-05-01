import { Component, OnInit, Input } from '@angular/core';
import { CartItemModel} from '../cart-item-model';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GemModel} from '../gem-model';
import {CartModel} from '../cart-model';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
   
    homeCart: CartModel;
    
    homeGems: GemModel[]

  constructor( private httpClient: HttpClient, private cartService: CartService ) {
  }

  ngOnInit() {
      this.homeCart = this.cartService.cart;
      
     /* console.log(JSON.stringify(this.homeGems));
      this.httpClient.get('/assets/gems.json').subscribe((data: GemModel) => { this.homeGems = data;});*/
      
      this.httpClient.get('http://localhost:57726/api/values').subscribe((data: GemModel[]) => {
          this.homeGems = data;
      });
      
  }

}
