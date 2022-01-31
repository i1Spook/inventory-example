import { BaseSimaticDevice } from "./baseSimaticDevice";

export class BaseApiResult {
    isSuccessful: boolean;
    message: string;
    resultContent: BaseSimaticDevice[];

    constructor(){
        this.isSuccessful = false;
        this.message = "";
        this.resultContent = [];
    }
}