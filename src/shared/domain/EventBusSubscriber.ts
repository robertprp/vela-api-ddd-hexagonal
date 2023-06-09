import {StringValueObject} from './valueObjects/StringValueObject'

export interface PublishedMessage<T = unknown> {
    route: string,
    payload: T,
    publishedAt: Date
}
export abstract class EventBusSubscriber {
    queue: StringValueObject
    routingKey: StringValueObject
    abstract handle (message: PublishedMessage): Promise<void>
}
