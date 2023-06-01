import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-view-friends-list',
  templateUrl: './view-friends-list.component.html',
  styleUrls: ['./view-friends-list.component.scss']
})
export class ViewFriendsListComponent{


  friends = ['Ram','raj','ravi','abhi','amit'];

  currentUrl !: string;
  isFriendActive : boolean = false;
  friendName: any;
  isExpenseActive !: boolean;

  constructor(public router : Router, private route: ActivatedRoute){

    /** Using this instance of route can get the value of routing parameter.
     * and store it in friendName variable */

        this.route.queryParams.subscribe(params => {
          console.log(params['name']);
          this.friendName = params['name'];
        });
        
        /** This instance of router is used for get current routing path
         * to toggle the active flag for components
         */
        this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
              this.currentUrl = event.url;
              if(this.currentUrl == '/dashboard/friends/expense'){
                this.isExpenseActive = true;
              }
              else{
                this.isExpenseActive = false;
              }

              for (let friend of this.friends ){

                if(this.currentUrl == '/dashboard/friends/view/'+friend){

                this.isFriendActive = true;
                break;
              }
            }
          });
  }
  

}
