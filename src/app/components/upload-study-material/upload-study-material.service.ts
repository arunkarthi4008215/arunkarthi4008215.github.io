import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadStudyMaterialService {
  
  public BaseAdminApiURL:String = environment.apiURL;
  public BaseAdminLocalApiURL:String = environment.apiURL

  constructor(private http:HttpClient) { }
  
  addDeparmentfolder(departmentId) {
    return this.http.post(this.BaseAdminLocalApiURL + 'studymaterialapi/insertMaterialsMaster', departmentId).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
      public saveMaterialMaster(materialObj:any): Observable<any> {
        const body=materialObj;
        return this.http.post(this.BaseAdminLocalApiURL + 'studymaterialapi/insertMaterialsMaster', body,{observe:'response'}).pipe(map(response =>{
          console.log("response :" +response.headers.get("ETag"));
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }
      public updateMaterialsMaster(materialObj:any): Observable<any> {
        const body=materialObj;
        return this.http.post(this.BaseAdminLocalApiURL + 'studymaterialapi/updateMaterialsMaster', body).pipe(map(response =>{
          
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }
      public deleteMaterial(matId:any): Observable<any> {
        const body={matId:matId};
        return this.http.post(this.BaseAdminLocalApiURL + 'studymaterialapi/deleteMaterial', body).pipe(map(response =>{
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }

      public getMaterialDepartments(): Observable<any> {
        return this.http.get(this.BaseAdminApiURL + 'dropdownapi/getMaterialDepartments').pipe(map(response =>{
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }

      public getMaterialsList(deptId): Observable<any> {
        const params = {deptId:deptId};
        return this.http.get(this.BaseAdminApiURL + 'studymaterialapi/getMaterialList',{params}).pipe(map(response =>{
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }

      public getMaterialById(materialId): Observable<any> {
        const params = {matId:materialId};
        const encodedUrl = encodeURI( this.BaseAdminApiURL + 'studymaterialapi/getMaterialById');
        return this.http.get(encodedUrl,{params}).pipe(map(response =>{
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }
      
      public getMaterialCode(): Observable<any> {
        return this.http.get(this.BaseAdminApiURL + 'studymaterialapi/getMaterialCode').pipe(map(response =>{
          return response;
        },(error:any)=> console.error(error ,'api-Handler')))
      }
}
