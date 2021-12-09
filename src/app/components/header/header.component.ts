import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onHeaderOptionClicked = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  sendHeaderSelection(target){
    this.onHeaderOptionClicked.emit(target.innerText);
  }

}
