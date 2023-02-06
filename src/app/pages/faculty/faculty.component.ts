import { Component,OnInit,ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataTableDirective } from 'angular-datatables';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import {NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FacultyMaster } from 'app/interfaces/facultymaster';
import { FacultySearch } from 'app/interfaces/facultySearch';
import { DataTableService } from 'app/services/data-table.service';
import { UtilityService } from 'services/utility.service';
import Swal from 'sweetalert2';
import { FacultyService } from './faculty.service';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import { AadharVerifyModalComponent } from 'app/modals/aadhar-verify-modal/aadhar-verify-modal.component';




@Component({
    moduleId: module.id,
    selector: 'faculty-cmp',
    templateUrl: 'faculty.component.html'
})

export class FacultyComponent implements OnInit {

    
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })dtElement: DataTableDirective;

    public Datatable:boolean = true;
    public facultyMaster:FacultyMaster = {} as FacultyMaster
    public facultySearch:FacultySearch = {} as FacultySearch
    model: NgbDateStruct;
    public facultyList : any =[];
    public isFilter:boolean = false;
    isMasterValidate: boolean;
    imageBase64: string;
    isBranchImageAvailable: boolean;
    imageSrc: any= "";
    loader: boolean = true;
    submitted: boolean = false;
    nodata: boolean = false;
    companyList: any;
    departmentList: any;
    designationList: any;
    public aadhrbtnText:string =""
    public isAadharVeryfied:boolean = false
  btnloader: boolean = false;

    constructor(private utilityService : UtilityService,
                private facultyService:FacultyService,
                private sanitizer:DomSanitizer,
                private ngmodal:NgbModal,
                private dataTable:DataTableService,
                private dropDownlist:DropdownlistService){
    }
    ngOnInit() {
      this.aadhrbtnText = "Verify"
        this.facultyMaster.bloodgroup = "";
        this.facultyMaster.designation = "";
        this.facultyMaster.department = "";
        this.facultyMaster.companyName = "";
        this.facultySearch.designation = "0";
        this.facultySearch.department = "0";
        this.facultySearch.companyName = "0";
        this.dtOptions = this.dataTable.getDataTableOptions(false, true, 'Stock Receive List');
        this.getFacultyList();

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

    public verifyAadhar():void{
      const addDialog = this.ngmodal.open(AadharVerifyModalComponent,{size:'md',backdropClass: 'bg-secondary'})
        addDialog.componentInstance.Title = 'Verifyaadhar';
        addDialog.componentInstance.aadharno = this.facultyMaster.aadharno;
        addDialog.result.then((result) => {
          if(result.isaadharVerify){
            this.facultyMaster.aadharno = result.aadharNo
            this.isAadharVeryfied = result.isaadharVerify
            this.aadhrbtnText = 'Edit or Re-Verify'
          }
        }).catch((error)=>{
        })
    }

    Addfaculty(){
        this.Datatable =false;
        this.nodata = false;
        this.getFacultyCode();
    }
    public getFacultyCode(){
      this.facultyService.getFacultyCode().subscribe(response=>{
        const employeeCode = response.data[0] || {};
          this.facultyMaster.empCode = employeeCode.Faculty_Code; 
      },error => {console.log(error);
      }
      ); 
    }
    // public getFacultyList(){
    //   this.loader = true;
    //   this.Datatable = true;
                                    
    //   this.facultyService.getFacultyList().subscribe(response=>{
    //     const facultylist = response.data || {};
    //     this.Datatable=true
    //     if(facultylist.length > 0 ){
    //      setTimeout( ()=>(
    //        this.loader = false,this.nodata = false),500);
    //       this.facultyList = facultylist; 
          
    //     }else{
    //       setTimeout( ()=>(
    //         this.loader = false,this.nodata = true),500);
    //     }
  
    //   },error => {this.utilityService.toast('top','right','!Response Error','warning')}
    //   );
    // }

    public  getFacultyList(){
      this.loader = true;
      this.Datatable = true;
                                    
      this.facultyService.getFacultyList(this.facultySearch).subscribe(response=>{
        const facultylist = response.data || {};
        setTimeout( ()=>(
          this.loader = false),500);
        if(facultylist.length > 0 ){
           this.Datatable=true
          this.facultyList = facultylist; 
        }
        else{
         
            this.Datatable=true;
            this.nodata = true
           this.facultyList = facultylist; 
        }
  
      },error => {this.loader = false ,this.nodata = true,this.utilityService.toast('top','right','!Response Error','warning')}
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

      removeBranchImage(): void {
        this.isBranchImageAvailable = false;
        this.imageBase64 = '';
        this.imageSrc = '';
        this.facultyMaster.faculty_Image = null;
      }
      isEmpty(val){
        return (val === undefined || val == null || val.length <= 0) ? true : false;
      }
      SavefacultyMaster(){
        this.submitted = true;
        this.isMasterValidate = false;
        if (this.imageBase64) {
          this.facultyMaster.faculty_Image = this.imageBase64;
        }
        if(this.isEmpty(this.facultyMaster.firstName)){
            this.isMasterValidate = true;
            this
        }else{
          this.btnloader = true;
          if(!this.facultyMaster.facId){
            this.facultyService.saveEmployeeMaster(this.facultyMaster).subscribe(response=>{
              this.submitted = false;
              this.btnloader = false
              if(response.status == 200){
                Swal.fire('Saved!', '', 'success')
                this.utilityService.toast('top','right','Saved Successfully','success');
              }else if(response.status == 404){
                this.btnloader = false
                this.utilityService.toast('top','right','Failed to Insert','warning');
              }
            },error => {
              this.btnloader = false
              this.utilityService.toast('top','right','!Response Error','warning')}
            );
          }
          else{

            this.facultyService.updateFacultyMaster(this.facultyMaster).subscribe(response=>{
              if(response == 200){
                this.utilityService.toast('top','right','Uodated Successfully','success');
              }else{
                this.utilityService.toast('top','right','!Response Error','warning');
              }
            },error => {this.utilityService.toast('top','right','!Response Error','warning')}
            );
          }
        }
    }
    isMobileNumber(event){
        console.log(event.charCode);
        
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46))
    }

    navigateToBack(){
      this.Datatable = true;
    }

    public editFacultydetails(facultyId){
      this.Datatable = false;
      this.facultyService.getFacultyDetails(facultyId).subscribe(response=>{

        const facultyDetails = response.data[0] || {};
          this.facultyMaster.facId = facultyId;
          this.facultyMaster.empCode = facultyDetails.Faculty_Code;
          this.facultyMaster.firstName = facultyDetails.Faculty_First_Name;
          this.facultyMaster.lastname = facultyDetails.Faculty_Last_Name;
          this.facultyMaster.dateofbirth = this.utilityService.formatDate(facultyDetails.Dateofbirth);
          this.facultyMaster.email = facultyDetails.Faculty_Email;
          this.facultyMaster.phoneno = facultyDetails.Faculty_Mobileno;
          this.facultyMaster.designation = facultyDetails.DesigId;
          this.facultyMaster.department = facultyDetails.DeptId;
          // this.facultyMaster. = facultyDetails.BranchId;
          // this.facultyMaster. = facultyDetails.LocationId;
          this.facultyMaster.companyName = facultyDetails.CompanyId;
          this.facultyMaster.experience = facultyDetails.Experince;
          this.imageSrc = `assets/employee_images/${facultyDetails.Faculty_Code}_image.jpeg`;
          this.facultyMaster.bloodgroup = facultyDetails.Blood_Group;
          this.facultyMaster.address = facultyDetails.Address;
          this.facultyMaster.aadharno = facultyDetails.Aadhar_No;
          this.facultyMaster.panno = facultyDetails.Pan_No;
          this.facultyMaster.emrgName = facultyDetails.Emergency_Contact_Name;
          this.facultyMaster.emrgMobileno = facultyDetails.Emergency_Contact_No;
          this.facultyMaster.emrgRelation = facultyDetails.Emergency_Contact_Relationship;
          this.facultyMaster.city = facultyDetails.City;
          this.facultyMaster.state = facultyDetails.State;
          this.facultyMaster.country = facultyDetails.Country;
          this.facultyMaster.pincode = facultyDetails.Pincode;

      });      
    }

    public reset(){
      this.facultyMaster  = {} as FacultyMaster;
      this.removeBranchImage();
    }

    public deleteFacultydetails(employeeId){

      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.facultyService.deleteFacultyMaster(employeeId).subscribe(resp=>{
            if(resp.status == 200){
              Swal.fire('Removed!', 'Employee removed successfully.', 'success');
              this.getFacultyList();
            }
            else{
              Swal.fire('Cancelled', 'Emplpoyee still in our database.)', 'error');
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Emplpoyee still in our database.)', 'error');
        }
      });
    }

    public showFilter(){
      if(this.isFilter)
      this.isFilter = false
      else
      this.isFilter = true
    }

}
