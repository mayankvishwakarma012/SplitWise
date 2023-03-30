import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFriendsListComponent } from './view-friends-list/view-friends-list.component';
import { AddEditFriendsComponent } from './add-edit-friends/add-edit-friends.component';



@NgModule({
  declarations: [
    ViewFriendsListComponent,
    AddEditFriendsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
