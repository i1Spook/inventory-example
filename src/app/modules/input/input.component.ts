import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  input: DeviceInput;

  added: boolean = false;

  message: string = "Added item";
  action: string = "OK";

  @Output() itemValid = new EventEmitter<DeviceInput>();

  constructor(private _snackBar: MatSnackBar) {
    this.input = new DeviceInput();
  }

  ngOnInit(): void {
  }

  buttonAdd() {
    this.validateItem();
    if (this.added) {
      //this.openSnackBar();
      this.added = false;
    }
  }

  // openSnackBar() {
  //   this._snackBar.open(this.message, this.action);
  // }

  validateItem(): void {
    console.log("Check validity")

    /* Input check: 
        Mandatory fields (Device Type, MLFB, SerialNumber) must be filled AND have appropriate length
        Optional fields (InventoryNumber, PrototypeID) must be empty OR have appropriate length
    */
    let validMLFBMinLength = 6;
    let validMLFBMaxLength = 18; //16 characters and 2 -
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