import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal,NgbActiveModal, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';

import { EmployeeMaster } from 'app/interfaces/employeeMaster';
import { UtilityService } from 'services/utility.service';
import Swal from 'sweetalert2';
import { EmployeesService } from './employees.service';
import { DataTableService } from 'app/services/data-table.service';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import { FacultySearch } from 'app/interfaces/facultySearch';
import { AadharVerifyModalComponent } from 'app/modals/aadhar-verify-modal/aadhar-verify-modal.component';



@Component({
    selector: 'employees-cmp',
    moduleId: module.id,
    templateUrl: 'employees.component.html'
})

export class EmployeesComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  @ViewChild('AadharVerifyModalComponent') AadharVerifyModalComponent:AadharVerifyModalComponent

  public Datatable:boolean;
  public employeeMaster : EmployeeMaster = {} as EmployeeMaster;
  public facultySearch:FacultySearch = {} as FacultySearch
  public employeeList : any =[];
  public isFilter:boolean = false;
  imageBase64: string;
  isBranchImageAvailable: boolean;
  imageSrc: any;
  isMasterValidate: boolean;
  loader: boolean;
  nodata: boolean=false;
  companyList: any;
  departmentList: any;
  designationList: any;
  public aadhrbtnText:string =""
  public isAadharVeryfied:boolean = false

    constructor(
                private utilityService:UtilityService,
                private employeeService:EmployeesService,
                private dataTable:DataTableService,
                private ngmodal:NgbModal,
                private dropDownlist:DropdownlistService){
    }

    ngOnInit(): void {
    this.getEmployeeList();
    this.getDropDownList();
    this.dtOptions = this.dataTable.getDataTableOptions(false, true, 'Stock Receive List');
    this.Datatable = true;
    this.employeeMaster.bloodgroup ="";
    this.employeeMaster.designation ="";
    this.employeeMaster.department ="";
    this.employeeMaster.companyName ="";
    this.facultySearch.designation = "0";
    this.facultySearch.department = "0";
    this.facultySearch.companyName = "0";
    this.aadhrbtnText = "Verify"
    }

    public getEmployeeCode(){
      this.employeeService.getEmployeeCode().subscribe(response=>{
        const employeeCode = response.data[0] || {};
          this.employeeMaster.empCode = employeeCode.Employee_Code;
      },error => {console.log(error);
      }
      );
    }
    public Addemployee(){
      this.Datatable = false;
      this.getEmployeeCode();

    }

    public getDropDownList(){

      this.dropDownlist.getCompanyMaster().subscribe(response=>{
        const companyList = response.data || {};
          this.companyList = companyList;
      },error => {console.log(error);
      }
      );
      this.dropDownlist.getDepartmentMaster().subscribe(response=>{
        const departmentList = response.data || {};
          this.departmentList = departmentList;
      },error => {console.log(error);
      }
      );
      this.dropDownlist.getDesignationMaster().subscribe(response=>{
        const designationList = response.data || {};
          this.designationList = designationList;
      },error => {console.log(error);
      }
      );
    }
    onImageChange(event: any): void {
      const fileSize = 1024000; // 1MB

      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].type && event.target.files[0].type.split('/')[0] === 'image') {
          if (event.target.files[0].size <= fileSize) {
            this.imageBase64 = '';

            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (events: any) => {
              console.log('events : ', events);
              const imageSource = events.target.result;
              this.isBranchImageAvailable = true;

              this.utilityService.ImageCompression(imageSource)
                .then(response => {
                  // console.log('response : ', response);
                  this.imageSrc = response;
                  const imageArray = this.imageSrc.split(',');
                  this.imageBase64 = (imageArray.length > 1) ? imageArray[1] : '';
                }).catch(error => {
                  console.log('error : ', error);
                  this.imageSrc = events.target.result;
                  const imageArray = this.imageSrc.split(',');
                  this.imageBase64 = (imageArray.length > 1) ? imageArray[1] : '';
                });
            };
            reader.readAsDataURL(event.target.files[0]);
            event.target.value = "";
          } else {
            event.target.value = "";
            alert('error - ' + 'Max image upload size is 1MB only');
          }
        } else {
          event.target.value = "";
          alert('error - ' + 'Could not support selected image format. Choose valid image file ');
        }
      }
    }
    public verifyAadhar():void{
      const addDialog = this.ngmodal.open(AadharVerifyModalComponent,{size:'md',backdropClass: 'bg-secondary'})
        addDialog.componentInstance.Title = 'Verifyaadhar';
        addDialog.componentInstance.aadharno = this.employeeMaster.aadharno;
        addDialog.result.then((result) => {
          if(result.isaadharVerify){
            this.employeeMaster.aadharno = result.aadharNo
            this.isAadharVeryfied = result.isaadharVerify
            this.aadhrbtnText = 'Edit or Re-Verify'
          }
        }).catch((error)=>{
        })
    }
    removeBranchImage(): void {
      this.isBranchImageAvailable = false;
      this.imageBase64 = '';
      this.imageSrc = '';
      this.employeeMaster.faculty_Image = null;
    }
    isEmpty(val){
      return (val === undefined || val == null || val.length <= 0) ? true : false;
    }
  SaveemployeeMaster(){
      this.isMasterValidate = false;
      if (this.imageBase64) {
        this.employeeMaster.faculty_Image = this.imageBase64;
      }
      if(this.isEmpty(this.employeeMaster.firstName)){
          this.isMasterValidate = true;
      }else if(!this.isAadharVeryfied){
        Swal.fire('Please Verify Aadhar Number!', '', 'error')
      }
      else{
        if(!this.employeeMaster.empId){
          this.employeeService.saveEmployeeMaster(this.employeeMaster).subscribe(response=>{
            if(response.status == 200){
              this.utilityService.toast('top','right','Saved Successfully','success');
            }else if(response.status == 404){
              this.utilityService.toast('top','right','Failed to Insert','warning');
            }
          },error => {this.utilityService.toast('top','right','!Server Error','warning')
        }
          );
        }
        else{
          this.employeeService.updateEmployeeMaster(this.employeeMaster).subscribe(response=>{
            if(response == 200){
              Swal.fire('Saved!', '', 'success')
              this.utilityService.toast('top','right','Uodated Successfully','success');
            }else{
              this.utilityService.toast('top','right','!Response Error','warning');
            }
          },error => {this.utilityService.toast('top','right','!Server Error','warning'),console.log(error)}
          );
        }
      }
  }


  getEmployeeList(){
    this.loader = true;
    this.Datatable = false;
    this.nodata = true;
    this.employeeService.getEmployeeList(this.facultySearch).subscribe(response=>{
      const employeelist = response.data || {};
      this.loader = false
      if(employeelist.length > 0 ){
       setTimeout( ()=>(this.nodata = false,
       this.Datatable=true),500);
        this.employeeList = employeelist;
      }

    },error => {this.loader = false ,this.nodata = true,this.utilityService.toast('top','right','!Response Error','warning')}
    );
  }
  isMobileNumber(event){
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46))
  }

  navigateToBack(){
    this.Datatable = true;
    this.getEmployeeList();
  }



      public editEmployeedetails(employeeId){
        this.Datatable = false;
        this.employeeService.getEmployeeDetails(employeeId).subscribe(response=>{

          const employeeDetails = response.data[0] || {};
            this.employeeMaster.empId = employeeId;
            this.employeeMaster.empCode = employeeDetails.Faculty_Code;
            this.employeeMaster.firstName = employeeDetails.Faculty_First_Name;
            this.employeeMaster.lastname = employeeDetails.Faculty_Last_Name;
            this.employeeMaster.dateofbirth = this.utilityService.formatDate(employeeDetails.Dateofbirth);
            this.employeeMaster.email = employeeDetails.Faculty_Email;
            this.employeeMaster.phoneno = employeeDetails.Faculty_Mobileno;
            this.employeeMaster.designation = employeeDetails.DesigId;
            this.employeeMaster.department = employeeDetails.DeptId;
            // this.employeeMaster. = employeeDetails.BranchId;
            // this.employeeMaster. = employeeDetails.LocationId;
            this.employeeMaster.companyName = employeeDetails.CompanyId;
            this.employeeMaster.experience = employeeDetails.Experince;
            // this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(employeeDetails.Profile_Image_Url);
            this.imageSrc = `assets/employee_images/${employeeDetails.Faculty_Code}_image.jpeg`
            this.employeeMaster.bloodgroup = employeeDetails.Blood_Group;
            this.employeeMaster.address = employeeDetails.Address;
            this.employeeMaster.aadharno = employeeDetails.Aadhar_No;
            this.employeeMaster.panno = employeeDetails.Pan_No;
            this.employeeMaster.emrgName = employeeDetails.Emergency_Contact_Name;
            this.employeeMaster.emrgMobileno = employeeDetails.Emergency_Contact_No;
            this.employeeMaster.emrgRelation = employeeDetails.Emergency_Contact_Relationship;
            this.employeeMaster.city = employeeDetails.City;
            this.employeeMaster.state = employeeDetails.State;
            this.employeeMaster.country = employeeDetails.Country;
            this.employeeMaster.pincode = employeeDetails.Pincode;

        });
      }

      public deleteEmployeedetails(employeeId){

        Swal.fire({
          title: 'Are you sure?',
          text: 'This process is irreversible.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, go ahead.',
          cancelButtonText: 'No, let me think',
        }).then((result) => {
          if (result.value) {
            this.employeeService.deleteEmployeeMaster(employeeId).subscribe(resp=>{
              if(resp.status == 200){
                Swal.fire('Removed!', 'Employee removed successfully.', 'success');
                this.getEmployeeList();
              }
              else{
                Swal.fire('Cancelled', 'Employee still in our database.)', 'error');
              }
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Emplpoyee still in our database.)', 'error');
          }
        });



      }

      public reset(){
        this.employeeMaster  = {} as EmployeeMaster;
        this.removeBranchImage();
      }

      public showFilter(){
        if(this.isFilter)
        this.isFilter = false
        else
        this.isFilter = true
      }
}
