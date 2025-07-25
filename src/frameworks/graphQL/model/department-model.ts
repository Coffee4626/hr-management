import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentModel {
    @Field()
    name: string;

    @Field()
    managerId: string;
}
