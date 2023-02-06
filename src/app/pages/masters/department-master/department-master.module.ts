import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentMasterRoutingModule } from './department-master-routing.module';
import { DepartmentMasterComponent } from './department-master.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DepartmentMasterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    DepartmentMasterRoutingModule
  ]
})
export class DepartmentMasterModule { }
