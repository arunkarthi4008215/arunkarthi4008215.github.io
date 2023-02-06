import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeMaster } from 'app/interfaces/employeeMaster';
import { UtilityService } from 'services/utility.service';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';
import {AssessmentService} from './assessment.service';
import { Subject } from 'rxjs';
import { DataTableService } from 'app/services/data-table.service';



@Component({
    selector: 'assessment-cmp',
    moduleId: module.id,
    templateUrl: 'assessment.component.html'
})

export class AssessmentComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })dtElement: DataTableDirective;

  public Datatable:boolean;
  public employeeMaster : EmployeeMaster = {} as EmployeeMaster;
  public assessmentList : any =[];
  imageBase64: string;
  isBranchImageAvailable: boolean;
  imageSrc: any;
  isMasterValidate: boolean;
  loader: boolean;
  nodata: boolean= false;
    constructor(private utilityService:UtilityService,
                private assessmentService:AssessmentService,
                private sanitizer:DomSanitizer,
                private dataTable:DataTableService){
    }

    ngOnInit(): void {
    this.getEmployeeList();
    this.Datatable = true;
    this.employeeMaster.bloodgroup ="";
    this.employeeMaster.designation ="";
    this.employeeMaster.department ="";
    this.employeeMaster.companyName ="";
    this.dtOptions = this.dataTable.getDataTableOptions(false, true, 'Assessment List');

    }


    
  getEmployeeList(){
    this.loader = true;
    this.nodata = true;
    this.Datatable = false;
                                  
    this.assessmentService.getAssessmentList().subscribe(response=>{
      const assessmentList = response.data || {};
        this.assessmentList = assessmentList; 
        if(this.assessmentList.length > 0){
          this.nodata = false;
        }
    },error => {this.utilityService.toast('top','right','!Response Error','warning')}
    );
  }
  isMobileNumber(event){
      console.log(event.charCode);
      
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46))
  }

  navigateToBack(){
    this.Datatable = true;
    this.getEmployeeList();
  }
}
