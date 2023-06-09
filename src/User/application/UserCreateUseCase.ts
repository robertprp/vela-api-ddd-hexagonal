import {DomainUseCase} from "../../shared/domain/DomainUseCase";
import {UserRepository} from "../domain/Repositories/UserRepository";
import {IUser, User} from "../domain/User";
import {IdValueObject} from "../../shared/domain/valueObjects/IdValueObject";
import {EventBus} from "../../shared/domain/EventBus";

// @ts-ignore
@registerUseCase()
export class UserCreateUseCase extends DomainUseCase {
    constructor (
        private userRepository: UserRepository,
        private eventBus: EventBus) {
        super()
    }

    async run (user: IUser): Promise<void> {
        const userId = new IdValueObject(user._id)
        const existingUser = await this.userRepository.findById(userId)
        if (existingUser) {
            throw new Error('User already exists')
        }
        const newUser = User.create(user)
        await this.userRepository.save(newUser)
        await this.eventBus.publishMany(newUser.pullDomainEvents())
    }
}
