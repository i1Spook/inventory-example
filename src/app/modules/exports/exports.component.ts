import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-exports',
  templateUrl: './exports.component.html',
  styleUrls: ['./exports.component.scss']
})
export class ExportsComponent implements OnInit {
  inputs: DeviceInput[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Put in new component -> Make export work -> make (?) work -> -scss Doku lesen (difference zu .less) -> angular modal popup nachsehen
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
}
