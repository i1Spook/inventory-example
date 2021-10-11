import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  inputs: DeviceInput[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: DeviceInput): void {
    console.log("Added item:");
    console.table(item);
    this.inputs.push(item);
  }

  openExportPopUp(): void {
    /*open PopUp Window*/
  }

  generateIds(): void {
    let number = this.inputs.length;
    for (let index = 0; index < number; index++) {
      this.inputs[index].inventoryId = index.toString();
    }
  }
}