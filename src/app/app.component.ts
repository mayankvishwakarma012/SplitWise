import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SplitWise';
  currentUrl !: string;
  isLoginSignupActive !: boolean;
  isLoginActive !: boolean;
  isSignupActive !: boolean;
  constructor(public router : Router){}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
            this.currentUrl = event.url;

            if(this.currentUrl == '/login'){
              this.isLoginActive = true;
              this.isSignupActive = false;
            }
            else{
              this.isLoginActive = false;
              this.isSignupActive = true;
            }

            if(this.currentUrl == '/login' || this.currentUrl == '/signup' || this.currentUrl == '/'){
              this.isLoginSignupActive = true;
            }
            else{
              this.isLoginSignupActive = false;
            }

    });

  }

  dropdownMenus = ['Profile','Logout'];




}
