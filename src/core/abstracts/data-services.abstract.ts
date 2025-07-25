import { IGenericRepository } from "./generic-repository.abstract";
import { Employee, Position, Department } from "../entities";

export abstract class IDataServices {
    abstract employees: IGenericRepository<Employee>;
    abstract positions: IGenericRepository<Position>;
    abstract departments: IGenericRepository<Department>;
}