import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = ['267365874702307'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickDonateOghs() {
    this.router.navigate(['/oghs']);
  }
}
