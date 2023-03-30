import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettleUpComponent } from './settle-up.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes : Routes = [
  { path: '',component:SettleUpComponent},

]


@NgModule({
  declarations: [
    SettleUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class SettleUpModule { }
