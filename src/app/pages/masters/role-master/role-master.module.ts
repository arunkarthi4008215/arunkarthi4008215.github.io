import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleMasterRoutingModule } from './role-master-routing.module';
import { RoleMasterComponent } from './role-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RoleMasterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    RoleMasterRoutingModule
  ]
})
export class RoleMasterModule { }
