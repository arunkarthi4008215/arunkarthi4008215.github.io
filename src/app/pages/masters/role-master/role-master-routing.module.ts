import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleMasterComponent } from './role-master.component';

const routes: Routes = [
  {path:'',component:RoleMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleMasterRoutingModule { }
