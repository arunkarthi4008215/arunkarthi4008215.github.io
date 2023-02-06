import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})  
export class DropdownlistService {
  
  
  public BaseAdminApiURL:String = environment.apiURL;
  public BaseAdminLocalApiURL:String = environment.apiURL
  
  constructor(private http:HttpClient) { }
  
  public getDesignationMaster(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getDesignationMaster').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  public getCompanyMaster(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getCompanyMaster').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  public getDepartmentMaster(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getDepartmentMaster').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  public getIndustryMaster(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getIndustryMaster').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  public getDDMaterialDepartments(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getDDMaterialDepartments').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  } 
  
  public getAllMaterialsDD(): Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getAllMaterialsDD').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  
  public addDepartment(deptObj): Observable<any> {
    const body=deptObj;
    return this.http.post(this.BaseAdminApiURL + 'dropdownapi/addDepartment', body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  getDDStudyMaterial() : Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getDDStudyMaterial').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
  getDDLocationMaster() : Observable<any> {
    return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getDDLocationMaster').pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
}
