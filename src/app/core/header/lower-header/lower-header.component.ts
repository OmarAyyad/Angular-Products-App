import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.scss']
})
export class LowerHeaderComponent implements OnInit {

  // @Output() itemChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  // onItemClicked(name:string){
  //   this.itemChanged.next(name);
  // }

}
