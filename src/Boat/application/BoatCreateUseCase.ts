import {DomainUseCase} from "../../shared/domain/DomainUseCase";
import {BoatRepository} from "../domain/Repositories/BoatRepository";
import {Boat, IBoat} from "../domain/Boat";
import {IdValueObject} from "../../shared/domain/valueObjects/IdValueObject";
import {EventBus} from "../../shared/domain/EventBus";

// @ts-ignore
@registerUseCase()
export class BoatCreateUseCase extends DomainUseCase {
    constructor (
        private boatRepository: BoatRepository,
        private eventBus: EventBus) {
        super()
    }

    async run (boat: IBoat): Promise<void> {
        const boatId = new IdValueObject(boat._id)
        const existingBOat = await this.boatRepository.findById(boatId)
        if (existingBOat) {
            throw new Error('Boat already exists')
        }
        const newBoat = Boat.create(boat)
        await this.boatRepository.save(newBoat)
        await this.eventBus.publishMany(newBoat.pullDomainEvents())
    }
}
