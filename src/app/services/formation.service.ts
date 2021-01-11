import { Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  baseUri:string='http://localhost:3000';
  headers=new HttpHeaders().set('content-Type','applictaion/json');
  constructor(private http:HttpClient) { }
  getformation() {
    return this.http.get(`${this.baseUri}/tasks/list`);
  }
  getformationByTag(name): Observable<any> {
    let url = `http://localhost:3000/tasks/read/${name}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
       
    )
  }

}
