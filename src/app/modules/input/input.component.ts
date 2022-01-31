import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  input: DeviceInput;
  added: boolean = false;

  @Output() itemValid = new EventEmitter<DeviceInput>();

  @Input() inputs?: DeviceInput[]

  constructor() {
    this.input = new DeviceInput();
  }

  ngOnInit(): void {
  }

  buttonAdd() {
    this.validateItem();
    if (this.added) {
      this.added = false;
    }
  }

  validateItem(): void {
    console.log("Check validity")

    /* Input check: 
        Mandatory fields (Device Type, MLFB, SerialNumber) must be filled AND have appropriate length
        Optional fields (InventoryNumber, PrototypeID) must be empty OR have appropriate length
        Can only contain numbers, letters and dashes
    */
    let validMLFBMinLength = 6;
    let validMLFBMaxLength = 18; //16 characters and 2 "-"
    let validSNLength = 16; //S C-K6SE98322016
    let validINLength = 10;
    let validPTIDLength = 7;

    if (this.input.deviceType != "" && 
        this.input.mlfb != "" && this.input.mlfb.length >= validMLFBMinLength && this.input.mlfb.length <= validMLFBMaxLength &&
        this.input.serialNumber != "" && this.input.serialNumber.length == validSNLength &&
       (this.input.inventoryNumber == "" || this.input.inventoryNumber.length == validINLength) &&
       (this. input.prototypeId == "" || this.input.prototypeId.length == validPTIDLength)) {
      console.log("Item valid");
      this.itemValid.emit(this.input);
      this.input = new DeviceInput();
      this.added = true;
    } else {
      console.log("Item invalid");
    }
  }
}