import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AsyncSubject, Subject,Observable, ReplaySubject } from 'rxjs';
import * as uuid from 'uuid';
import { Location } from '@angular/common';
import { MaterialMaster } from 'app/interfaces/study-material-upload';
import { AssessmentService } from 'app/pages/assessment/assessment.service';
import { DropdownlistService } from 'app/services/dropdownlist.service';
import { UtilityService } from 'services/utility.service';


export interface SelectedFiles {
  name: string;
  file: any;
  base64?: string;
}

@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html'
})
export class CreateAssessmentComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  assessmentForm: FormGroup;
  assessments: FormArray;
  videoBase64: string;
  departmentList: any;
  docFile: any ={};
  docBase64: string;
  files: any[] = [];
  videoFile:any={};

  public materialMaster :MaterialMaster ={} as MaterialMaster

  public stepper = 1;
  public isCompleted1: boolean = false;
  public isCompleted2: boolean = false;
  public isCompleted3: boolean = false;
  public isActive1: boolean = true;
  public isActive2: boolean = false;
  public isActive3: boolean = false;

  private editorSubject: Subject<any> = new AsyncSubject();
  public Questions: any = ["Question1"]
  questionTypevalue: any;
  indexedQType: any;
  indexedQType1: boolean;
  indexedQType2: boolean;
  indexedQType3: boolean;
  indexedQType4: boolean;
  assessmentCode: any;
  materialList: any;
  assessmentId: string;
  temparray:any
  instructionUrl: string;
  images = [];
  
  constructor(private formBuilder: FormBuilder,
              private assessmentService:AssessmentService,
              private dropDownlist:DropdownlistService,
              private utilityService:UtilityService,
              private location:Location) {  
    this.assessmentForm = this.formBuilder.group({
    assessments: this.formBuilder.array([this.createItem()]),
    studyMaterial:["1",Validators.required],
    assessmentCode:["",Validators.required],
    instructions:["",Validators.required],
    instructionurl:["",Validators.required],
    totalMarks:["",Validators.required],
    totalHours:["",Validators.required]
  });}


  ngOnInit(): void {
    this.getAssessmentCode()
    this.assessmentForm.value.studyMaterial = "1"
    this.assessmentForm.value.assessments[0].questionType = "0type2"
    this.assessmentForm.value.assessments[0].image = ""

    this.dropDownlist.getDDStudyMaterial().subscribe(response=>{
      const materialList = response.data || {};
        this.materialList = materialList;       
    },error => {console.log(error);
    }
    );
  }

  navigateBack() {
    this.location.back();
  }

  createItem() {
    return this.formBuilder.group({
      question: ["", Validators.required],
      optiona: ["", Validators.required],
      optionb: ["", Validators.required],
      optionc: ["", Validators.required], 
      optiond: ["", Validators.required],
      Listka:["",Validators.required],
      Listkb:["",Validators.required],
      Listkc:["",Validators.required],
      Listkd:["",Validators.required],
      Listva:["",Validators.required],
      Listvb:["",Validators.required],
      Listvc:["",Validators.required],
      Listvd:["",Validators.required],
      answer: ["", Validators.required],
      questionType: ["0type1", Validators.required],
      image: ["",Validators.required]
    });
  }
  addItem(): void {
    this.assessments = this.assessmentForm.get('assessments') as FormArray;
    var i = this.assessments.length
    this.assessments.push(this.createItem());
    this.assessmentForm.value.assessments[i].questionType = i+ 'type2';
  }
  removeRow(index) {
    console.log(index);
    (<FormArray>this.assessmentForm.get("assessments")).removeAt(index);
  }

  handleEditorInit(e) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  shuftleArray() {
  this.temparray=[]
  for(let j=0; j<3;j++){
    const array =["i(a)","ii(b)","iii(c)","iv(d)"]
      let len=0;
      var m = array.length, t, i;
      while (m) {    
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      this.temparray.push(array.toString())
    }
    console.log(this.temparray);

}
    public bindInstruction(event) : void {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.onload = (event: any) => {
          var url = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
        var reader2 = new FileReader();
        reader2.onload =this.handleInsructionFile.bind(this);
        reader2.readAsBinaryString(event.target.files[0]);      
         
      }

    }
      handleInsructionFile(event){
        var binaryString = event.target.result;
        var base64textString= btoa(binaryString);
        this.instructionUrl  = base64textString
        console.log(btoa(binaryString));
        }

        public selectedFiles : SelectedFiles[] = [];

  public toFilesBase64(files: File[], selectedFiles: SelectedFiles[]): Observable<SelectedFiles[]> {
    const result = new AsyncSubject<SelectedFiles[]>();
    if (files?.length) {
      Object.keys(files)?.forEach(async (file, i) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (e) => {
          selectedFiles = selectedFiles?.filter(f => f?.name != files[i]?.name)
          selectedFiles[0] ={ name: files[i]?.name, file: files[i], base64: reader?.result as string }
          result.next(selectedFiles);
          if (files?.length === (i + 1)) {
            result.complete();
          }
        };
      });
      return result;
    } else {
      result.next([]);
      result.complete();
      return result;
    }
  }
        public bindQuestionImage(files: File[]) : void {
          this.toFilesBase64(files, this.selectedFiles).subscribe((res: SelectedFiles[]) => {
            this.selectedFiles = res;
            this.images.push(res)
          });          
          
          }
          handleImageFile(event,i){
            var binaryString = event.target.result;
            var base64textString= btoa(binaryString);
            this.images.push(base64textString,i)
            console.log(btoa(binaryString));
            }

    public removeInstruction(){
      this.assessmentForm.value.instructionurl = ""
    }
  nextStepper() {
    this.assessmentForm.value.assessments[0].questionType = "0type2"
    if (this.stepper == 1) {
      const instructionUrlempty = this.isEmpty(this.instructionUrl)
      const instructionempty = this.isEmpty(this.materialMaster.instruction)

      if( instructionUrlempty && instructionempty){
        this.utilityService.toast('top','right','Instruction cannot be empty !','danger');
      }
      else{
        
        this.stepper = 2;
        this.isActive2 = true;
        this.isCompleted1 = true;
      }
    } else if (this.stepper == 2) {
      this.stepper = 3;
      this.isActive3 = true;
      this.isCompleted2 = true;
      this.isCompleted3 = true;
    }
  }
  
  reset(){
    this.assessmentForm.reset();
    this.stepper = 1;
    this.isCompleted1 = false;
    this.isCompleted2 = false;
    this.isCompleted3 = false;
    this.isActive1 = true;
    this.isActive2 = false;
    this.isActive3 = false;
  }


  isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
  public getAssessmentCode(){
    this.assessmentService.getAssessmentCode().subscribe(response=>{
      const assessmentCode = response.data[0] || {};
        this.assessmentCode = assessmentCode.assessment_code; 
    },error => {console.log(error);
    }
    ); 
  }
    saveAssement(){
      if(this.isEmpty(this.assessmentForm.value.totalMarks)){
        this.utilityService.toast('top','right','Total Marks cannot be empty !','danger');
      }
      if(this.isEmpty(this.assessmentForm.value.totalHours)){
        this.utilityService.toast('top','right','Total Hours cannot be empty !','danger');
      }
      else{
      this.assessmentForm.value.assessmentCode = this.assessmentCode
      this.assessmentForm.value.instructionurl = this.instructionUrl
      this.assessmentForm.value.instructions = this.materialMaster.instruction;
      for( let i = 0 ; i < this.images.length ; i++){
        const imageArray = this.images[i][0].base64.split(',');
        this.assessmentForm.value.assessments[i].image = (imageArray.length > 1) ? imageArray[1] : ''
      }
    this.assessmentService.saveAssessment(this.assessmentForm.value).subscribe(res=>{
      if(res.status == 200 ){
        this.assessmentId = res.data.LastInsertid 
      }
      this.nextStepper();
    })
    }
  }

}
