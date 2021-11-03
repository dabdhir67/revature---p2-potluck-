import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeService } from './services/recipe.service';
// import { SignupService } from './services/signup.service';
import { SignupComponent } from './SignupView/signup/signup.component';
import { ChefService } from './services/chef.service';
import { LoginComponent } from './LoginView/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    SignupComponent,
    LoginComponent
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
