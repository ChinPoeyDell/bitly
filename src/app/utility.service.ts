import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }
  getLists(){
    return this.http.get("https://bit.ly/2lDpSpO")
  }
}
