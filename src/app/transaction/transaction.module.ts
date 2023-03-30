import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes : Routes = [
  { path: '',component:TransactionListComponent},

]



@NgModule({
  declarations: [
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class TransactionModule { }
