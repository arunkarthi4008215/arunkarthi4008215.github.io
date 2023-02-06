import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationMasterRoutingModule } from './designation-master-routing.module';
import { DesignationMasterComponent } from './designation-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DesignationMasterComponent],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    DesignationMasterRoutingModule
  ]
})
export class DesignationMasterModule { }
