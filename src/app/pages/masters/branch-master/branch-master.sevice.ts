import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class BranchService {


  public BaseAdminApiURL:String = environment.apiURL;
  public BaseAdminLocalApiURL:String = environment.apiURL

  constructor(private http:HttpClient,) { }

              public saveBranchMaster(branchObj:any): Observable<any> {
                const body=branchObj;
                return this.http.post(this.BaseAdminApiURL + 'branchapi/insertBranch', body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getBranchList(): Observable<any> {
                return this.http.get(this.BaseAdminApiURL + 'branchapi/getBranchList').pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getBranchData(branchId): Observable<any> {
                const params = {branchId:branchId};
                const encodedUrl = encodeURI( this.BaseAdminApiURL + 'branchapi/getBranchDetails');
                return this.http.get(encodedUrl,{params}).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
            
              public updateBranchMaster(branchObj:any): Observable<any> {
                const body = branchObj
                return this.http.post(this.BaseAdminApiURL + 'branchapi/updateBranch',body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
              
              public deleteFacultyMaster(employeeId:any): Observable<any> {
                const body ={ employeeId}
                return this.http.post(this.BaseAdminApiURL + 'facultyapi/deleteFaculty',body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getBranchCode(): Observable<any> {
                return this.http.get(this.BaseAdminApiURL + 'branchapi/getBranchCode').pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
}
