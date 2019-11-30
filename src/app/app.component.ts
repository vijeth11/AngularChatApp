import { element } from 'protractor';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatFormField,} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('userInfoScreen',{static:true}) userInfoScreen: ElementRef;
  @ViewChild('completeScreen',{static:true}) completeScreen:ElementRef;
  @ViewChild('footerScreen',{static:true}) footerScreen:ElementRef;
  title = 'angularChat';
  AddContactButtonColor = "#32465A";
  AddNewContactButtonColor = "#32465A";
  HeightOfTheUserList = "83%"
  maxHeightOfUserList="78vh";
  messages:{from:string,display:string}[]=[];

  constructor(){
    for(var i=0;i<2;i++){
    this.messages.push({from:"Vijeth",display:"how are you?"});
    this.messages.push({from:"Tester",display:"i  am fine"});
    this.messages.push({from:"Grine",display:"vijeth are you coming"});
    this.messages.push({from:"Allen",display:"hi i am in also "});
    }
  }
  expanded(data:boolean){
    if(data){
    //this.HeightOfTheUserList = String(this.completeScreen.nativeElement.offsetHeight - this.userInfoScreen.nativeElement.offsetHeight-this.footerScreen.nativeElement.offsetHeight)+"px";
    this.HeightOfTheUserList= "65%";
    this.maxHeightOfUserList="64vh"
    console.log(this.maxHeightOfUserList);
    }else{
      this.HeightOfTheUserList = "83%";
      this.maxHeightOfUserList="78vh";
    }
    console.log(this.userInfoScreen.nativeElement.offsetHeight);
  }
}
