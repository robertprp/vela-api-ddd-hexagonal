import mongoose from 'mongoose'
import {ValueObject} from './ValueObject'

export class IdValueObject extends ValueObject<string> {
    static generate (): IdValueObject {
        return new IdValueObject(new mongoose.Types.ObjectId().toString())
    }

    constructor (value: string) {
        super(value.toString())
        this.ensureIsValid()
    }

    private ensureIsValid (): void {
        if (!mongoose.Types.ObjectId.isValid(this.value)) {
            throw new Error(`Invalid id: ${this.value}`)
        }
    }
}
