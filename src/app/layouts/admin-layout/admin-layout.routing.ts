import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { EmployeesComponent } from '../../pages/employees/employees.component';
import { FacultyComponent } from '../../pages/faculty/faculty.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UploadStudyMaterialComponent } from 'app/components/upload-study-material/upload-study-material.component';
import { StudyMaterialsComponent } from 'app/pages/study-materials/study-materials.component';
import { AssessmentComponent } from 'app/pages/assessment/assessment.component';
import { CreateAssessmentComponent } from 'app/components/create-assessment/create-assessment.component';
import { ViewStudyMaterialComponent } from 'app/components/view-study-material/view-study-material.component';
import { ViewAssessmentComponent } from 'app/components/view-assessment/view-assessment.component';
import { ViewReportComponent } from 'app/components/view-report/view-report.component';
import { StudyMaterialListComponent } from 'app/components/study-material-list/study-material-list.component';
import { SettingsComponent } from 'app/pages/settings/settings.component';
import { ViewEmployeeReportComponent } from 'app/components/view-employee-report/view-employee-report.component';

export const AdminLayoutRoutes: Routes = [
  { path: '',
   component: AdminLayoutComponent,
   children: [
       { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
       { path: 'employees',         component: EmployeesComponent },
       { path: 'user',              component: UserComponent },
      { path: 'assessment',        component: AssessmentComponent },
      { path: 'table',             component: TableComponent },
      { path: 'typography',        component: TypographyComponent },
      { path: 'faculty',           component: FacultyComponent },
      { path: 'study-materials',   component: StudyMaterialsComponent },
      { path: 'uploaddocument',    component: UploadStudyMaterialComponent },
      { path: 'assessment/createassessment',  component: CreateAssessmentComponent },
      { path: 'view-material',     component: ViewStudyMaterialComponent },
      { path: 'assessment/view-assessment',   component:ViewAssessmentComponent},
      { path: 'view-report',       component:ViewReportComponent},
      { path: 'study-material-list',component:StudyMaterialListComponent},
      { path: 'settings',           component:SettingsComponent},
      { path: 'view-employee-report',component:ViewEmployeeReportComponent},
       { path: 'dashboard', loadChildren: () => import('app/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
       { path: 'location', loadChildren: () => import('app/pages/masters/location-master/location-master.module').then(m => m.LocationMasterModule) },
       { path: 'branch', loadChildren: () => import('app/pages/masters/branch-master/branch-master.module').then(m => m.BranchMasterModule) },
       { path: 'role', loadChildren: () => import('app/pages/masters/role-master/role-master.module').then(m => m.RoleMasterModule) },
       { path: 'company', loadChildren: () => import('app/pages/masters/company-master/company-master.module').then(m => m.CompanyMasterModule) },
       { path: 'industry', loadChildren: () => import('app/pages/masters/industry-master/industry-master.module').then(m => m.IndustryMasterModule) },
       { path: 'department', loadChildren: () => import('app/pages/masters/department-master/department-master.module').then(m => m.DepartmentMasterModule) },
       { path: 'designation', loadChildren: () => import('app/pages/masters/designation-master/designation-master.module').then(m => m.DesignationMasterModule) }
          ]
   }
];
