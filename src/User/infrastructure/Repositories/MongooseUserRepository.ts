import {UserRepository} from "../../domain/Repositories/UserRepository";
import {IUser, User} from "../../domain/User";
import {MongoDatabaseRepository} from "../../../shared/infrastructure/MongoDatabaseRepository";
import {Nullable} from "../../../shared/domain/DatabaseRepository";
import {IdValueObject} from "../../../shared/domain/valueObjects/IdValueObject";

export class MongooseUserRepository extends MongoDatabaseRepository<IUser> implements UserRepository {
    constructor() {
        super('users')
    }

    async findById (id: IdValueObject): Promise<Nullable<User>> {
        const userData = await this.collection.findOne({ _id: id.value })
        if (!userData) {
            return null
        }
        return new User(userData)
    }
    async saveUser (user: IUser): Promise<void> {
        // TODO: Implement this
    }
}
