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
  @Output() selectEntryRequest = new EventEmitter<number>();

  @Input() addView?: boolean;
  @Input() searchView?: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteEntry(buttonIndex: number){
    this.deleteEntryRequest.emit(buttonIndex);
  }

  selectEntry(checkboxIndex: number){
    this.selectEntryRequest.emit(checkboxIndex);
  }
}

















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-table2',
//   templateUrl: './table2.component.html',
//   styleUrls: ['./table2.component.scss']
// })
// export class Table2Component implements OnInit {
//   constructor() { }

//   ngOnInit(): void {
//   }

//   dpmidAscending: boolean = true;
//   dpmidDescending: boolean = true;

//   dtAscending: boolean = true;
//   dtDescending: boolean = true;

//   mlfbAscending: boolean = true;
//   mlfbDescending: boolean = true;

//   snAscending: boolean = true;
//   snDescending: boolean = true;

//   inAscending: boolean = true;
//   inDescending: boolean = true;

//   protIDAscending: boolean = true;
//   protIDDescending: boolean = true;
  
//   alreadyOrdered: boolean = false;
//   counter: number = 0;
//   sndC: number = 0;

//   orderByAscDesc(orderBy: string):void {
//     switch (orderBy) {
//       case "DPMID":
//         switch (this.counter) {
//           case 0:
//             this.dpmidDescending = false;
//             this.dpmidAscending = true;
//             this.counter++;
//             break;
//           case 1:
//             this.dpmidAscending = false;
//             this.dpmidDescending = true;
//             this.counter++;
//             break;
//           case 2:
//             this.dpmidDescending = true;
//             this.dpmidAscending = true;
//             this.counter = 0;
//             break;
//         }    
//         break;
//       case "dt":
//         switch (this.counter) {
//           case 0:
//             this.dtDescending = false;
//             this.dtAscending = true;
//             this.counter++;
//             break;
//           case 1:
//             this.dtAscending = false;
//             this.dtDescending = true;
//             this.counter++;
//             break;
//           case 2:
//             this.dtDescending = true;
//             this.dtAscending = true;
//             this.counter = 0;
//             break;
//         }    
//         break;
//       case "mlfb":
//         switch (this.counter) {
//           case 0:
//             this.mlfbDescending = false;
//             this.mlfbAscending = true;
//             this.counter++;
//             break;
//           case 1:
//             this.mlfbAscending = false;
//             this.mlfbDescending = true;
//             this.counter++;
//             break;
//           case 2:
//             this.mlfbDescending = true;
//             this.mlfbAscending = true;
//             this.counter = 0;
//             break;
//           }    
//           break;
//       case "sn":
//         switch (this.counter) {
//           case 0:
//             this.snDescending = false;
//             this.snAscending = true;
//             this.counter++;
//             break;
//           case 1:
//             this.snAscending = false;
//             this.snDescending = true;
//             this.counter++;
//             break;
//           case 2:
//             this.snDescending = true;
//             this.snAscending = true;
//             this.counter = 0;
//             break;
//           }    
//           break;
//       case "in":
//         switch (this.counter) {
//           case 0:
//             this.inDescending = false;
//             this.inAscending = true;
//             this.counter++;
//             break;
//           case 1:
//             this.inAscending = false;
//             this.inDescending = true;
//             this.counter++;
//             break;
//           case 2:
//             this.inDescending = true;
//             this.inAscending = true;
//             this.counter = 0;
//             break;
//           }    
//           break;
//       case "protID":
//         switch (this.counter) {
//           case 0:
//             this.protIDDescending = false;
//             this.protIDAscending = true;
//             this.counter++;
//             break;
//           case 1:
//             this.protIDAscending = false;
//             this.protIDDescending = true;
//             this.counter++;
//             break;
//           case 2:
//             this.protIDDescending = true;
//             this.protIDAscending = true;
//             this.counter = 0;
//             break;
//           }    
//           break;
//     }
//   }
// }
