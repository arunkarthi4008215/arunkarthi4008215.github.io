import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  public BaseAdminApiURL:String = environment.apiURL;
  public BaseAdminLocalApiURL:String = environment.apiURL

  constructor(private http:HttpClient,) { }

              public saveLocationMaster(branchObj:any): Observable<any> {
                const body=branchObj;
                return this.http.post(this.BaseAdminApiURL + 'locationapi/insertLocation', body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getLocationList(): Observable<any> {
                return this.http.get(this.BaseAdminApiURL + 'locationapi/getLocationList').pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getLocationData(locationId): Observable<any> {
                const params = {locationId:locationId};
                const encodedUrl = encodeURI( this.BaseAdminApiURL + 'locationapi/getLocationDetails');
                return this.http.get(encodedUrl,{params}).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
            
              public updateLocationMaster(branchObj:any): Observable<any> {
                const body = branchObj
                return this.http.post(this.BaseAdminApiURL + 'locationapi/updateLocation',body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
              
              public deleteLocationMaster(locationId:any): Observable<any> {
                const body ={ locationId}
                return this.http.post(this.BaseAdminApiURL + 'locationapi/deleteLocation',body).pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }

              public getLocationCode(): Observable<any> {
                return this.http.get(this.BaseAdminApiURL + 'locationapi/getLocationCode').pipe(map(response =>{
                  return response;
                },(error:any)=> console.error(error ,'api-Handler')))
              }
}
