export abstract class DomainUseCase {
    abstract run(...args: any[]): Promise<unknown>;
}
