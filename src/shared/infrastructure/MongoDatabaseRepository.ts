import mongoose from "mongoose";
import {AggregateRoot} from "../domain/AggregateRoot";

export class MongoDatabaseRepository<T extends {_id: string}> {
    protected collection: mongoose.Collection<T>
    constructor(collectionName) {
        this.collection = mongoose.connection.collection(collectionName)
    }
    async save (entity: AggregateRoot<T>): Promise<void> {
        const entityData = entity.toJSON() as any // TODO: Fix this

        await this.collection.insertOne(entityData)
    }
}
