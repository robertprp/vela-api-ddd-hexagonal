import {DomainMessage} from '../../../shared/domain/DomainMessage'
import {User, IUser} from '../User'
import {StringValueObject} from '../../../shared/domain/valueObjects/StringValueObject'

export class UserCreatedEvent extends DomainMessage<IUser> {
    constructor (user: User) {
        super({
            route: new StringValueObject('vela.events.1.user.created'), // TODO: Should be move to a constant file
            payload: user.toJSON(),
        })
    }
}
