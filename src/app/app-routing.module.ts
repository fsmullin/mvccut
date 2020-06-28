import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent, pathMatch: 'full' },
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
