import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadStudyMaterialService } from 'app/components/upload-study-material/upload-study-material.service';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import { AadharVerifySerivce } from 'services/aadharverify.service';
import { UtilityService } from 'services/utility.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'aadhar-verify-modal',
  templateUrl: './aadhar-verify-modal.component.html',
  styleUrls: ['./aadhar-verify-modal.component.scss'],
})


export class AadharVerifyModalComponent implements OnInit {
        
      public aadharVerifyForm: FormGroup;
      videoBase64: any;
      captchaImage:string;
      isAdharValidate: boolean;
      captchaTxnId: any;
      aadharno:any
      Title: any;
      btnloader:any;
      
      constructor(public activedialog:NgbActiveModal,
                  private formBuilder: FormBuilder,
                  private utilityService:UtilityService,
                  private aadharVerifyService:AadharVerifySerivce) {
                    this.aadharVerifyForm = this.formBuilder.group({
                      aadharNo:['', Validators.required],
                      captcha:['',Validators.required]
                    });
                   }
    
      ngOnInit(): void {
        this.aadharVerifyForm.controls['aadharNo'].setValue(this.aadharno)
        this.getCaptcha()
      }
      getCaptcha(){
        this.aadharVerifyService.getCaptcha().subscribe(response =>{
          if(response.status == 'Success'){
            this.captchaImage = 'data:image/jpeg;base64,'+response.captchaBase64String
            this.captchaTxnId = response.captchaTxnId;
          }
        });
      }
      onVerifyAdhar():void{
        this.isAdharValidate = false;
        if(this.aadharVerifyForm.invalid){
          this.isAdharValidate = true;
        }
        else{
          const aadharObject = {
                                "uid": this.aadharVerifyForm.value.aadharNo,
                                "captchaTxnId": this.captchaTxnId,
                                "captcha": this.aadharVerifyForm.value.captcha,
                                transactionId: "MYAADHAAR:862edca5-583f-4036-bd8b-e313c3d08630"
                                }
          this.aadharVerifyService.verifyAadharNo(aadharObject).subscribe(resp=>{
            if(resp.status == 400){
            this.utilityService.toast('top','right','Invalid Captcha','warn');
            this.aadharVerifyForm.controls['captcha'].setValue('')
            this.getCaptcha()
            }
            else if(resp.status =='Success'){
              if(resp.statusMessage === this.aadharVerifyForm.value.aadharNo+" doesn't exist"){
                this.utilityService.toast('top','right','Aadhar Number Does Not Exists in Goverment Database','danger');
                this.aadharVerifyForm.reset()
                this.getCaptcha()
              }else{
                  Swal.fire('Verified Successfully!', '', 'success')
                  this.closeModal()
              }
            }
          })
        }
      }

      isEmpty(val){
        return (val === undefined || val == null || val.length <= 0 || val === '') ? true : false;
      }

      public closeModal(){
        var result;
        if(this.isEmpty(this.aadharVerifyForm.value.aadharNo)){
        result = {
          aadharNo:'',
          isaadharVerify:false
        }
      }
        else{result = {
          aadharNo:this.aadharVerifyForm.value.aadharNo,
          isaadharVerify:true
        }
      }
        this.activedialog.close(result)
    }
}