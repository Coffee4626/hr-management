import { Injectable } from "@nestjs/common";
import { Department } from "src/core/entities";
import { CreateDepartmentDto, UpdateDepartmentDto } from "src/core/DTOs/department.dto";

@Injectable()
export class DepartmentFactoryService {
    createDepartmentDtoToEntity(createDepartmentDto: CreateDepartmentDto): Department {
        const newDepartment = new Department();
        newDepartment.name = createDepartmentDto.name;
        newDepartment.manager = createDepartmentDto.manager;
        return newDepartment;
    }

    updateDepartmentDtoToEntity(updateDepartmentDto: UpdateDepartmentDto): Department {
        const updatedDepartment = new Department();
        updatedDepartment.name = updateDepartmentDto.name;
        updatedDepartment.manager = updateDepartmentDto.manager;
        return updatedDepartment;
    }
}