import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  public BaseAdminApiURL:String = environment.apiURL;
  constructor(private http:HttpClient) { }

  public saveAssessment(assessmentObj:any): Observable<any> {
    const body=assessmentObj;
    return this.http.post(this.BaseAdminApiURL + 'createassessmentapi/insertAssessment', body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public getAssessmentList(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'createassessmentapi/getAssessmentList').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  public getAssessmentdetailId(assessmentId): Observable<any> {
    const params = {assessmentId:assessmentId};
    const encodedUrl = encodeURI( this.BaseAdminApiURL + 'createassessmentapi/getAssessmentdetailId');
    return this.http.get(encodedUrl,{params}).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public updateEmployeeMaster(employeeObj:any): Observable<any> {
    const body ={ employeeObj}
    return this.http.post(this.BaseAdminApiURL + 'createassessmentapi/updateEmployee',body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public deleteAssessment(employeeId:any): Observable<any> {
    const body ={ employeeId}
    return this.http.post(this.BaseAdminApiURL + 'createassessmentapi/deleteAssessment',body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  public getAssessmentCode(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'createassessmentapi/getAssessmentCode').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
}
