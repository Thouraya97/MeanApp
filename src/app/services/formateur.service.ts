import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{Observable,throwError} from 'rxjs';
import { catchError,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  
  baseUri:string='http://localhost:3000';
  headers=new HttpHeaders().set('content-Type','applictaion/json');
  constructor(private http:HttpClient) { }

  loginFormateur(user):Observable<any>{
    let url=`${this.baseUri}/formateurs/authformateur`;
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

  /*getmesformations(owner):Observable<any> {
    const url = `${this.baseUri}/formateurs/for/${owner}`;
    this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),     
    )
  }*/

  getmesformations(owner): Observable<any> {
    const url = `http://localhost:3000/formateurs/for/${owner}`;
   return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),     
    )
  }




}
    
    
  

  
  
  

