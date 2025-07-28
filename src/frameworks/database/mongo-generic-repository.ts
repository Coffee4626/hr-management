import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
    private _repository: Model<T>;
    private _populateOnFind: string[];

    constructor(repository: Model<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    getAll(): Promise<T[]> {
        return this._repository.find().populate(this._populateOnFind).exec();
    }

    getByID(id: string): Promise<T> {
        console.log('Populating with fields:', this._populateOnFind);
        const query = this._repository.findById(id);
        
        if (this._populateOnFind.length > 0) {
            this._populateOnFind.forEach(field => {
                query.populate(field);
            });
        }
        
        return query.exec().then(result => {
            console.log('Query result:', result);
            return result;
        });
    }

    create(item: T): Promise<T> {
        return this._repository.create(item);
    }

    updateById(id: string, item: Partial<T>) {
        const result = this._repository.findByIdAndUpdate(id, item, { new : true }).lean().exec();
        return result as Promise<T>;
    }

    deleteById(id: string) {
        return this._repository.findByIdAndDelete(id).exec();
    }
}