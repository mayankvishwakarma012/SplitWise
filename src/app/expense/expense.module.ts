import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewExpenseListComponent } from './view-expense-list/view-expense-list.component';
import { AddEditExpenceComponent } from './add-edit-expence/add-edit-expence.component';



@NgModule({
  declarations: [
    ViewExpenseListComponent,
    AddEditExpenceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpenseModule { }
