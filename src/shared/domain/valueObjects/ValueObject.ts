export abstract class ValueObject<T> {
    protected readonly _value: T

    protected constructor (data: T) {
        this._value = data
    }

    get value (): T {
        return this._value
    }
}
