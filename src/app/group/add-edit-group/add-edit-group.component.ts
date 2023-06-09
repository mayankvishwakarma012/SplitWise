import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent implements OnInit{

  groupTypes = ['Home', 'Trip' , 'Couple', 'Other'];

  isGroupAddActive !: boolean;
  currentUrl !: string;
  isGroupEditActive !: boolean;
  formHeading !: string ;


  ngOnInit(): void {
    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
          this.currentUrl = event.url;

          if(this.currentUrl == '/dashboard/group/add'){
            this.isGroupAddActive = true;
            this.formHeading = 'Add Details';
          }
          else{
            this.isGroupAddActive = false;
          }

          if(this.currentUrl == '/dashboard/group/edit'){
            this.isGroupEditActive = true;
            this.formHeading = 'Edit Details';
          }
          else{
            this.isGroupEditActive = false;
          }


  });


  }



  // Add Edit Form group
  addEditGroup !: FormGroup;

  constructor(private fb: FormBuilder , public router : Router) {
    this.addEditGroup = this.fb.group({
      groupName: ['', Validators.required],
      groupType:['Home'],
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

}
