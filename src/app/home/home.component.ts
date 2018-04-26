import { Component, OnInit, Input } from '@angular/core';

import {GemModel} from '../gem-model';
import {CartModel} from '../cart-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    @Input()
    homeCart: CartModel;
    
    homeGems: GemModel = [{
        id: '1',
        name: 'Dodecahedron',
        price: 7.25,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine.... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-01.gif',
        inventory: 10,
        colors: ['green', 'blue'],
        reviews: [
            {
                id: 1,
                rating: 5,
                author: 'amwombeki@gmail.com',
                body: 'Great product!',
                createdate: '4/25/2018'
            }
        ]
    },{
        id: '2',
        name: 'Pentagon',
        price: 5.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine.... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-02.gif',
        inventory: 0,
        colors: ['red', 'purple']
    },
                          {
        id: '3',
        name: 'Hexagon',
        price: 9.95,
        description: 'Some gems have hidden qualities beyond their lustre, beyond their shine.... Dodecahedron is one of those gems',
        fullImagePath: './assets/gem-03.gif',
        inventory: 6,
        colors: ['yellow','bown']
    }
                         ];

  constructor() { }

  ngOnInit() {
  }

}
