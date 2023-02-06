import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialMaster } from 'app/interfaces/study-material-upload';
import { Observable, ReplaySubject } from 'rxjs';
import { UtilityService } from 'services/utility.service';
import { UploadStudyMaterialService } from './upload-study-material.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultySearch } from 'app/interfaces/facultySearch';
import { DropdownlistService } from 'app/services/dropdownlist.service';



@Component({
  selector: 'app-upload-study-material',
  templateUrl: './upload-study-material.component.html',
  styleUrls: ['./upload-study-material.component.css']
})
export class UploadStudyMaterialComponent implements OnInit {

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  files: any[] = [];
  videoFile: any = {};
  materialMaster: MaterialMaster = {} as MaterialMaster;
  isMasterValidate: boolean;
  videoBase64: string;
  departmentList: any;
  docFile: any = {};
  docBase64: string;

  constructor(private utilityService: UtilityService,
    private uploadMaterialService: UploadStudyMaterialService,
    private router: Router,
    private actroute: ActivatedRoute,
    private dropDownlist: DropdownlistService) { }

  ngOnInit(): void {
    this.materialMaster.industry = ""
    this.materialMaster.language = "";
    this.materialMaster.department = this.actroute.snapshot.queryParams.deptId
    this.getMaterialCode();

    this.dropDownlist.getDepartmentMaster().subscribe(response => {
      const departmentList = response.data || {};
      this.departmentList = departmentList;
    }, error => {
      console.log(error);
    }
    );
  }

  public getMaterialCode() {
    this.uploadMaterialService.getMaterialCode().subscribe(response => {
      const materilCode = response.data[0] || {};
      this.materialMaster.materialCode = materilCode.Material_Code;

    }, error => {
      console.log(error);
    }
    );
  }
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }
  overviewAttachmentchanger(files) {
    this.preparedocList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile() {
    if (this.videoFile.progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.videoFile = {}
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator() {
    setTimeout(() => {
      const progressInterval = setInterval(() => {
        if (this.videoFile.progress === 100) {
          clearInterval(progressInterval);
        } else {
          this.videoFile.progress += 5;
        }
      }, 200);
    }
      , 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    files[0].progress = 0;
    this.videoFile = files[0];
    this.formatBase64(this.videoFile).subscribe(base64 => {
      this.videoBase64 = base64;
    });
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator();
  }

  preparedocList(files: Array<any>) {
    files[0].progress = 0;
    this.docFile = files[0];
    this.formatBase64(this.docFile).subscribe(base64 => {
      this.docBase64 = base64;
    });
  }

  formatBase64(videoFile: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(videoFile);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }
  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const fileSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    this.materialMaster.fileSize = fileSize;
    return fileSize;
  }

  isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }




  //    saveMaterials(){
  //     this.isMasterValidate = false;
  //     if (this.videoBase64) {
  //       const splitStr = this.videoFile.type.split('/')
  //       this.materialMaster.fileFormat = splitStr[1];
  //       this.materialMaster.videoFile = this.videoBase64;
  //     }
  //     if (this.docBase64) {
  //       this.materialMaster.overview = "";
  //       const splitStr = this.videoFile.type.split('/')
  //       this.materialMaster.attachmentfileFormat = splitStr[1];
  //       this.materialMaster.overviewAttachment = this.docBase64;
  //     }
  //     if(this.isEmpty(this.materialMaster.title)){
  //         this.isMasterValidate = true;
  //         this.utilityService.toast('top','right','Title cannot be empty !','danger');
  //     }
  //     else if(this.isEmpty(this.materialMaster.subtitle)){
  //       this.isMasterValidate = true;
  //       this.utilityService.toast('top','right','Subtitle cannot be empty !','danger');
  //   }
  //     else if(this.isEmpty(this.materialMaster.industry)){
  //       this.isMasterValidate = true;
  //       this.utilityService.toast('top','right','Industry cannot be empty !','danger');
  //   }
  //     else if(this.isEmpty(this.materialMaster.language)){
  //       this.isMasterValidate = true;
  //       this.utilityService.toast('top','right','Language cannot be empty !','danger');
  //   }
  //   else if(this.isEmpty(this.materialMaster.department)){
  //     this.isMasterValidate = true;
  //     this.utilityService.toast('top','right','Department cannot be empty !','danger');
  // }
  //     else if(this.isEmpty(this.materialMaster.shortDescription)){
  //       this.isMasterValidate = true;
  //       this.utilityService.toast('top','right','ShortDescription cannot be empty !','danger');
  //   }
  //     else if(this.isEmpty(this.materialMaster.videoFile)){
  //       this.isMasterValidate = true;
  //       this.utilityService.toast('top','right','Graphic media cannot be empty !','danger');
  //   }
  //   //   else if(this.isEmpty(this.materialMaster.overviewAttachment) ){
  //   //     this.isMasterValidate = true;
  //   //     this.utilityService.toast('top','right','Overview is empty','danger');
  //   // }
  //     else{
  //         this.uploadMaterialService.saveMaterialMaster(this.materialMaster).subscribe(response=>{
  //           if(response.status == "200"){
  //             // this.router.navigateByUrl('/study-materials')s
  //             this.utilityService.toast('top','right','Saved Successfully','success');
  //             Swal.fire({
  //               title: 'Saved Successfully',
  //               showCancelButton: true,
  //               confirmButtonColor: '#3085d6',
  //               cancelButtonColor: '#d33',
  //               confirmButtonText: 'Go To Materials',
  //             }).then((result) => {
  //               /* Read more about isConfirmed, isDenied below */
  //               if (result.isConfirmed) {
  //               } 
  //             })
  //           }else{
  //             this.utilityService.toast('top','right','!Response Error','warning');
  //           }
  //         },error => {this.utilityService.toast('top','right','!Response Error','warning')}
  //         );
  //   }
  //   }

  saveMaterials() {
    this.isMasterValidate = false;
    if (this.videoBase64) {
      const splitStr = this.videoFile.type.split('/')
      this.materialMaster.fileFormat = splitStr[1];
      this.materialMaster.videoFile = this.videoBase64;
    }
    if (this.docBase64) {
      this.materialMaster.overview = "";
      const splitStr = this.docFile.type.split('/')
      this.materialMaster.attachmentfileFormat = splitStr[1];
      this.materialMaster.overviewAttachment = this.docBase64;
    }
    if (this.isEmpty(this.materialMaster.title)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Title cannot be empty !', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.subtitle)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Subtitle cannot be empty !', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.industry)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Industry cannot be empty !', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.language)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Language cannot be empty !', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.department)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Department cannot be empty !', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.shortDescription)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'ShortDescription cannot be empty !', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.overviewAttachment)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Overview is empty', 'danger');
    }
    else if (this.isEmpty(this.materialMaster.videoFile)) {
      this.isMasterValidate = true;
      this.utilityService.toast('top', 'right', 'Graphic media cannot be empty !', 'danger');
    }
    else {
      this.uploadMaterialService.saveMaterialMaster(this.materialMaster).subscribe(response => {
        if (response.status == "200") {
          this.utilityService.toast('top', 'right', 'Saved Successfully', 'success');
          Swal.fire({
            title: 'Saved Successfully',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go To Materials',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.router.navigateByUrl('app/study-materials')
            }
          })
        } else {
          this.utilityService.toast('top', 'right', '!Response Error', 'warning');
        }
      }, error => { this.utilityService.toast('top', 'right', '!Response Error', 'warning') }
      );
    }
  }
}
