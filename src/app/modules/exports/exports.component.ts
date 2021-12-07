import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { DeviceInput } from 'src/shared/device-input';
import { ModalService } from 'src/app/modules/_modal';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-exports',
  templateUrl: './exports.component.html',
  styleUrls: ['./exports.component.scss']
})
export class ExportsComponent implements OnInit {

  @Input() populatedInputs?: DeviceInput[];

  constructor(private modalService: ModalService, private mainComponent: MainComponent) { }

  ngOnInit(): void {
  }

  exportAsJson(): void{
    console.log(this.populatedInputs);
    
    let data = JSON.stringify(this.populatedInputs, null, 2);
    console.log(data);
    
    let blob = new Blob([data], {type: 'application/json'});
    console.log(blob);

    FileSaver.saveAs(blob, "InventoryList");
    console.log("Exported as JSON!");

    //delete current List
    this.mainComponent.deleteAllItems();
  }

  exportAsCsv(): void{
    // Add export logic
    console.log("Exported as CSV!");
  }

  closeExportPopUp(id: string): void {
    this.modalService.close(id);
  }
}