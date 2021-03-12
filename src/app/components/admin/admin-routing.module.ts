import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewHomeComponent } from './home-admin/view-home.component';

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    {
      path: 'home-admin', component: ViewHomeComponent,
    },
    { path: '**', redirectTo: 'home-admin' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }