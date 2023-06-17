import {ValueObject} from './ValueObject'

export class PositiveNumberValueObject extends ValueObject<number> {
    constructor (data: number) {
        super(data)
        this.ensureIsValid()
    }

    private ensureIsValid (): void {
        if (typeof this._value !== 'number') {
            throw new Error(`Value ${this._value} is not a string`)
        } else if (this._value < 0) {
            throw new Error(`Value ${this._value} is not a positive number`)
        }
    }
}
