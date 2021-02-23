import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-z0jw7b1t.eu.auth0.com',
      clientId: '1iPuJdMYaNicNnTE96seXE0cerX7pxUt'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
