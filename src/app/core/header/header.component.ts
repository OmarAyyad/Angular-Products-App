import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() menuChanged= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }



  onMenuChanged(event){
    this.menuChanged.next(event);
  }
}
