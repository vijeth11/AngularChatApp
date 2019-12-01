import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-messages-display',
  templateUrl: './chat-messages-display.component.html',
  styleUrls: ['./chat-messages-display.component.css']
})
export class ChatMessagesDisplayComponent implements OnInit {

  public messages:{message:string,display:string}[]=[];
  constructor() { 
    for(let i=0;i<4;i++){
      this.messages.push({message:"hi how are you ?",display:"left"});
      this.messages.push({message:"in the world of heaven there is light of hope and faith as people over there are good",display:"right"});
      this.messages.push({message:"i asked how are you why phylosophy",display:"left"});
      this.messages.push({message:"sorry by mistake i sent to a wrong person",display:"right"});
    }
  }

  ngOnInit() {
  }

}
