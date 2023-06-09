import { IdValueObject } from './valueObjects/IdValueObject'
import { AggregateRoot } from './AggregateRoot.js'
export type Nullable<T> = T | null;
export abstract class DatabaseRepository<T extends AggregateRoot<any>> {
    abstract findById (id: IdValueObject): Promise<Nullable<T>>
    abstract save (entity: T): Promise<void>
}
