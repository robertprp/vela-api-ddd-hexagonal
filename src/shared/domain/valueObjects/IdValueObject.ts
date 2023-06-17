import mongoose from 'mongoose'
import {ValueObject} from './ValueObject'
import {ObjectId} from "../../../../index";

export class IdValueObject extends ValueObject<ObjectId> {
    static generate (): IdValueObject {
        return new IdValueObject(new mongoose.Types.ObjectId().toString())
    }

    constructor (value: ObjectId) {
        super(value.toString())
        this.ensureIsValid()
    }

    private ensureIsValid (): void {
        if (!mongoose.Types.ObjectId.isValid(this.value)) {
            throw new Error(`Invalid id: ${this.value}`)
        }
    }
}
