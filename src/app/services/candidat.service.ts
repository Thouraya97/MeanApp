import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{Observable,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  baseUri:string='http://localhost:3000';
headers=new HttpHeaders().set('content-Type','applictaion/json');
  constructor(private http:HttpClient) { }
  createAccount(user):Observable<any>{
    let url=`${this.baseUri}/users/register`;
    return this.http.post(url,user).pipe(catchError(this.errorMgmt))
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
  loginUser(user):Observable<any>{
    let url=`${this.baseUri}/users/auth`;
    return this.http.post(url,user).pipe(catchError(this.errorMgmt1))
  }
  errorMgmt1(error: HttpErrorResponse) {
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
