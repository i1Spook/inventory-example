export class DeviceInput {
    inventoryId: string;
    deviceType: string;
    mlfb: string;
    inventoryNumber: string;
    prototypeId: string;
    serialNumber: string;

    constructor(){
        this.inventoryId = ""; /* added default value for testing purposes */
        this.deviceType = "";
        this.mlfb = "12345678901234567890123456789012";
        this.inventoryNumber = "1234567890";
        this.prototypeId = "123456";
        this.serialNumber = "1234567890123456";
    }
}