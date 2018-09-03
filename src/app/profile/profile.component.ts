import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  p:number=1;
  profile:any[];
  info:any;
  username:any;
  
  constructor(private profileservice : ProfileService) { 
    this.profileservice.getUserProfile().subscribe(profile => {
      console.log(profile);
      this.profile=profile.items;
    }) 
  }


  search(){
    
    this.profileservice.getUserInfo(this.username).subscribe(info => {
      console.log(info);
      this.profile=info.items;
      if(this.profile){
        console.log("page not found");
      }
      else{
        console.log("page found")
      }
    })
  }

  

 
  }
  
  


