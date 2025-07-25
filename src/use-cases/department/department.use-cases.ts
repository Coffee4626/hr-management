import { Injectable } from "@nestjs/common";
import { Department } from "src/core/entities";
import { CreateDepartmentDto, UpdateDepartmentDto } from "src/core/DTOs/department.dto";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { DepartmentFactoryService } from "./department-factory.service";
@Injectable()
export class DepartmentService {
    constructor(private dataServices: IDataServices, 
                private departmentFactoryService: DepartmentFactoryService
    ) {}
    async createDepartment(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        const newDepartment = this.departmentFactoryService.createDepartmentDtoToEntity(createDepartmentDto);
        return this.dataServices.departments.create(newDepartment);
    }
    async getDepartmentById(id: string): Promise<Department | null> {
        return this.dataServices.departments.getByID(id);
    }
    async updateDepartment(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
        const updatedDepartment = this.departmentFactoryService.updateDepartmentDtoToEntity(updateDepartmentDto);
        return this.dataServices.departments.updateById(id, updatedDepartment);
    }
    async deleteDepartment(id: string): Promise<void> {
        return this.dataServices.departments.deleteById(id);
    }
    async getAllDepartments(): Promise<Department[]> {
        return this.dataServices.departments.getAll();
    }
} 