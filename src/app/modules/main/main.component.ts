import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceInput } from 'src/shared/device-input';
import { ModalService } from 'src/app/modules/_modal';

import { HttpClientModule } from '@angular/common/http';
import { DpmApiService } from 'src/app/dpm-api.service';
import { BaseSimaticDevice } from 'src/shared/DPM/baseSimaticDevice';
import { BaseApiResult } from 'src/shared/DPM/baseApiResult';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MainComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private http: HttpClientModule,
    private apiService: DpmApiService
    ) { }

 
  devicesAsInputs: DeviceInput[] = [];
  inputs: DeviceInput[] = [];

  amountItems: number = 0;
  generatePressed: boolean = false;

  filteredSearch: DeviceInput[] = [];
  checkedItems: DeviceInput[] = [];

  addView: boolean = true;
  searchView: boolean = false;

  ngOnInit(): void {

  }

  openSearchDevicesPopUp(id: string){
    this.getAllDevices();
    this.addView = false;
    this.searchView = true;
    this.modalService.open(id);
  }

  // Asynchrones Laden
  getAllDevices(): void{

    this.devicesAsInputs = [];

    this.apiService.getAllPc().subscribe(result => {
      this.addDevicesFromDpm(result)
    });

    this.apiService.getAllPlc().subscribe(result => {
      this.addDevicesFromDpm(result)
    });

    this.apiService.getAllPanel().subscribe(result => {
      this.addDevicesFromDpm(result)
    });

    this.filteredSearch = this.devicesAsInputs;
  }

  addDevicesFromDpm(result: BaseApiResult){
    if (result.isSuccessful && result.resultContent != null && result.resultContent.length > 0) {

      for (let index = 0; index < result.resultContent.length; index++) {
        const element = result.resultContent[index];
        let input = new DeviceInput();
        input.DPMId = element.id;
        input.deviceType = element.typeName;
        input.inventoryNumber = element.inventoryNumber;
        input.mlfb = element.mlfb;
        input.prototypeId = element.prototypeId;
        input.serialNumber = element.serialNumber;

        this.devicesAsInputs.push(input);
      }
    }
  }

  addToListFromApi(id: string){
    console.log("added");
    this.addView = true;
    this.searchView = false;
    this.modalService.close(id);


    // Temporary array of selected items is added to "Main" input array
    this.inputs = this.inputs.concat(this.checkedItems);
    this.checkedItems = [];
    this.generatePressed = false;
  }

  /*
  Checks if an item has already been selected, if not, adds it to temporary array  
  */
  selectItem(selectedItemIndex: number) {
    console.log("selected #" + selectedItemIndex)
    let sliced: boolean = false;

    for (let index = 0; index < this.checkedItems.length; index++) {
      if (this.checkedItems[index].DPMId == this.filteredSearch[selectedItemIndex].DPMId &&
        this.checkedItems[index].deviceType == this.filteredSearch[selectedItemIndex].deviceType &&
        this.checkedItems[index].inventoryNumber == this.filteredSearch[selectedItemIndex].inventoryNumber &&
        this.checkedItems[index].mlfb == this.filteredSearch[selectedItemIndex].mlfb &&
        this.checkedItems[index].prototypeId == this.filteredSearch[selectedItemIndex].prototypeId &&
        this.checkedItems[index].serialNumber == this.filteredSearch[selectedItemIndex].serialNumber) {
        this.checkedItems.splice(index, 1);
        sliced = true;
      }
    }
    if (!sliced) {
      this.checkedItems.push(this.filteredSearch[selectedItemIndex]);
    }
  }

  addItem(item: DeviceInput): void {
    console.table("Added item: " + item);
    this.inputs.push(item);
    this.amountItems = this.inputs.length;
    console.log("Entire Array: " + JSON.stringify(this.inputs));
    this.generatePressed = false;
  }

  deleteItem(itemIndex: number) {
    this.inputs.splice(itemIndex, 1);
    this.amountItems = this.inputs.length;

    if (this.amountItems == 0) {
      this.generatePressed = false; 
    }
  }

  deleteAllItems(){
    for (let index = 0; index < this.inputs.length; index=index) {
      this.deleteItem(index);
    }
  }

  generateIds(): void {
    let baseID = 500;
    this.amountItems = this.inputs.length;

    for (let index = 0; index < this.amountItems; index++) {
      this.inputs[index].DPMId = (index + baseID).toString();
    }

    this.generatePressed = true;
  }

  openExportPopUp(id: string): void {
    this.modalService.open(id);
  }

  closeSearch(id: string){
    this.addView = true;
    this.searchView = false;
    this.modalService.close(id);
  }

  updateDeviceArray(array: any){
    console.log("reached main update function")
    this.filteredSearch = array;
  }
}

// https://www.cloudhadoop.com/2018/09/how-to-convert-array-to-json-and-json.html
// https://marco.dev/angular-and-javascript-export-your-data-to-csv-using-typescript
// https://www.codepedia.org/ama/save-file-as-example-in-angular#fn:1
// https://github.com/eligrey/FileSaver.js#readme
// https://stackoverflow.com/questions/114543/how-to-horizontally-center-an-element