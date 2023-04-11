import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-view-friends-list',
  templateUrl: './view-friends-list.component.html',
  styleUrls: ['./view-friends-list.component.scss']
})
export class ViewFriendsListComponent {


  friends = ['Ram', 'Harry', 'Raj'];

  currentUrl !: string;
  isFriendActive : boolean = false;
  friendName: any;

  constructor(public router : Router, public route: ActivatedRoute){

    /** Using this instance of route can get the value of routing parameter.
     * and store it in friendName variable */

        this.route.params.subscribe(params => {
          this.friendName = params['name'];
        });

        /** This instance of router is used for get current routing path
         * to toggle the active flag for components
         */
        this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
              this.currentUrl = event.url;

              for (let friend of this.friends ){
                if(this.currentUrl == '/friends'){
                this.isFriendActive = true;
                break;
              }
            }
          });
  }

}
