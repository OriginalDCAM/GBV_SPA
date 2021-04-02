import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
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
import {ViewUsersComponent} from "./pages/users/view-users/view-users.component";
import {AddEditComponent} from "./pages/users/add-edit/add-edit.component";







@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MapComponent,
    LoginComponent,
    DashboardComponent,
    ViewUsersComponent,
    AddEditComponent
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
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'dashboard/view-users', component: ViewUsersComponent, canActivate: [AuthGuard]},
      { path: 'dashboard/add', component: AddEditComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/edit/:id', component: AddEditComponent, canActivate: [AuthGuard] }
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
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
