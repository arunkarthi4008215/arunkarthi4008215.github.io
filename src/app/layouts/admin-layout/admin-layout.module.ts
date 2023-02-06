import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { EmployeesComponent }           from '../../pages/employees/employees.component';
import { FacultyComponent }            from '../../pages/faculty/faculty.component';
import { StudyMaterialsComponent }    from '../../pages/study-materials/study-materials.component'
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UploadStudyMaterialComponent } from 'app/components/upload-study-material/upload-study-material.component';
import { DndDirective } from 'app/directives/dnd.directive';
import { ProgressComponent } from 'app/components/progress/progress.component';
import { LoaderComponent } from 'app/components/loader/loader.component';
import { AssessmentComponent } from 'app/pages/assessment/assessment.component';
import { CreateAssessmentComponent } from 'app/components/create-assessment/create-assessment.component';
import { ViewStudyMaterialComponent } from 'app/components/view-study-material/view-study-material.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewReportComponent } from 'app/components/view-report/view-report.component';
import { StudyMaterialListComponent } from 'app/components/study-material-list/study-material-list.component';
import { MaterialModalComponent } from 'app/modals/material-modal/material-modal.component';
// import { QuillModule } from "ngx-quill";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SettingsComponent } from 'app/pages/settings/settings.component';
import { ViewAssessmentComponent } from 'app/components/view-assessment/view-assessment.component';
import { SplitText } from 'app/pipes/split-text.pipe';
import { ViewEmployeeReportComponent } from 'app/components/view-employee-report/view-employee-report.component';
import { AadharVerifyModalComponent } from 'app/modals/aadhar-verify-modal/aadhar-verify-modal.component';


@NgModule({ 
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule, 
    ReactiveFormsModule,
    DataTablesModule,
    // QuillModule.forRoot(),
    PdfViewerModule
  ],
  declarations: [
    SplitText,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    EmployeesComponent,
    SettingsComponent,
    FacultyComponent,
    StudyMaterialsComponent,
    UploadStudyMaterialComponent,
    DndDirective,
    ProgressComponent,
    LoaderComponent,
    AssessmentComponent,
    CreateAssessmentComponent,
    ViewStudyMaterialComponent,
    ViewAssessmentComponent,
    ViewReportComponent,
    StudyMaterialListComponent,
    MaterialModalComponent,
    ViewEmployeeReportComponent,
    AadharVerifyModalComponent
  ],
  providers:
   [
    HttpClientModule
  ]
})

export class AdminLayoutModule {}
