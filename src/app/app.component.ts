import { element } from 'protractor';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatFormField,} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  @ViewChild('userInfoScreen',{static:true}) userInfoScreen: ElementRef;
  @ViewChild('completeScreen',{static:true}) completeScreen:ElementRef;
  @ViewChild('footerScreen',{static:true}) footerScreen:ElementRef;
  title = 'angularChat';
  AddContactButtonColor = "#32465A";
  AddNewContactButtonColor = "#32465A";
  HeightOfTheUserList = "85.5vh"

  ngOnInit(){
    this.HeightOfTheUserList = String(this.completeScreen.nativeElement.offsetHeight - this.userInfoScreen.nativeElement.offsetHeight-this.footerScreen.nativeElement.offsetHeight)+"px";
  }

  ngAfterViewInit(): void {
    this.HeightOfTheUserList = "77.5%";
  }

  expanded(data:boolean){
    this.HeightOfTheUserList = String(this.completeScreen.nativeElement.offsetHeight - this.userInfoScreen.nativeElement.offsetHeight-this.footerScreen.nativeElement.offsetHeight)+"px";
    console.log(this.userInfoScreen.nativeElement.offsetHeight);
  }
}
