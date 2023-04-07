import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  genderOptions = ["Male","Female"]
  cityOptions = ["Chennai","Coimbatore", "Madurai", "Trichy", "Erode"]
  handleUsernameChange(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:15 ~ BasicElementsComponent ~ handleUserNameChange ~ event:", event)
    
  }
  handlePasswordChange(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:19 ~ BasicElementsComponent ~ handlePasswordChange ~ event:", event)
    
  }
  handleRememberMeChange(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:20 ~ BasicElementsComponent ~ handleRememberMeChange ~ event:", event)
    
  }
  handleSubmit(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:27 ~ BasicElementsComponent ~ handleSubmit ~ event:", event)
    
  }
  handleGenderChange(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:34 ~ BasicElementsComponent ~ handleGenderChange ~ event:", event)
    
  }
  handleToggle(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:38 ~ BasicElementsComponent ~ handleToggle ~ event:", event)
    
  }
  handleCitySelect(event:any){
    console.log("🚀 ~ file: basic-elements.component.ts:42 ~ BasicElementsComponent ~ handleCitySelect ~ event:", event)
    
  }
}
