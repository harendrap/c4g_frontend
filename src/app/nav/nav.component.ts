import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle2: string = 'Harshita Website';
  appTitle: string = 'Disaster Management System';
  constructor() { }

  ngOnInit() {
  }

}
