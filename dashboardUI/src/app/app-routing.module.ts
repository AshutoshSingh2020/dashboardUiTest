import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './routes/dashboard-page/dashboard-page.component';
import { UserTableComponent } from './routes/user/user-table/user-table.component';
import { CreateUserComponent } from './routes/user/create-user/create-user.component';
import { ChartComponent } from './routes/chart/chart.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'user/user-table', component: UserTableComponent },
  { path: 'user/create-user', component: CreateUserComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
