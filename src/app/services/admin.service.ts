//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{Observable,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUri:string='http://localhost:3000';
  headers=new HttpHeaders().set('content-Type','applictaion/json');
  constructor(private http:HttpClient) { }

  loginAdmin(user):Observable<any>{
    let url=`${this.baseUri}/admins/authadmin`;
    return this.http.post(url,user).pipe(catchError(this.errorMgmt))
  }
  createAccount(user):Observable<any>{
    let url=`${this.baseUri}/admins/registerformateur`;
    return this.http.post(url,user).pipe(catchError(this.errorMgmt))
  }
  addFormation(formation):Observable<any>{
    let url=`${this.baseUri}/admins/add`;
    return this.http.post(url,formation).pipe(catchError(this.errorMgmt))
  }

  getCandidats() {
    //let url= `${this.baseUri}/admins//listecandidats`;
    return this.http.get(`${this.baseUri}/admins/listcandidat`);
  }
  
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
