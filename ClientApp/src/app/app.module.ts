import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {DatePickerModule, DateInputsModule} from "@progress/kendo-angular-dateinputs";
import { LabelModule } from '@progress/kendo-angular-label';
import {RegisterComponent} from "./register/register.component";
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {MapComponent} from "./map/map.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";








@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MapComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'map', component: MapComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
    ]),
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    DatePickerModule,
    ReactiveFormsModule,
    LabelModule,
    DateInputsModule,
    GridModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
