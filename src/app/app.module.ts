import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Safari1Component } from './safari1/safari1.component';
import { Safari2Component } from './safari2/safari2.component';
import { Safari3Component } from './safari3/safari3.component';
import { BookingsComponent } from './bookings/bookings.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallInfoDialogComponents } from './virtual-tour/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    Safari1Component,
    Safari2Component,
    Safari3Component,
    BookingsComponent,
    CallInfoDialogComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    CommonModule,
    
   

   
  ],
  providers: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
