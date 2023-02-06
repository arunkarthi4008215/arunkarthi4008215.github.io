import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { ToastrModule } from "ngx-toastr";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterModule } from './shared/footer/footer.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import {DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { QuillModule } from "ngx-quill";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { DesignationModalComponent } from './pages/masters/master-modal/designation-modal/designation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    DesignationModalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    DataTablesModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FooterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    DataTablesModule,
    // QuillModule.forRoot(),
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
