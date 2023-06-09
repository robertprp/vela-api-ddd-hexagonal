import {DomainMessage} from '../domain/DomainMessage.js'
import {EventEmitter} from 'events'
import {EventBusSubscriber} from '../domain/EventBusSubscriber.js'
export interface EventBusProvider {
    subscribe (subscriber: EventBusSubscriber): Promise<void>
    publish (message: DomainMessage): Promise<void>
}
export class InMemoryEventBusProvider implements EventBusProvider {
    private readonly bus = new EventEmitter()
    async publish (message: DomainMessage): Promise<void> {
        this.bus.emit(message.route.value, message)
        console.log(`Event published: ${message.route.value} with payload: ${JSON.stringify(message.payload)}`)
    }

    async subscribe (subscriber: EventBusSubscriber): Promise<void> {
        this.bus.on(subscriber.routingKey.value, async (data) => {
            try {
                await subscriber.handle(data)
            } catch (e: any) {
                console.error(e)
            }
        })
    }
}
