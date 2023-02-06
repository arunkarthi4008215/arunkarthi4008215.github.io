import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadStudyMaterialService } from 'app/components/upload-study-material/upload-study-material.service';
import { FacultySearch } from 'app/interfaces/facultySearch';
import { MaterialMaster } from 'app/interfaces/study-material-upload';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import Swal from 'sweetalert2';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-material-modal',
  templateUrl: './material-modal.component.html',
  styleUrls: ['./material-modal.component.css']
})
export class MaterialModalComponent implements OnInit {

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  public facultySearch:FacultySearch = {} as FacultySearch
  public materialMaster:MaterialMaster = {} as MaterialMaster
  departmentList: any;
  Title: string;
  matId: string;
  industries: any;
  videoFile:any={};
  videoBase64: any;
  docFile: any;
  docBase64: string;
  doceditFile: string;
  constructor(public activedialog:NgbActiveModal,
              private dropDownlist:DropdownlistService,
              private materialService:UploadStudyMaterialService) { }

  ngOnInit(): void {

    if(this.Title=='Editmaterial'){
      this.getMarterialById(this.matId)
      this.dropDownlist.getDepartmentMaster().subscribe(response=>{
        const departmentList = response.data || {};
          this.departmentList = departmentList;       
      },error => {console.log(error);
      }
      );
      this.dropDownlist.getDepartmentMaster().subscribe(response=>{
        const departmentList = response.data || {};
          this.departmentList = departmentList;       
      },error => {console.log(error);
      }
      ); 
      this.dropDownlist.getIndustryMaster().subscribe(response=>{
        const industrieslist = response.data || {};
          this.industries = industrieslist;       
      },error => {console.log(error);
      }
      ); 
    }
    else{
      this.facultySearch.department = "0"
    this.dropDownlist.getDDMaterialDepartments().subscribe(response=>{
      const departments = response.data || {};
        this.departmentList = departments;       
    },error => {console.log(error);
    }
    ); 
  }
  }
  public closeModal(){
    this.activedialog.close('ModalClosed')
  }

  public saveDepartmentfolder(){
    this.dropDownlist.addDepartment(this.facultySearch).subscribe(res =>{
      if(res.success){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Department Created Successfully',
          showConfirmButton: false,
          timer: 500
        });
        this.activedialog.close('ModalClosed')
      }
    })
  }
  public updateMaterial(){
    this.materialMaster.videoFile = this.videoBase64
    if (this.docBase64) {
      this.materialMaster.overview = "";
      const splitStr = this.docFile.type.split('/')
      this.materialMaster.attachmentfileFormat = splitStr[1];
      this.materialMaster.overviewAttachment = this.docBase64;
      console.log(this.materialMaster.overviewAttachment);
      
    }
    this.materialMaster.matId = this.matId
    this.materialService.updateMaterialsMaster(this.materialMaster).subscribe(res =>{
      if(res.success){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Department Created Successfully',
          showConfirmButton: false,
          timer: 500
        });
        this.activedialog.close('ModalClosed')
      }
    })
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
    this.formatBase64(this.videoFile).subscribe(base64=>{
      this.videoBase64 = base64;
    });
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator();
  }

  formatBase64(videoFile:File):Observable<string>{
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(videoFile);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }
  overviewAttachmentchanger(files) {
    this.preparedocList(files);
  }

  preparedocList(files: Array<any>) {
    files[0].progress = 0;
    this.docFile = files[0];
    this.formatBase64(this.docFile).subscribe(base64=>{
      this.docBase64 = base64;
    });
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

  isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
  public getMarterialById(matId){
    this.materialService.getMaterialById(matId).subscribe(res=>{
      if(res.success){
        const response = res.data[0] || {}
        this.materialMaster.materialCode = response.materialCode
        this.materialMaster.title = response.materialTitle
        this.materialMaster.subtitle = response.subtitle
        this.materialMaster.industry = response.industry_Id
        this.materialMaster.department = response.Department_Id
        this.materialMaster.language = response.language
        this.materialMaster.shortDescription = response.shortDescription
        this.materialMaster.overview = response.Overview
        // this.overviewAttachmentchanger("../../../assets/overview-attachment/"+response.materialCode+"_attachment.pdf");

      }
    })
  }
}
