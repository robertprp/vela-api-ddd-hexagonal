import {captureException} from '@sentry/node'
import {DomainMessage} from './DomainMessage.js'
import {EventBusSubscriber} from './EventBusSubscriber'

export interface EventBusProvider {
    subscribe (subscriber: EventBusSubscriber): Promise<void>
    publish (message: DomainMessage): Promise<void>
}
export class EventBus {
    constructor (private provider: EventBusProvider) {}

    async subscribe (subscriber: EventBusSubscriber): Promise<void> {
        return this.provider.subscribe(subscriber)
    }

    private async publish (message: DomainMessage): Promise<void> {
        // TODO: Persist message in database and mark as not published
        try {
            await this.provider.publish(message)
            // TODO: Mark message as published in database
        } catch (e: any) {
            captureException(e)
        }
    }

    async publishMany (messages: DomainMessage[]): Promise<void> {
        for (const message of messages) {
            try {
                await this.publish(message)
            } catch (e: any) {
                captureException(e)
            }
        }
    }
}
