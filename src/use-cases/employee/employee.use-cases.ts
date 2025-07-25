import { Employee } from "src/core/entities";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { Injectable } from "@nestjs/common";
import { EmployeeFactoryService } from "./employee-factory.service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "src/core/DTOs/employee.dto";

@Injectable()
export class EmployeeService {
    constructor(private dataServices: IDataServices, 
                private employeeFactoryService: EmployeeFactoryService
    ) {}

    async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        return this.employeeFactoryService.createEmployeeDtoToEntity(createEmployeeDto);
    }

    async getEmployeeById(id: string): Promise<Employee | null> {
        return this.dataServices.employees.getByID(id);
    }

    async updateEmployee(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
        const updatedEmployee = this.employeeFactoryService.updateEmployeeDtoToEntity(updateEmployeeDto);
        return this.dataServices.employees.updateById(id, updatedEmployee);
    }

    async deleteEmployee(id: string): Promise<void> {
        return this.dataServices.employees.deleteById(id);
    }

    async getAllEmployees(): Promise<Employee[]> {
        return this.dataServices.employees.getAll();
    }
}