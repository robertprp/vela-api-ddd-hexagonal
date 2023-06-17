export abstract class ValueObject<T> {
    protected readonly _value: T

    protected constructor (data: T) {
        this._value = data
    }

    // @ts-ignore
    get value (): T {
        return this._value
    }
}
