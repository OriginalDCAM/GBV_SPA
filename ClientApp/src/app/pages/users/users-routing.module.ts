import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import {GridModule} from "@progress/kendo-angular-grid";
import {LabelModule} from "@progress/kendo-angular-label";
import {DateInputsModule} from "@progress/kendo-angular-dateinputs";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {AppRoutingModule} from "../../app-routing.module";
import {ButtonsModule} from "@progress/kendo-angular-buttons";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: ViewUsersComponent },
      { path: 'add', component: AddEditComponent },
      { path: 'edit/:id', component: AddEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    GridModule,
    LabelModule,
    DateInputsModule,
    GridModule,
    DropDownsModule,
    ButtonsModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
