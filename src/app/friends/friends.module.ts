import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFriendsListComponent } from './view-friends-list/view-friends-list.component';
import { AddEditFriendsComponent } from './add-edit-friends/add-edit-friends.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes : Routes = [
  { path: '', component: ViewFriendsListComponent,children:[
    { path: 'add', component: AddEditFriendsComponent },
  { path: 'edit', component: AddEditFriendsComponent },
  { path: 'view', component: ViewFriendsListComponent }
  ]},


]


@NgModule({
  declarations: [
    ViewFriendsListComponent,
    AddEditFriendsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class FriendsModule { }
