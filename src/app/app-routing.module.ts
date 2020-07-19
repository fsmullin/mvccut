import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { OGHSComponent } from './features/oghs/oghs.component';
import { DonateComponent } from './features/donate/donate.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'donate', component: DonateComponent },
    { path: 'oghs', component: OGHSComponent },
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
