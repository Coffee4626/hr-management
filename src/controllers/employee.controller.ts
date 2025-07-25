import { Controller, Post, Get, Patch, Param, Body, Delete } from '@nestjs/common';
import { EmployeeService } from 'src/use-cases/employee/employee.use-cases';
import { CreateEmployeeDto, UpdateEmployeeDto } from 'src/core/DTOs/employee.dto';
@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {} 
    @Get()
    async getAll() {
        return this.employeeService.getAllEmployees();
    }
    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.employeeService.getEmployeeById(id);
    }
    @Post()
    async create(@Body() createEmployeeDto: CreateEmployeeDto) {    
        return this.employeeService.createEmployee(createEmployeeDto);
    }
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
        return this.employeeService.updateEmployee(id, updateEmployeeDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.employeeService.deleteEmployee(id);
    }
}

