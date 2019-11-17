import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; //import module reactive form
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // taruh reactive form yang mau diinput
    CommonModule // taruh commonmodule yang mau diimport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
