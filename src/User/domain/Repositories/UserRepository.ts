import {User} from '../User'
import {DatabaseRepository} from '../../../shared/domain/DatabaseRepository.js'

export abstract class UserRepository extends DatabaseRepository<User> {
    save (user: User): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
