import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  input: DeviceInput;

  @Output() itemValid = new EventEmitter<DeviceInput>();

  constructor() {
    this.input = new DeviceInput();
  }

  ngOnInit(): void {
  }

  validateItem(): void {
    console.log("Check validity")
    if (this.input.mlfb != "" && this.input.serialNumber != "") {
      console.log("Item valid");
      this.itemValid.emit(this.input);
      this.input = new DeviceInput();
    } else {
      console.log("Item invalid");
    }
  }
}
