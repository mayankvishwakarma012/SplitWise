import { Routes , RouterModule, NavigationEnd, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes : Routes = [
  { path: '', component: DashboardComponent,children:[
  { path: 'friends', loadChildren: () => import('../friends/friends.module').then(m => m.FriendsModule) },
  { path: 'group', loadChildren: () => import('../group/group.module').then(m => m.GroupModule) },
  { path: 'settleup', loadChildren: () => import('../settle-up/settle-up.module').then(m => m.SettleUpModule) },
  { path: 'transaction', loadChildren: () => import('../transaction/transaction.module').then(m => m.TransactionModule) },
  ] }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardModule {
  }
