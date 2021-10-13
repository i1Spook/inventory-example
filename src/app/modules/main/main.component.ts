import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

import { ModalService } from 'src/app/modules/_modal';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  inputs: DeviceInput[] = [];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  addItem(item: DeviceInput): void {
    console.log("Added item:");
    console.table(item);
    
    this.inputs.push(item);
    console.log(JSON.stringify(this.inputs));
  }

  openExportPopUp(id: string): void {
    this.modalService.open(id);
  }

  closeExportPopUp(id: string): void {
    this.modalService.close(id);
  }

  // Put in new component (DONE) -> Make export work -> make (?) work -> -scss Doku lesen (difference zu .less) -> angular modal popup nachsehen
  exportAsJson(): void{
    // Add export logic
    
    let jsonString = JSON.stringify(this.inputs);
    let file = new File(["jsonString"], "InventoryList", {type: "application/json"});
    FileSaver.saveAs(file);
    console.log("Exported as JSON!");
  }

  exportAsCsv(): void{
    // Add export logic
    console.log("Exported as CSV!");
  }

  generateIds(): void {
    let number = this.inputs.length;
    for (let index = 123456; index < number; index++) {
      this.inputs[index].inventoryId = index.toString();
    }
  }
}

// https://www.cloudhadoop.com/2018/09/how-to-convert-array-to-json-and-json.html
// https://marco.dev/angular-and-javascript-export-your-data-to-csv-using-typescript
// https://www.codepedia.org/ama/save-file-as-example-in-angular#fn:1
// https://github.com/eligrey/FileSaver.js#readme
// https://stackoverflow.com/questions/114543/how-to-horizontally-center-an-element