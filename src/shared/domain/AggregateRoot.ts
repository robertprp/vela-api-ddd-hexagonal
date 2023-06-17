import {DomainMessage} from './DomainMessage'
import {IdValueObject} from './valueObjects/IdValueObject'
import {ObjectId} from "../../../index";

type AggregateGenericType<T> = T extends { _id: ObjectId } ? T : never
export abstract class AggregateRoot<AggregateGenericType> {
    protected readonly _id: IdValueObject

    get id (): IdValueObject {
        return this._id
    }

    protected constructor (id: IdValueObject) {
        this._id = id
    }

    private readonly events: DomainMessage[] = []

    protected registerDomainEvent (event: DomainMessage): void {
        this.events.push(event)
    }

    public pullDomainEvents (): DomainMessage[] {
        return this.events.splice(0, this.events.length)
    }

    abstract toJSON(): AggregateGenericType
}
