import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items?: DeviceInput[];
  
  @Output() deleteEntryRequest = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteEntry(buttonIndex: number){
    this.deleteEntryRequest.emit(buttonIndex);
  }
}