import { Component, Input, OnInit } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.scss']
})
export class DeleteEntryComponent implements OnInit {

  @Input() populatedInputs?: DeviceInput[];

  constructor() { 
  }

  ngOnInit(): void {
  }

  deleteFirstEntry() : void {
    this.populatedInputs?.splice(0, 1);
  }
}