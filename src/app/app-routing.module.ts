import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Safari1Component } from './safari1/safari1.component';
import { Safari2Component } from './safari2/safari2.component';
import { Safari3Component } from './safari3/safari3.component';
import { PaymentComponent } from './payment/payment.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingsComponent } from './bookings/bookings.component';




const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'safari1', component: Safari1Component },
  {path: 'safari2', component: Safari2Component},
  {path: 'safari3', component: Safari3Component },
  { path: 'pay', component: PaymentComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  

  
  ];
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
