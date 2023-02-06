import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [    
    DashboardComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
