import {ContainerBuilder} from 'diod'
import {EventBus} from './domain/EventBus'
import {InMemoryEventBusProvider} from './infrastructure/InMemoryEventBusProvider'

export function sharedDependencies (builder: ContainerBuilder) {
    // Event bus
    builder.register(EventBus).useFactory(() => {
        const provider = new InMemoryEventBusProvider()
        return new EventBus(provider)
    }).asSingleton()
}
