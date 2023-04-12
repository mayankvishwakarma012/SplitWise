import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {

  dates = ['1 April', '5 April' ,'8 April']
  expenses = ['Ram', 'Harry', 'Raj'];
  oweAmounts = [20,50,80]
  owedAmounts = [50,60,24]

}
