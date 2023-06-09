import {ValueObject} from './ValueObject'

export class EmailValueObject extends ValueObject<string> {
    constructor (data: string) {
        super(data)
        this.ensureIsValid()
    }

    private ensureIsValid (): void {
        const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        if (!emailRegex.test(this._value)) {
            throw new Error('Invalid email')
        }
    }
}
