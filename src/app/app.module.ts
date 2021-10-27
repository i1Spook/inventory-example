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
import { DeleteEntryComponent } from './modules/delete-entry/delete-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    TableComponent,
    ExportsComponent,
    TooltipComponent,
    DeleteEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }