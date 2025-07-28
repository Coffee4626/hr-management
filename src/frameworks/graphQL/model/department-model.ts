import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentModel {
    @Field()
    name: string;

    @Field()
    manager: string;
}
@ObjectType()
export class DepartmentUpdateModel {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    manager?: string;
}