import {AggregateRoot} from "../../shared/domain/AggregateRoot";
import {EmailValueObject} from "../../shared/domain/valueObjects/EmailValueObject";
import {StringValueObject} from "../../shared/domain/valueObjects/StringValueObject";
import {IdValueObject} from "../../shared/domain/valueObjects/IdValueObject";
import {UserCreatedEvent} from "./Events/UserCreatedEvent";

export interface IUser {
    _id: string;
    name: string;
    email: string;
}

export class User extends AggregateRoot<IUser> {
    private readonly name: StringValueObject
    private readonly email: EmailValueObject

    constructor(UserDefinition: IUser) {
        super(new IdValueObject(UserDefinition._id)); // AggregateRoot sets the id
        this.email = new EmailValueObject(UserDefinition.email);
        this.name = new StringValueObject(UserDefinition.name);
        this.ensureIsValid();
    }
    static create(UserDefinition: IUser): User {
        const user = new User(UserDefinition);
        user.registerDomainEvent(new UserCreatedEvent(user));
        return user
    }

    private ensureIsValid (): void {
        // Validate consistency
    }
    toJSON(): IUser {
        return {
            _id: this._id.value,
            name: this.name.value,
            email: this.email.value
        };
    }
}
