import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'services/utility.service';
import { DataTableService } from 'app/services/data-table.service';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BranchService } from './branch-master.sevice';
import { BranchModalComponent } from '../master-modal/branch-modal/branch-modal.component';
// import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.css']
})
export class BranchMasterComponent implements OnInit {
  
  @ViewChild('BranchModalComponent') BranchModalComponent:BranchModalComponent
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  

  isFilterModalOpen: boolean = false;
  loader: boolean;
  nodata: boolean;
  branchList: any;
  branchForm:FormGroup;
  submitted:boolean;
  constructor(private utility:UtilityService,
              private dataTable:DataTableService,
              private ngmodal:NgbModal,
              private formBuilder:FormBuilder,
              private branchService:BranchService) {
                
               }

  ngOnInit(): void {
    this.dtOptions = this.dataTable.getDataTableOptions(false, true, 'Stock Receive List');
    this.getBranchList();
  }
  get registerFormControl() {
    return this.branchForm.controls;
  }
  getBranchList(){
    this.loader = true;
    this.nodata = true;                          
    this.branchService.getBranchList().subscribe(response=>{
      const branchlist = response.data || {};
      this.loader = false
      if(branchlist.length > 0 ){
       setTimeout( ()=>(this.nodata = false),500);
        this.branchList = branchlist; 
      }

    },error => {this.loader = false ,this.nodata = true,this.utility.toast('top','right','!Response Error','warning')}
    );
  }
  addBranch():void{
    const addDialog = this.ngmodal.open(BranchModalComponent,{size:'md',backdropClass: 'bg-secondary'})
    addDialog.componentInstance.Title = 'Addbranch';
    addDialog.componentInstance.edit = false;
    addDialog.result.then((result) => {
      this.getBranchList()
    }).catch((error)=>{
    })
  }
  editBranch(id):void{
    const editDialog = this.ngmodal.open(BranchModalComponent,{size:'md',backdropClass: 'bg-secondary'})
    editDialog.componentInstance.Title = 'Editbranch';
    editDialog.componentInstance.edit = true;
    editDialog.componentInstance.branchId = id;
    editDialog.result.then((result) => {
      this.getBranchList()
    }).catch((error)=>{
    })
  }
  closeFilterModal():void{
  }

  navigateToBack():void{
    this.utility.navigateBackWard()
  }
    
}
