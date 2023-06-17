import {BoatRepository} from "../../domain/Repositories/BoatRepository";
import {Boat, IBoat} from "../../domain/Boat";
import {MongoDatabaseRepository} from "../../../shared/infrastructure/MongoDatabaseRepository";
import {Nullable} from "../../../shared/domain/DatabaseRepository";
import {IdValueObject} from "../../../shared/domain/valueObjects/IdValueObject";

export class MongooseBoatRepository extends MongoDatabaseRepository<IBoat> implements BoatRepository {
    constructor() {
        super('boats')
    }

    async findById (id: IdValueObject): Promise<Nullable<Boat>> {
        const boatData = await this.collection.findOne({ _id: id.value })
        if (!boatData) {
            return null
        }
        return new Boat(boatData)
    }
    async saveBoat (boat: IBoat): Promise<void> {
        await this.collection.insertOne(boat)
    }
}
