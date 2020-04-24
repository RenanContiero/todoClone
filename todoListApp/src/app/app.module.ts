import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdditemComponent } from './additem/additem.component';
import { DisplayComponent } from './display/display.component';
import { EditemComponent } from './editem/editem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    DisplayComponent,
    EditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
