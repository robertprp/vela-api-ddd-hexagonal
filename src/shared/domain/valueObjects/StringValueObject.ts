import {ValueObject} from './ValueObject'

export class StringValueObject extends ValueObject<string> {
    constructor (data: string) {
        super(data)
        this.ensureIsValid()
    }

    private ensureIsValid (): void {
        if (typeof this._value !== 'string') {
            throw new Error(`Value ${this._value} is not a string`)
        }
    }
}
