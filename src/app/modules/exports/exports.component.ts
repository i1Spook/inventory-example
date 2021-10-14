import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { DeviceInput } from 'src/shared/device-input';
import { MainComponent } from '../main/main.component';

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

    // Output [] empty array
    console.log(this.inputs);
    
    let data = JSON.stringify(this.inputs);
    console.log(data);

    let test = "some test string"
    console.log(test);
    
    let blob = new Blob([test], {type: 'application/json'});
    console.log(blob);
    
    //let file = new File([blob], "InventoryList", {type: "application/json"});

    FileSaver.saveAs(blob, "InventoryList");

    console.log("Exported as JSON!");
  }

  exportAsCsv(): void{
    // Add export logic
    console.log("Exported as CSV!");
  }
}
