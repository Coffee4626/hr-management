import { Position } from "src/core/entities";
import { Injectable } from "@nestjs/common";
import { CreatePositionDto, UpdatePositionDto } from "src/core/DTOs/position.dto";
import { PositionFactoryService } from "./position-factory.service";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
@Injectable()
export class PositionService {
    constructor(private dataServices: IDataServices, 
                private positionFactoryService: PositionFactoryService
    ) {}

    async createPosition(createPositionDto: CreatePositionDto): Promise<Position> {
        return this.positionFactoryService.createPositionDtoToEntity(createPositionDto);
    }

    async getPositionById(id: string): Promise<Position | null> {
        return this.dataServices.positions.getByID(id);
    }

    async updatePosition(id: string, updatePositionDto: UpdatePositionDto): Promise<Position> {
        const updatedPosition = this.positionFactoryService.updatePositionDtoToEntity(updatePositionDto);
        return this.dataServices.positions.updateById(id, updatedPosition);
    }

    async deletePosition(id: string): Promise<void> {
        return this.dataServices.positions.deleteById(id);
    }

    async getAllPositions(): Promise<Position[]> {
        return this.dataServices.positions.getAll();
    }
}