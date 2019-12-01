import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  @Input() messages:{from:string,display:string,color:string,setDefault:boolean}[];
  @Input()HeightOfTheUserList:string;
  @Input()maxHeightOfUserList:string;
  constructor() { }

  ngOnInit() {
  }

  setBackgroundColor(index:any,type:string){
    if(!this.messages[index].setDefault){
    this.messages[index].color= type==="mouseenter"?"#32465A":"#2C3E50";
    }
  }

  setdefaultcolor(index:any){
       this.messages[index].setDefault=!this.messages[index].setDefault;
       this.messages[index].color = this.messages[index].setDefault?"#32465A":"#2C3E50";
  }
}
