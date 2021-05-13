import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home,component-selector',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  renderer: any;

  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit(): void {
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  
}

