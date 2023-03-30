import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewGroupListComponent } from './view-group-list/view-group-list.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';



@NgModule({
  declarations: [
    ViewGroupListComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GroupModule { }
