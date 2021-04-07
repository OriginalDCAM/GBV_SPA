import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import {LabelModule} from "@progress/kendo-angular-label";
import {DateInputsModule} from "@progress/kendo-angular-dateinputs";
import {GridModule} from "@progress/kendo-angular-grid";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {ButtonModule} from "@progress/kendo-angular-buttons";
import {FormFieldModule, TextBoxModule} from "@progress/kendo-angular-inputs";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    LabelModule,
    DateInputsModule,
    GridModule,
    DropDownsModule,
    ButtonModule,
    TextBoxModule,
    FormFieldModule
  ],
  declarations: [
    LayoutComponent,
    ViewUsersComponent,
    AddEditComponent
  ]
})
export class UsersModule { }
