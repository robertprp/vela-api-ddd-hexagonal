import {Boat} from '../Boat'
import {DatabaseRepository} from '../../../shared/domain/DatabaseRepository.js'

export abstract class BoatRepository extends DatabaseRepository<Boat> {
    save (user: Boat): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
