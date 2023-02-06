import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  public BaseAdminApiURL:String = environment.apiURL;
  constructor(private http:HttpClient) { }

  public saveEmployeeMaster(facultyreqObj:any): Observable<any> {
    const body={facultyreqObj};
    return this.http.post(this.BaseAdminApiURL + 'employeeapi/insertEmployee', body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public getEmployeeList(searchObj:any): Observable<any> {
    const params = {
                    departmentId:searchObj.department,
                    designationId:searchObj.designation,
                    companyId:searchObj.companyName
                  }
    return this.http.get(this.BaseAdminApiURL + 'employeeapi/getEmployeeList',{params}).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public getEmployeeCode(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'employeeapi/getEmployeeCode').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public getEmployeeDetails(employeeId): Observable<any> {
    const params = {EmpId:employeeId};
    const encodedUrl = encodeURI( this.BaseAdminApiURL + 'employeeapi/getEmployeeDetails');
    return this.http.get(encodedUrl,{params}).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public updateEmployeeMaster(employeeObj:any): Observable<any> {
    const body ={ employeeObj}
    return this.http.post(this.BaseAdminApiURL + 'employeeapi/updateEmployee',body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public deleteEmployeeMaster(employeeId:any): Observable<any> {
    const body ={ employeeId}
    return this.http.post(this.BaseAdminApiURL + 'employeeapi/deleteEmployee',body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
}
