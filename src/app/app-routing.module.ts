import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
