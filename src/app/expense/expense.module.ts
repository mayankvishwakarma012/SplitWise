import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewExpenseListComponent } from './view-expense-list/view-expense-list.component';
import { AddEditExpenceComponent } from './add-edit-expence/add-edit-expence.component';
import { Routes , RouterModule } from '@angular/router';

const dashboardRoutes : Routes = [
  { path: '', component: ViewExpenseListComponent,children:[
    { path: 'add', component: AddEditExpenceComponent },
  { path: 'edit', component: AddEditExpenceComponent },
  { path: 'view', component: ViewExpenseListComponent }
  ] },


]

@NgModule({
  declarations: [
    ViewExpenseListComponent,
    AddEditExpenceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ExpenseModule { }
