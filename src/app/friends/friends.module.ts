import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { EditFriendsComponent } from './edit-friends/edit-friends.component';
import { ViewFriendsListComponent } from './view-friends-list/view-friends-list.component';



@NgModule({
  declarations: [
    AddFriendsComponent,
    EditFriendsComponent,
    ViewFriendsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
