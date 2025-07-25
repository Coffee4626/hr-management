import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { MongoGenericRepository } from "./mongo-generic-repository";
import { Employee, Position, Department } from "./schema";

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    employees: MongoGenericRepository<Employee>;
    positions: MongoGenericRepository<Position>;
    departments: MongoGenericRepository<Department>;
    constructor(
        @InjectModel(Employee.name) 
        private EmployeeRepository: Model<Employee>, 
        @InjectModel(Position.name) 
        private PositionRepository: Model<Position>,
        @InjectModel(Department.name) 
        private DepartmentRepository: Model<Department>
    ) {}

    onApplicationBootstrap() {
        this.employees = new MongoGenericRepository<Employee>(this.EmployeeRepository, [
            'position',
            'department'
        ]);
        this.positions = new MongoGenericRepository<Position>(this.PositionRepository);
        this.departments = new MongoGenericRepository<Department>(this.DepartmentRepository);
    }
}