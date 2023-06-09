import {StringValueObject} from './valueObjects/StringValueObject'

export interface DomainMessageProps {
    route: StringValueObject,
    payload: any
}

export abstract class DomainMessage<T = unknown> {
    public readonly route: StringValueObject
    public readonly payload: T

    protected constructor (messageProps: DomainMessageProps) {
        this.route = messageProps.route
        this.payload = messageProps.payload
    }
}
