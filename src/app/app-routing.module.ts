import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ShowDashboardComponent } from './show-dashboard/show-dashboard.component'
import { ShowDashboardsComponent } from './show-dashboards/show-dashboards.component';

const routes: Routes = [
  {path:'dashboard', component: ShowDashboardsComponent },
  {path:'', redirectTo:'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
