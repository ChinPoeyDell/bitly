import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }
  getLists(){
    return this.http.get("https://salty-taiga-86575.herokuapp.com/lists")
  }
}
