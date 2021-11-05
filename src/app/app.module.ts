import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeComponent } from './KitchenView/add-recipe/add-recipe.component';
import { RecipeService } from './services/recipe.service';
import { RecipeEditComponent } from './KitchenView/recipe-edit/recipe-edit.component';
import { RecipeDeleteComponent } from './KitchenView/recipe-delete/recipe-delete.component';

import { SignupComponent } from './SignupView/signup/signup.component';
import { ChefService } from './services/chef.service';
import { LoginComponent } from './LoginView/login/login.component';
import { KitchenComponent } from './KitchenView/kitchen/kitchen.component';
import { MarketComponent } from './MarketView/market/market.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeEditComponent,
    RecipeDeleteComponent,
    AddRecipeComponent,
    SignupComponent,
    LoginComponent,
    KitchenComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [ChefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
