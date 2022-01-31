export class BaseSimaticDevice {
    id: string;
    typeName: string;
    mlfb: string;
    serialNumber: string;
    inventoryNumber: string;
    prototypeId: string;

    constructor(){
        this.id = "";
        this.typeName = "";
        this.mlfb = "";
        this.serialNumber = "";
        this.inventoryNumber = "";
        this.prototypeId = "";
    }
}