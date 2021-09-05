import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders()
  .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGhhaWx5IiwiaWF0IjoxNjMwNjgwNzA2fQ.WPIyipt3_XGLYvcCdBUo5wCiW2WDZMbpyF4iNrkQtlQ');

  body = {
  "filters": {},
  "pagination": {
    "page": 1,
    "limit": 20
  }
}
    
  getDatos(): Observable<any>{
    return this.http.post<any>('http://api-videogames.herokuapp.com/api/videogames/search', this.body, {
        headers: this.headers,
      })
      ;
  } 

  getConsolas(): Observable<any>{
    return this.http.get<any>('http://api-videogames.herokuapp.com/api/consoles/catalog', {
        headers: this.headers,
      })
      ;
  } 

  getDevelopers(): Observable<any>{
    return this.http.get<any>('http://api-videogames.herokuapp.com/api/developer/catalog', {
        headers: this.headers,
      })
      ;
  } 
}
