import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'expense', loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule) },
  { path: 'friends', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule) },
  { path: 'group', loadChildren: () => import('./group/group.module').then(m => m.GroupModule) },
  { path: 'settleup', loadChildren: () => import('./settle-up/settle-up.module').then(m => m.SettleUpModule) },
  { path: 'transaction', loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) },
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
