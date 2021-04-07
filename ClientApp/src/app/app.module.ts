import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from './auth/jwt.interceptor';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {DatePickerModule, DateInputsModule} from "@progress/kendo-angular-dateinputs";
import { LabelModule } from '@progress/kendo-angular-label';
import {RegisterComponent} from "./pages/register/register.component";
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {MapComponent} from "./pages/map/map.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

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
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    DatePickerModule,
    ReactiveFormsModule,
    LabelModule,
    DateInputsModule,
    GridModule,
    DropDownsModule,
    AppRoutingModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { };
