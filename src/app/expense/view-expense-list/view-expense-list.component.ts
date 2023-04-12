import { Component } from '@angular/core';

@Component({
  selector: 'app-view-expense-list',
  templateUrl: './view-expense-list.component.html',
  styleUrls: ['./view-expense-list.component.scss']
})
export class ViewExpenseListComponent {

  dates = ['1 April', '5 April' ,'8 April']
  expenses = ['Ram', 'Harry', 'Raj'];
  oweAmounts = [20,50,80]
  owedAmounts = [50,60,24]
}
