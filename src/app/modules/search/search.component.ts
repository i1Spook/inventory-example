import { Component, Injectable, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    
  }

  ngAfterViewChecked(): void{
    this.getSearchResult();
  }

  @Input() allDevicesArray?: DeviceInput[];

  filteredArray?: DeviceInput[] = this.allDevicesArray;

  @Output() updateDeviceArrayRequest = new EventEmitter<DeviceInput[]>();
  
  searchTerm: string = "";
  
  getSearchResult(){
    console.log("allDevicesArray = " + this.allDevicesArray);
    console.log("searchTerm = " + this.searchTerm);

    this.filteredArray = [];

    if (this.allDevicesArray) {

      this.allDevicesArray.forEach(element => {
        if (((element.DPMId && element.DPMId.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) ||
            (element.deviceType && element.deviceType.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) ||
            (element.inventoryNumber && element.inventoryNumber.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) ||
            (element.mlfb && element.mlfb.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) ||
            (element.prototypeId && element.prototypeId.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) ||
            (element.serialNumber && element.serialNumber.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))) &&
            this.filteredArray) {
              this.filteredArray.push(element);
        }
      });

      console.log("filteredArray = " + this.filteredArray)
      this.updateDeviceArrayRequest.emit(this.filteredArray);
      console.log("end of search")
    } 
  }
}