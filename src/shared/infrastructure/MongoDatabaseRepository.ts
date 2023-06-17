import mongoose from "mongoose";
import {AggregateRoot} from "../domain/AggregateRoot";
import {ObjectId} from "../../../index";

export class MongoDatabaseRepository<T extends {_id: ObjectId}> {
    protected collection: mongoose.Collection<T>
    constructor(collectionName) {
        this.collection = mongoose.connection.collection(collectionName)
    }
    async save (entity: AggregateRoot<T>): Promise<void> {
        const entityData = entity.toJSON()

        await this.collection.insertOne(entityData)
    }
}
