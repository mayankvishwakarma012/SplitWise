import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-group-list',
  templateUrl: './view-group-list.component.html',
  styleUrls: ['./view-group-list.component.scss']
})
export class ViewGroupListComponent {
  constructor(public router : Router){}

}
