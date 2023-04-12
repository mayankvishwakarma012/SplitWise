import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-view-group-list',
  templateUrl: './view-group-list.component.html',
  styleUrls: ['./view-group-list.component.scss']
})
export class ViewGroupListComponent {
  groups = ['Friends', 'Trip', 'Weekend'];
  friends = ['Ram', 'Harry', 'Raj'];
  groupName = this.route.snapshot.paramMap.get('name');

/**variable to use as a active flag for components  */
  currentUrl !: string;
  isGroupActive : boolean = false;
  isExpenseActive !: boolean;
  constructor(public router : Router, public route: ActivatedRoute){

    /** this instance is used here foor getting the current routing path
     * and toggle the active flags
     * */
    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
          this.currentUrl = event.url;
          if(this.currentUrl == '/dashboard/group/expense'){
            this.isExpenseActive = true;
          }
          else{
            this.isExpenseActive = false;
          }

          for (let group of this.groups ){
            if(this.currentUrl == '/dashboard/group/view/'+group){
            this.isGroupActive = true;
            break;
          }
        }
      });
  }
}


