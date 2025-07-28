import { Field, ObjectType } from '@nestjs/graphql';
import { Position, Department } from 'src/core/entities';
import { PositionModel } from './position-model';
import { DepartmentModel } from './department-model';
@ObjectType()
export class EmployeeModel {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field(() => PositionModel)
    position: Position;

    @Field(() => DepartmentModel)
    department: Department;

    @Field({ nullable: true })
    hoursWorked?: number;

    @Field({ nullable: true })
    penalties?: number;

}
@ObjectType()
export class EmployeeUpdateModel {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;

    @Field(() => PositionModel, { nullable: true })
    position?: PositionModel;

    @Field(()=> DepartmentModel, { nullable: true })
    department?: DepartmentModel;

    @Field({ nullable: true })
    hoursWorked?: number;

    @Field({ nullable: true })
    penalties?: number;
}