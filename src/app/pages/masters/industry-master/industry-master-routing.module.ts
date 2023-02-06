import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustryMasterComponent } from './industry-master.component';

const routes: Routes = [
  {path:'',component:IndustryMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryMasterRoutingModule { }
