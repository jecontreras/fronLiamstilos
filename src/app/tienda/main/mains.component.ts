import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss']
})
export class MainsComponent implements OnInit {
  views = true;
  constructor() { }

  ngOnInit() {
    if( ( window.location.pathname.split("/") )[2]) this.views = false;
  }

}
