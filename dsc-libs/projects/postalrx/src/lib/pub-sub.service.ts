import { BehaviorSubject } from 'rxjs';


export class CustomEventEmitter extends BehaviorSubject<any>{
    constructor() { super(null); }
    emit(value: any) { super.next(value); }
}


export class PubSubService {
    Stream: CustomEventEmitter;
    constructor() {
        if (!(<any>window).pubsub) {
            (<any>window).pubsub = new CustomEventEmitter();
        }
        this.Stream = (<any>window).pubsub;
    }
}