import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    departmentId: any;

    @IsNotEmpty()
    positionId: any;

    @IsNotEmpty()
    @IsNumber()
    hoursWorked: number;

    @IsNotEmpty()
    @IsNumber()
    penalties: number;
}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}