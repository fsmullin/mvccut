import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { OGHSComponent } from './oghs/oghs.component';
import { DonateComponent } from './donate/donate.component';
import { MembersComponent } from './members/members.component';
import { SermonComponent } from './members/components/sermon/sermon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    OGHSComponent,
    DonateComponent,
    MembersComponent,
    SermonComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    QuillModule,
    CoreModule
  ]
})
export class FeaturesModule { }
