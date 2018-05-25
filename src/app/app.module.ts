import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from "ngx-cookie";
import { ConstantService } from './services/constant.service'; // Shared Services //
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './pages/header/header.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UiSwitchModule } from 'ngx-toggle-switch';
import 'rxjs/add/operator/map';
import { RestaurantViewComponent } from './pages/restaurant-view/restaurant-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    RestaurantComponent,
    RestaurantViewComponent
  ],
  imports: [
    BrowserModule,
    NgxMasonryModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    ToastrModule.forRoot(),
    AngularFontAwesomeModule,
    UiSwitchModule
  ],
  providers: [ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
