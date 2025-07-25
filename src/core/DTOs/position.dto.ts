import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePositionDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    baseSalary: number;
    
    @IsNumber()
    @IsNotEmpty()
    bonus: number;
}

export class UpdatePositionDto extends PartialType(CreatePositionDto) {}