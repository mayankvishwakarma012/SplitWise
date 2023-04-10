import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent {

  isCurrentUrl(url: string): boolean {
    return this.router.url === url;
  }

  // Add Edit Form group
  addEditGroup !: FormGroup;

  constructor(private fb: FormBuilder , public router : Router) {
    this.addEditGroup = this.fb.group({
      groupName: ['', Validators.required],
      groupType:['home'],
      simplifiedDebt:[false],
      members: this.fb.array([
        this.fb.group({
          name: [''],
          email: ['']
        })
      ])
    });
  }

  // getter for Form array control
  get members (){
    return this.addEditGroup.get('members') as FormArray;
  }

//  to add member fields dynamicaly
  addMembers(){
    this.members?.push(
      this.fb.group({
        name: [''],
        email: ['']
      })
    );
  }

  // delete members fields dynamicly
  deleteMember(i : number){
    this.members.removeAt(i);
  }

  onSubmit(){
    // function for add new group
  }
  onUpdate(){
    // funtion for edit details for group
  }

}
