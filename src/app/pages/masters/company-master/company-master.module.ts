import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMasterRoutingModule } from './company-master-routing.module';
import { CompanyMasterComponent } from './company-master.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CompanyMasterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    CompanyMasterRoutingModule
  ]
})
export class CompanyMasterModule { }
