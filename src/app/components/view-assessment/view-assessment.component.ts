import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'app/pages/assessment/assessment.service';
import { UtilityService } from 'services/utility.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
const answers = new Map();
const selectedAns = new Set();
@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrls: ['./view-assessment.component.css']
})
export class ViewAssessmentComponent implements OnInit {
  assessmentId: string;
  assessmentList: any;
  correctAnswerList:any
  startQuiz:boolean = false;
  correctAnswer:number = 0;
  instrunctionUrl: any;
  matchTheFollow = [];
  timerDisplay:any;
  constructor(
              private actroute:ActivatedRoute,
              private assessmentService:AssessmentService,
              private utilityService:UtilityService,
              private sanitizer: DomSanitizer,
              ) {
              }
              
              
              ngOnInit(): void {
                this.assessmentId = this.actroute.snapshot.queryParams.assessmentId;
                this.assessmentService.getAssessmentdetailId(this.assessmentId).subscribe(response=>{
                  const assessmentList = response.data || {};
                  this.assessmentList = assessmentList;
    if (this.assessmentList[0].instructionurl && typeof this.assessmentList[0].instructionurl === 'string') {
      var base64str = this.assessmentList[0].instructionurl;
      const byteArray = new Uint8Array(
        atob(base64str)
          .split("")
          .map(char => char.charCodeAt(0))
          );
          const file = new Blob([byteArray], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          this.instrunctionUrl = fileURL;
    }
    assessmentList.forEach((assessment: any) => {
      if (assessment.question_image_url && typeof assessment.question_image_url === 'string') {
        const firstWord = assessment.question_image_url.charAt(0) + assessment.question_image_url.charAt(1) + assessment.question_image_url.charAt(2) + assessment.question_image_url.charAt(3);
        if (!(firstWord === 'data')) {
          const imageSource = 'data:image/jpeg;base64,' + assessment.question_image_url;
          assessment.question_image_url = this.sanitizer.bypassSecurityTrustResourceUrl(imageSource);
        }
      }
    });
    
    for(let i=0;i<this.assessmentList.length;i++){
      if(this.assessmentList[i].key_str){
         var tempKeyarray =  this.assessmentList[i].key_str.split(",")
         var tempValuearray =  this.assessmentList[i].value_str.split(",")
         var tempmatchTheFollow = [];
         for(let j=0 ; j<tempKeyarray.length ; j++){
           tempmatchTheFollow.push({key:tempKeyarray[j],value:tempValuearray[j]})
           this.matchTheFollow.push(tempmatchTheFollow)
          }
        }
      }
      console.log(this.matchTheFollow)
      
    },error => {console.log(error);
    }
    );
  }

  setSelected(questionId,optionindex,value){
    selectedAns.add(optionindex)
    
    if (this.assessmentList[optionindex].correct_answer.toLowerCase() == value.toLowerCase()){
      ++this.correctAnswer 
      answers.set(questionId, value);
      this.correctAnswerList = answers;
    }
    
  }

  printPdf(base64str) {
    //let json: any =  { "type":"Buffer", "data":this.blob }
    //let bufferOriginal = Buffer.from(json.data);
    const byteArray = new Uint8Array(
      atob(base64str)
        .split("")
        .map(char => char.charCodeAt(0))
    );
    const file = new Blob([byteArray], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    this.instrunctionUrl = fileURL;
    //window.open(fileURL);
  }

  submit(){
    if(selectedAns.size < this.assessmentList.length){
      this.utilityService.toast('top','full-width','Must answer the all question..!','danger');
    }else{
      var Per_mark = this.assessmentList[0].total_score / this.assessmentList.length 
      Swal.fire({
        width: 700,
        html:`<div class="es-wrapper-color" style="background-color:#FAFAFA"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA"><tbody><tr><td valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"><tbody><tr><td class="es-info-area" align="center" style="padding:0;Margin:0"><table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF"><tbody><tr><td align="left" style="padding:20px;Margin:0"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" style="padding:0;Margin:0;display:none"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"><tbody><tr><td align="center" style="padding:0;Margin:0"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"><tbody><tr><td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:20px;padding-right:20px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://vuvkfz.stripocdn.email/content/guids/CABINET_54100624d621728c49155116bef5e07d/images/84141618400759579.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="100"></td></tr><tr><td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px"><h1 style="Margin:0;line-height:46px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#333333">Result</h1></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"><tbody><tr><td align="center" style="padding:0;Margin:0"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"><tbody><tr><td align="left" style="padding:20px;Margin:0"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333">${this.assessmentList[0].assessment_code} - ${this.assessmentList[0].materialName}</h2></td></tr><tr><td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:40px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Apr 17,&nbsp;2021</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esdev-adapt-off" align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><table cellpadding="0" cellspacing="0" class="esdev-mso-table" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px"><tbody><tr><td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"><tbody><tr><td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:70px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" style="padding:0;Margin:0;display:none"></td></tr></tbody></table></td></tr></tbody></table></td><td style="padding:0;Margin:0;width:20px"></td><td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"><tbody><tr><td align="center" style="padding:0;Margin:0;width:265px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:38px;color:#333333;font-size:25px"><strong>Total Questions :&nbsp; ${this.assessmentList.length}<span style="font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif"><span style="font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif"><span style="font-family:verdana, geneva, sans-serif"></span></span></span></strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:38px;color:#333333;font-size:25px"><strong>Total Marks&nbsp; &nbsp; &nbsp; &nbsp; : ${this.assessmentList[0].total_score}</strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:38px;color:#333333;font-size:25px"><strong>Your Score&nbsp; &nbsp; &nbsp; &nbsp;  : ${ Per_mark * this.correctAnswer}</strong></p></td></tr>
  <tr><td align="center" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:38px;color:#333333;font-size:18px"><strong>Number Correct Answers: ${this.correctAnswer}</strong></p></td></tr>
</tbody></table></td></tr></tbody></table></td><td style="padding:0;Margin:0;width:20px"></td><td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"><tbody><tr><td align="left" style="padding:0;Margin:0;width:80px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" style="padding:0;Margin:0;display:none"></td></tr></tbody></table></td></tr></tbody></table></td><td style="padding:0;Margin:0;width:20px"></td><td class="esdev-mso-td" valign="top" style="padding:0;Margin:0"><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"><tbody><tr><td align="left" style="padding:0;Margin:0;width:85px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" style="padding:0;Margin:0;display:none"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:560px"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"><tbody><tr><td class="es-info-area" align="center" style="padding:0;Margin:0"><table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF"><tbody><tr><td align="left" style="padding:20px;Margin:0"><table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody><tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px"><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tbody></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>`, 
        color: '#716add',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../../../assets/img/celebrate.gif")
          left top
          no-repeat
        `
      })
    }
  }
  startquiz(){
    this.startQuiz = true
    this.timer(this.assessmentList[0].total_time)
  }
  timer(minute) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.timerDisplay = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }
}


