import { Field, ObjectType } from '@nestjs/graphql';
import { Position, Department } from 'src/core/entities';
@ObjectType()
export class EmployeeModel {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    position: Position;

    @Field()
    department: Department;

    @Field({ nullable: true })
    hoursWorked?: number;

    @Field({ nullable: true })
    penalties?: number;

}