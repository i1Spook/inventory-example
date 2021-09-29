import { Component, OnInit, Input } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items?: DeviceInput[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
