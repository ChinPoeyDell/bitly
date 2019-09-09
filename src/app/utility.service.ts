import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }
  getLists(){
    return this.http.get("https://salty-taiga-86575.herokuapp.com/lists")
  }

  storeUrl(originalUrl){
    const params = {
      originalUrl: originalUrl
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }

    return this.http.post(`https://salty-taiga-86575.herokuapp.com/addLists`, params, httpOptions)
  }
}
