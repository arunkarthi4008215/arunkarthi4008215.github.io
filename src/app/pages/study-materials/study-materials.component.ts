import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadStudyMaterialService } from 'app/components/upload-study-material/upload-study-material.service';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModalComponent } from 'app/modals/material-modal/material-modal.component';

@Component({
    selector: 'study-materials-cmp',
    moduleId: module.id,
    templateUrl: 'study-materials.component.html'
})

export class StudyMaterialsComponent implements OnInit{
  
  @ViewChild('MaterialModalComponent') MaterialModalComponent:MaterialModalComponent
  
  public  studyMaterials : any =[];
  public  loader: boolean = true;
  public  nodata: boolean = false;
  public  submitted: boolean = false;
  public  Datatable: boolean;
  public  departmentList: any;
  public  department:any;
  folderCount: any;

  constructor(private dropDownlist:DropdownlistService,
              private materialService:UploadStudyMaterialService,
              private materialModal:NgbModal,
              ) 
              {}

    ngOnInit(): void {
     
      this.getrMaterialDepartments();
    }
    public getrMaterialDepartments(){
    this.materialService.getMaterialDepartments().subscribe(response=>{
      const departmentList = response.data || {};
      this.departmentList = departmentList;
      this.folderCount = this.departmentList[0].Folder_Count;
    },error => {console.log(error);
    }
    );
  }
    addNewFolder(){
        const addDialog = this.materialModal.open(MaterialModalComponent,{backdropClass: 'bg-secondary'})
        addDialog.componentInstance.Title = 'AddDepartment';
        addDialog.result.then((result) => {
          this.getrMaterialDepartments();
        }).catch((error)=>{
          // alert(error)
        })
      }
       

}
