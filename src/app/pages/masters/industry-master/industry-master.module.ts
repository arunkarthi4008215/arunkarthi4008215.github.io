import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryMasterRoutingModule } from './industry-master-routing.module';
import { IndustryMasterComponent } from './industry-master.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [IndustryMasterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    IndustryMasterRoutingModule
  ]
})
export class IndustryMasterModule { }
