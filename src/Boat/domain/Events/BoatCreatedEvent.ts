import {DomainMessage} from '../../../shared/domain/DomainMessage'
import {Boat, IBoat} from '../Boat'
import {StringValueObject} from '../../../shared/domain/valueObjects/StringValueObject'

export class BoatCreatedEvent extends DomainMessage<IBoat> {
    constructor (boat: Boat) {
        super({
            route: new StringValueObject('vela.events.1.boat.created'), // TODO: Should be move to a constant file
            payload: boat.toJSON(),
        })
    }
}
