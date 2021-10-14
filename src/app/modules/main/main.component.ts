import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

import { ModalService } from 'src/app/modules/_modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  inputs: DeviceInput[] = [];

  //@Output() populatedInputs = new EventEmitter<DeviceInput[]>();

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  addItem(item: DeviceInput): void {
    console.log("Added item:");
    console.table(item);
    
    this.inputs.push(item);

    //this.populatedInputs.emit(this.inputs);
    console.log(JSON.stringify(this.inputs));
  }

  openExportPopUp(id: string): void {
    this.modalService.open(id);
  }

  closeExportPopUp(id: string): void {
    this.modalService.close(id);
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