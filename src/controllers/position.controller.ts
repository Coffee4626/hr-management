import { Controller } from '@nestjs/common';
import { PositionService } from 'src/use-cases/position/position.use-cases';
import { CreatePositionDto, UpdatePositionDto } from 'src/core/DTOs/position.dto';
import { Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';

@Controller('position')
export class PositionController {
    constructor(private positionService: PositionService) {}

    @Get()
    async getAll() {
        return this.positionService.getAllPositions();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.positionService.getPositionById(id);
    }

    @Post()
    async create(@Body() createPositionDto: CreatePositionDto) {
        return this.positionService.createPosition(createPositionDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto) {
        return this.positionService.updatePosition(id, updatePositionDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.positionService.deletePosition(id);
    }
}
