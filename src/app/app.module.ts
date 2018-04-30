import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GemComponent } from './gem/gem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {FormsModule} from '@angular/forms';
import { AvatarService } from './avatar.service';
import { AppRoutingModule } from './/app-routing.module';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    CartComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [AvatarService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
