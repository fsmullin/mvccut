import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isMenuCollapsed: boolean;

  constructor() {
    this.isMenuCollapsed = true;
  }

  ngOnInit(): void {
  }

}
