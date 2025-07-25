export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
    abstract getByID(id: string): Promise<T>;
    abstract create(item: T): Promise<T>;
    abstract updateById(id: string, update: Partial<T>);
    abstract deleteById(id: string);
}