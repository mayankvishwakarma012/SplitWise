import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { ViewExpenseListComponent } from './view-expense-list/view-expense-list.component';



@NgModule({
  declarations: [
    AddExpenseComponent,
    EditExpenseComponent,
    ViewExpenseListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpenseModule { }
