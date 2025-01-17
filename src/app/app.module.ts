import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { InputComponent } from './modules/input/input.component';
import { TableComponent } from './modules/table/table.component';
import { FormsModule } from '@angular/forms';

import { ModalModule } from './modules/_modal';
import { ExportsComponent } from './modules/exports/exports.component';
import { TooltipComponent } from './modules/tooltip/tooltip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SearchComponent } from './modules/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    TableComponent,
    ExportsComponent,
    TooltipComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }