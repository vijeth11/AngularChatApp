import { element } from 'protractor';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatFormField,} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularChat';
  AddContactButtonColor = "#32465A";
  AddNewContactButtonColor = "#32465A";
  HeightOfTheUserList = "78%"
  maxHeightOfUserList="77vh";
  messages:{from:string,display:string,color:string,setDefault:boolean}[]=[];

  constructor(){
    for(var i=0;i<2;i++){
    this.messages.push({from:"Vijeth",display:"how are you?",color:"#2C3E50",setDefault:false});
    this.messages.push({from:"Tester",display:"i  am fine",color:"#2C3E50",setDefault:false});
    this.messages.push({from:"Grine",display:"vijeth are you coming",color:"#2C3E50",setDefault:false});
    this.messages.push({from:"Allen",display:"hi i am in also ",color:"#2C3E50",setDefault:false});
    }
  }
  expanded(data:boolean){
    if(data){
    //this.HeightOfTheUserList = String(this.completeScreen.nativeElement.offsetHeight - this.userInfoScreen.nativeElement.offsetHeight-this.footerScreen.nativeElement.offsetHeight)+"px";
    this.HeightOfTheUserList= "52%";
    this.maxHeightOfUserList="50vh"
    console.log(this.maxHeightOfUserList);
    }else{
      this.HeightOfTheUserList = "78%";
      this.maxHeightOfUserList="77vh";
    }
  }
 
}
