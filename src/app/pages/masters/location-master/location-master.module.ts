import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationMasterRoutingModule } from './location-master-routing.module';
import { LocationMasterComponent } from './location-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { LoaderComponent } from 'app/components/loader/loader.component';


@NgModule({
  declarations: [LocationMasterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    ReactiveFormsModule,
    LocationMasterRoutingModule
  ]
})
export class LocationMasterModule { }
