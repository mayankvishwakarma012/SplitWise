import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewGroupListComponent } from './view-group-list/view-group-list.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes : Routes = [
  { path: '', component: ViewGroupListComponent, children:[
    { path: 'add', component: AddEditGroupComponent },
    { path: 'edit', component: AddEditGroupComponent },
    { path: 'view', component: ViewGroupListComponent }

  ] },


]



@NgModule({
  declarations: [
    ViewGroupListComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class GroupModule { }
