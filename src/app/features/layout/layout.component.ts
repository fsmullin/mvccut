import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isMenuCollapsed: boolean;

  constructor(private router: Router) {
    this.isMenuCollapsed = true;
  }

  ngOnInit(): void {
  }

  clickSendDonation() {
    this.router.navigate(['/donate']);
  }

}
