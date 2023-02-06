import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AadharVerifySerivce {
  
  public BaseAdminApiURL:String = environment.apiURL;
  constructor(private http:HttpClient) { }

  
  public getCaptcha(): Observable<any> {
    const body={ "langCode": "en",
    "captchaLength": "3",
    "captchaType": "2"};
    return this.http.post(this.BaseAdminApiURL +'aadharapi/getCaptcha', body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }

  public verifyAadharNo(aadharObject): Observable<any> {
    const body=aadharObject;
    return this.http.post(this.BaseAdminApiURL +'aadharapi/verifyAdharId', body).pipe(map(response =>{
      return response;
    },(error:any)=> console.error(error ,'api-Handler')))
  }
}
