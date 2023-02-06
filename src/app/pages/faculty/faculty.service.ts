import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {


  public BaseAdminApiURL:String = environment.apiURL;
  public BaseAdminLocalApiURL:String = environment.apiURL

  constructor(private http:HttpClient,) { }

              public saveEmployeeMaster(facultyreqObj:any): Observable<any> {
                const body={facultyreqObj};
                return this.http.post(this.BaseAdminApiURL + 'facultyapi/insertFaculty', body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getFacultyList(searchObj:any): Observable<any> {
                const params = {
                  departmentId:searchObj.department,
                  designationId:searchObj.designation,
                  companyId:searchObj.companyName
                }
                return this.http.get(this.BaseAdminApiURL + 'facultyapi/getFacultyList',{params}).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getFacultyDetails(employeeId): Observable<any> {
                const params = {EmpId:employeeId};
                const encodedUrl = encodeURI( this.BaseAdminApiURL + 'facultyapi/getFacultyDetails');
                return this.http.get(encodedUrl,{params}).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
            
              public updateFacultyMaster(employeeObj:any): Observable<any> {
                const body ={ employeeObj}
                return this.http.post(this.BaseAdminApiURL + 'facultyapi/updateFaculty',body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
            
              public deleteFacultyMaster(employeeId:any): Observable<any> {
                const body ={ employeeId}
                return this.http.post(this.BaseAdminApiURL + 'facultyapi/deleteFaculty',body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getFacultyCode(): Observable<any> {
                return this.http.get(this.BaseAdminApiURL + 'facultyapi/getFacultyCode').pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
}
