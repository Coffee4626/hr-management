import { Controller } from '@nestjs/common';
import { DepartmentService } from 'src/use-cases/department/department.use-cases';
import { CreateDepartmentDto, UpdateDepartmentDto } from 'src/core/DTOs/department.dto';
import { Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {}

    @Get()
    async getAll() {
        return this.departmentService.getAllDepartments();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.departmentService.getDepartmentById(id);
    }

    @Post()
    async create(@Body() createDepartmentDto: CreateDepartmentDto) {
        return this.departmentService.createDepartment(createDepartmentDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
        return this.departmentService.updateDepartment(id, updateDepartmentDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.departmentService.deleteDepartment(id);
    }
}
