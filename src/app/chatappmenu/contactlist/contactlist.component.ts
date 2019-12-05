import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  @Input('messages') messagesInput:{from:string,display:string,color:string,setDefault:boolean}[];
  @Input()HeightOfTheUserList:string;
  @Input()maxHeightOfUserList:string;
  messages:{from:string,display:string,color:string,setDefault:boolean}[];
  searchName:string="";
  constructor() { 
    
  }

  ngOnInit() {
      this.messages = this.messagesInput;
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

  onkeyUp(event:any){
    this.searchName = event.target.value;
    console.log(event);
    if(this.searchName){
      this.messages = this.messagesInput.filter(x => x.from.toLowerCase().includes(this.searchName.toLowerCase()));
    }else{
      this.messages = this.messagesInput;
    }
  }
}
