import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { ViewGroupListComponent } from './view-group-list/view-group-list.component';



@NgModule({
  declarations: [
    AddGroupComponent,
    EditGroupComponent,
    ViewGroupListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GroupModule { }
