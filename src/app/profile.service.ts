import { Injectable } from '@angular/core';
import {  Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';





@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 

  constructor(private http : Http) { }

  getUserProfile(){
    return this.http.get("https://api.github.com/search/users?q=location:bangalore")
    .map(res => res.json());
    
    }

    getUserInfo(username){
      return this.http.get("https://api.github.com/search/users?q="+username+"location:bangalore")
      .map(res=> res.json());
    }

   
}