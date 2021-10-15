import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-exports',
  templateUrl: './exports.component.html',
  styleUrls: ['./exports.component.scss']
})
export class ExportsComponent implements OnInit {

  @Input() populatedInputs?: DeviceInput[];

  constructor() { }

  ngOnInit(): void {
  }

  // angular populatedInputs.length anzeigen -> make (?) work -> -scss Doku lesen (difference zu .less) -> angular modal popup nachsehen
  exportAsJson(): void{
    console.log(this.populatedInputs);
    
    let data = JSON.stringify(this.populatedInputs, null, 2);
    console.log(data);
    
    let blob = new Blob([data], {type: 'application/json'});
    console.log(blob);

    FileSaver.saveAs(blob, "InventoryList");

    console.log("Exported as JSON!");
  }

  exportAsCsv(): void{
    // Add export logic
    console.log("Exported as CSV!");
  }
}
