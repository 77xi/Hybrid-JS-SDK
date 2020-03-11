declare class EventEmit {
    #private;
    on(event: string, handler: Function): void;
    emit<T>(event: string, params?: T): void;
    remove(event: string, handler: Function): void;
}
export default EventEmit;