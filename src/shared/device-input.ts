export class DeviceInput {
    inventoryId: string;
    deviceType: string;
    mlfb: string;
    inventoryNumber: string;
    prototypeId: string;
    serialNumber: string;

    constructor(){
        this.inventoryId = "123456"; /* added default value for testing purposes */
        this.deviceType = "";
        this.mlfb = "";
        this.inventoryNumber = "";
        this.prototypeId = "";
        this.serialNumber = "";
    }
}
