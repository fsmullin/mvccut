import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    SafeHtmlPipe
  ]
})
export class CoreModule { }
