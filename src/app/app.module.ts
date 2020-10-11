import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faChurch,
  faFire,
  faEye,
  faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    CoreModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faBars, faChurch, faFire, faEye, faHeart);
    library.addIcons(faFacebookSquare, faInstagramSquare);
  }
}
