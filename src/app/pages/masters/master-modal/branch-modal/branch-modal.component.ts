import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'services/utility.service';
import { DataTableService } from 'app/services/data-table.service';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { NgbModal,NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BranchService } from '../../branch-master/branch-master.sevice';
import { DropdownlistService } from 'app/services/dropdownlist.service';

@Component({
  selector: 'app-branch-modal',
  templateUrl: './branch-modal.component.html',
  styleUrls: ['./branch-modal.component.css']
})
export class BranchModalComponent implements OnInit {


    
  isFilterModalOpen: boolean = false;
  loader: boolean;
  nodata: boolean;
  branchList: any;
  edit:boolean = false;
  public branchForm:FormGroup;
  submitted:boolean;
  locationList: any;
  branchId: any;
  constructor(private utility:UtilityService,
    private dataTable:DataTableService,
    public activedialog:NgbActiveModal,
    private formBuilder:FormBuilder,
    private branchService:BranchService,
    private dropdownService:DropdownlistService) {
    this.branchForm =  this.formBuilder.group({
      branchCode: ['', Validators.required],
      branchName: ['', Validators.required],
      locationId: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.dropdownService.getDDLocationMaster().subscribe( resp =>{
      if(resp.success){
        this.locationList = resp.data
      }
    });

 

    if(this.branchId){
      this.branchService.getBranchData(this.branchId).subscribe( resp =>{
        const branchData = resp.data || {};
            this.branchForm.controls['branchCode'].setValue(branchData[0].branchCode); 
            this.branchForm.controls['branchName'].setValue(branchData[0].branchName); 
            this.branchForm.controls['locationId'].setValue(branchData[0].locationId); 
        },error => {console.log(error);
      });
    }
    else{
      this.branchService.getBranchCode().subscribe( resp =>{
        const branchCode = resp.data[0] || {};
            this.branchForm.controls['branchCode'].setValue(branchCode.Branch_Code); 
        },error => {console.log(error);
      });
    }
  }

  get branchform() { return this.branchForm.controls; }


  onSubmit():void{
    this.submitted = true;

    // stop here if form is invalid
    if (this.branchForm.invalid) {
        return;
    }else{
      if(this.branchId){
          this.branchForm.value.branchId = this.branchId;
          this.branchService.updateBranchMaster(this.branchForm.value).subscribe( resp =>{
            const branchCode = resp.data || {};
            if(resp.success){
              this.utility.toast('top','right','Updated Successfully','success');
              this.closeModal()
            }else if(resp.status == 404){
              this.utility.toast('top','right','Failed to Update','warning');
            }
                
            },error => {this.utility.toast('top','right','!Server Error','warning');
          });
        }else{
          this.branchService.saveBranchMaster(this.branchForm.value).subscribe( resp =>{
            const branchCode = resp.data || {};
            if(resp.success){
              this.utility.toast('top','right','Saved Successfully','success');
              this.closeModal()
            }else if(resp.status == 404){
              this.utility.toast('top','right','Failed to Save','warning');
            }
                
            },error => {this.utility.toast('top','right','!Server Error','warning');
          });
        }
    }
    }

    updateBranch():void{
      if (this.branchForm.invalid) {
        return;
    }else{
      
    }
    }

  onReset() {
    this.submitted = false;
    this.branchForm.reset();
  }
  closeModal(){
    this.activedialog.close()
  }

}
