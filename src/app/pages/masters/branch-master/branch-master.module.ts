import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchMasterRoutingModule } from './branch-master-routing.module';
import { BranchMasterComponent } from './branch-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule } from "angular-datatables";
import { BranchModalComponent } from '../master-modal/branch-modal/branch-modal.component';
import { LoaderComponent } from 'app/components/loader/loader.component';


@NgModule({
  declarations: [
                BranchMasterComponent,
                BranchModalComponent
              ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    ReactiveFormsModule,
    BranchMasterRoutingModule
  ]
})
export class BranchMasterModule { }
