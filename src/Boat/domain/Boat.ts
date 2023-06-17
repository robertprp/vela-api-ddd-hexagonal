import {AggregateRoot} from "../../shared/domain/AggregateRoot";
import {EmailValueObject} from "../../shared/domain/valueObjects/EmailValueObject";
import {StringValueObject} from "../../shared/domain/valueObjects/StringValueObject";
import {IdValueObject} from "../../shared/domain/valueObjects/IdValueObject";
import {BoatCreatedEvent} from "./Events/BoatCreatedEvent";
import {ObjectId} from "../../../index";
import {PositiveNumberValueObject} from "../../shared/domain/valueObjects/PositiveNumberValueObject";

export interface IBoat {
    _id: ObjectId;
    price: number
    name: string;
    type: string;
}

export class Boat extends AggregateRoot<IBoat> {
    private readonly price: PositiveNumberValueObject
    private readonly name: StringValueObject
    private readonly type: StringValueObject

    constructor(boatDefinition: IBoat) {
        super(new IdValueObject(boatDefinition._id)); // AggregateRoot sets the id
        this.price = new PositiveNumberValueObject(boatDefinition.price);
        this.name = new StringValueObject(boatDefinition.name);
        this.type = new StringValueObject(boatDefinition.type);
        this.ensureIsValid();
    }
    static create(boat: IBoat): Boat {
        const createdBoat = new Boat(boat);
        createdBoat.registerDomainEvent(new BoatCreatedEvent(createdBoat));
        return createdBoat
    }

    private ensureIsValid (): void {
        // Validate consistency
    }
    toJSON(): IBoat {
        return {
            _id: this._id.value,
            price: this.price.value,
            name: this.name.value,
            type: this.type.value,
        };
    }
}
