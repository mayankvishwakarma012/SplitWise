import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-friends',
  templateUrl: './add-edit-friends.component.html',
  styleUrls: ['./add-edit-friends.component.scss']
})
export class AddEditFriendsComponent implements OnInit {
  addEditFriend!: FormGroup;

  constructor( public fb : FormBuilder){}

  ngOnInit(): void {

    this.addEditFriend = this.fb.group({
      friendName: ['', Validators.required],
      message: ['', Validators.required],

    });
  }

}
