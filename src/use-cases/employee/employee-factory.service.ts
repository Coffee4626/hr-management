import { Injectable } from '@nestjs/common';
import { Employee } from 'src/core/entities';
import { CreateEmployeeDto, UpdateEmployeeDto } from 'src/core/DTOs/employee.dto';

@Injectable()
export class EmployeeFactoryService {
    createEmployeeDtoToEntity(createEmployeeDto: CreateEmployeeDto): Employee {
        const newEmployee = new Employee();
        newEmployee.name = createEmployeeDto.name;
        newEmployee.email = createEmployeeDto.email;
        newEmployee.department = createEmployeeDto.departmentId;
        newEmployee.position = createEmployeeDto.positionId;
        newEmployee.hoursWorked = 0;
        newEmployee.penalties = 0;
        return newEmployee;
    }

    updateEmployeeDtoToEntity(updateEmployeeDto: UpdateEmployeeDto): Employee {
        const newEmployee = new Employee();
        newEmployee.name = updateEmployeeDto.name;
        newEmployee.email = updateEmployeeDto.email;
        newEmployee.department = updateEmployeeDto.departmentId;
        newEmployee.position = updateEmployeeDto.positionId;
        newEmployee.hoursWorked = updateEmployeeDto.hoursWorked;
        newEmployee.penalties = updateEmployeeDto.penalties;
        return newEmployee;
    }
}