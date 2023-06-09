import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  groups = ['Friends'];
  friends = ['Ram'];
  groupName: any;

  constructor(public router : Router , public route : ActivatedRoute) {}

  currentUrl !: string;
  isGroupEditActive !: boolean;
  isGroupAddActive !: boolean;


  ngOnInit(): void {
    /** This instance of router is used for get current routing path
         * to toggle the active flag for components
         */
    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
          this.currentUrl = event.url;

          if(this.currentUrl == '/dashboard/group/add'){
            this.isGroupAddActive = true;
          }
          else{
            this.isGroupAddActive = false;
          }

          if(this.currentUrl == '/dashboard/group/edit'){
            this.isGroupEditActive = true;
          }
          else{
            this.isGroupEditActive = false;
          }

          this.groupName = this.route.snapshot.paramMap.get('name');

  });


  }

}
