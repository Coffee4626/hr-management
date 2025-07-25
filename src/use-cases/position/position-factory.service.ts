import { Position } from "src/core/entities";
import { Injectable } from "@nestjs/common";
import { CreatePositionDto, UpdatePositionDto } from "src/core/DTOs/position.dto";

@Injectable()
export class PositionFactoryService {
    createPositionDtoToEntity(createPositionDto: CreatePositionDto): Position {
        const newPosition = new Position();
        newPosition.name = createPositionDto.name;
        newPosition.baseSalary = createPositionDto.baseSalary;
        newPosition.bonus = createPositionDto.bonus;
        return newPosition;
    }

    updatePositionDtoToEntity(updatePositionDto: UpdatePositionDto): Position {
        const updatedPosition = new Position();
        updatedPosition.name = updatePositionDto.name;
        updatedPosition.baseSalary = updatePositionDto.baseSalary;
        updatedPosition.bonus = updatePositionDto.bonus;
        return updatedPosition;
    }
}