import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-info-tab',
  templateUrl: './user-info-tab.component.html',
  styleUrls: ['./user-info-tab.component.css']
})
export class UserInfoTabComponent implements OnInit {

  @Output() Expanded:EventEmitter<boolean>  = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  expanded(data:boolean){
    this.Expanded.emit(data);
  }
}
