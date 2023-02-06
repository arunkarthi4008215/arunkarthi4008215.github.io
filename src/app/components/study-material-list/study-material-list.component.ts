import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadStudyMaterialService } from 'app/components/upload-study-material/upload-study-material.service';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import { ToastrService } from "ngx-toastr";
import { UtilityService } from 'services/utility.service';

@Component({
  selector: 'app-study-material-list',
  templateUrl: './study-material-list.component.html'
})
export class StudyMaterialListComponent implements OnInit {
  
  

  public studyMaterials : any =[];
  loader: boolean = true;
  nodata: boolean = false;
  submitted: boolean = false;
  Datatable: boolean;
  deptId: any;
  constructor(private toastr: ToastrService,
    private utlityService:UtilityService,
    private materialService:UploadStudyMaterialService,
    private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.deptId = this.actroute.snapshot.queryParams.deptId;
    this.getMaterialsList()
  }
  public getMaterialsList(){
    this.loader = true;
    this.Datatable = true;
                                  
    this.materialService.getMaterialsList(this.deptId).subscribe(response=>{
      const materialslist = response.data || {};
      this.Datatable=true
      if(materialslist.length > 0 ){
       setTimeout( ()=>(
         this.loader = false,this.nodata = false),500);
        this.studyMaterials = materialslist; 
        
      }else{
        setTimeout( ()=>(
          this.loader = false,this.nodata = true),500);
      }

    },error => {this.utlityService.toast('top','right','!Response Error','warning')}
    );
  }
}
