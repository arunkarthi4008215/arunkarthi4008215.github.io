import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { UtilityService } from 'services/utility.service';
import { UploadStudyMaterialService } from '../upload-study-material/upload-study-material.service';
import {NgbModal, NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModalComponent } from 'app/modals/material-modal/material-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-study-material',
  templateUrl: './view-study-material.component.html',
  providers: [NgbNavConfig]
})
export class ViewStudyMaterialComponent implements OnInit {
  
  isPlay = false;
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  @ViewChild('MaterialModalComponent') MaterialModalComponent:MaterialModalComponent
  
  public startedPlay:boolean = false;
  public loader: boolean;
  public title:string;
  public video:string;
  public studyMaterials:any = [];
  public matId:string;
  
  public show:boolean = false;
  public overview: any;
  public pdffile: string;
  backUrl: string;

  constructor(private materialService:UploadStudyMaterialService,
              private utlityService:UtilityService,
              private config:NgbNavConfig,
              private actroute:ActivatedRoute,
              private materialModal:NgbModal,
              private router:Router) { }

  ngOnInit(): void {
    this.config.destroyOnHide = false;
    this.config.roles = false;
    this.matId = this.actroute.snapshot.queryParams.matId;
    this.getMaterialById(this.matId);
  }

  back(){
    alert("["+"\'/study-materials-list\'"+ this.studyMaterials[0].department+"]")
    this.router.navigateByUrl("["+"\'app/study-materials-list\'"+ +this.studyMaterials[0].department+"]")
  }
  public getMaterialById(matId){
    this.loader = true;
                                  
    this.materialService.getMaterialById(matId).subscribe(response=>{
      const materialslist = response.data || {};
       setTimeout( ()=>(
         this.loader = false),500);
        this.studyMaterials = materialslist;
        this.video = "../../../assets/materials/"+this.studyMaterials[0].materialCode+"_image.mp4"
        this.pdffile = "../../../assets/overview-attachment/"+this.studyMaterials[0].materialCode+"_attachment.pdf"
        this.overview = this.studyMaterials[0].Overview;        
        this.title = this.studyMaterials[0].materialTitle;
    },error => {this.utlityService.toast('top','right','!Response Error','warning')}
    );
  }
  public deleteMaterial(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.materialService.deleteMaterial(this.matId).subscribe(resp=>{
          if(resp.status == 200){
            Swal.fire('Removed!', 'Material removed successfully.', 'success');
            this.router.navigateByUrl('app/study-materials')
          }
          else{
            Swal.fire('Cancelled', 'Material still in our database.)', 'error');
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Material still in our database.)', 'error');
      }
    });
  
  }
  editMaterial(){
    const addDialog = this.materialModal.open(MaterialModalComponent,{size:'lg',scrollable:true,backdropClass: 'bg-secondary'})
        addDialog.componentInstance.Title = 'Editmaterial';
        addDialog.componentInstance.matId = this.matId;
        addDialog.result.then((result) => {
          this.getMaterialById(this.matId);
        }).catch((error)=>{
          // alert(error)
        })
  }
  toggleVideo(event: any) {
    if (!this.isPlay) {
      this.isPlay = true;
      this.videoplayer.nativeElement.play();
    } else{
      this.isPlay = false;
      this.videoplayer.nativeElement.pause();
    }
  }
}
