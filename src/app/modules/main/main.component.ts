import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';
import { ModalService } from 'src/app/modules/_modal';
import { DBInput } from 'src/shared/DBInput';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private http: HttpClientModule
    ) { }

  inputs: DeviceInput[] = [];

  amountItems: number = 0;
  generatePressed: boolean = false;

  currentView: string = "add";
  showAdd: boolean = true;
  showSearch: boolean = false;



  ngOnInit(): void {
  }

  addItem(item: DeviceInput): void {
    console.table("Added item: " + item);
    this.inputs.push(item);
    this.amountItems = this.inputs.length;
    console.log("Entire Array: " + JSON.stringify(this.inputs));
    this.generatePressed = false;
  }

  deleteItem(itemIndex: number) {
    this.inputs.splice(itemIndex, 1);
    this.amountItems = this.inputs.length;

    if (this.amountItems == 0) {
      this.generatePressed = false; 
    }
  }

  deleteAllItems(){
    for (let index = 0; index < this.inputs.length; index=index) {
      this.deleteItem(index);
    }
  }

  generateIds(): void {
    let baseID = 500;
    this.amountItems = this.inputs.length;

    for (let index = 0; index < this.amountItems; index++) {
      this.inputs[index].DPMId = (index + baseID).toString();
    }

    this.generatePressed = true;
  }

  openExportPopUp(id: string): void {
    this.modalService.open(id);
  }

  switchViewToAdd():void{
    if (this.currentView != "add") {
      this.showAdd = true;
      this.showSearch = false;
      this.currentView = "add";
    }
  }

  switchViewToSearch():void{
    if (this.currentView != "search") {
      this.showAdd = false;
      this.showSearch = true;
      this.currentView = "search";
    }
  }
}

// https://www.cloudhadoop.com/2018/09/how-to-convert-array-to-json-and-json.html
// https://marco.dev/angular-and-javascript-export-your-data-to-csv-using-typescript
// https://www.codepedia.org/ama/save-file-as-example-in-angular#fn:1
// https://github.com/eligrey/FileSaver.js#readme
// https://stackoverflow.com/questions/114543/how-to-horizontally-center-an-element