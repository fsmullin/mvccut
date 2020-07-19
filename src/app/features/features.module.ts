import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { OGHSComponent } from './oghs/oghs.component';
import { DonateComponent } from './donate/donate.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    OGHSComponent,
    DonateComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
  ]
})
export class FeaturesModule { }
