import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  renderer: any;

  constructor() { }
  ids: Array<String> = ['uno', 'dos', 'tres', 'cuatro']
  ngOnInit(): void {
  }

  
}

