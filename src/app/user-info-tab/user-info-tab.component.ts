import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-info-tab',
  templateUrl: './user-info-tab.component.html',
  styleUrls: ['./user-info-tab.component.css']
})
export class UserInfoTabComponent implements OnInit {

  @Output() Expanded:EventEmitter<boolean>  = new EventEmitter<boolean>();
  public gapBetweenSearchAndUserinfo:string="4vh";
  constructor() { }

  ngOnInit() {
  }

  expanded(data:boolean){
    this.gapBetweenSearchAndUserinfo = data ? "" : "4vh";
    this.Expanded.emit(data);
  }
}
