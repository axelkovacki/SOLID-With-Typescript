import EventHandler from './DOMEventHandler';
import DOMEventHandler from './DOMEventHandler';

export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;

    constructor(eventHandler: EventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, 'click', action);
    }
}