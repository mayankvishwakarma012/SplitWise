import { Component } from '@angular/core';

@Component({
  selector: 'app-view-expense-list',
  templateUrl: './view-expense-list.component.html',
  styleUrls: ['./view-expense-list.component.scss']
})
export class ViewExpenseListComponent {


  expenses = ['Ram', 'Harry', 'Raj'];
  amounts = [20,50,80]
}
