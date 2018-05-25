import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantViewComponent } from './pages/restaurant-view/restaurant-view.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forget_password', component: ForgetPasswordComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'rest_view/:id', component: RestaurantViewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
