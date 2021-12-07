export class DeviceInput {
    DPMId: string;
    deviceType: string;
    mlfb: string;
    inventoryNumber: string;
    prototypeId: string;
    serialNumber: string;

    constructor(){
        this.DPMId = ""; /* added default value for testing purposes */
        this.deviceType = "";
        this.mlfb = "6ES7516-3AN01-0AB0";
        this.inventoryNumber = "9999999999";
        this.prototypeId = "123 123";
        this.serialNumber = "S C-K6SE98322016";
    }
}