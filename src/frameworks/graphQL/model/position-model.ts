import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PositionModel {
    @Field()
    name: string;

    @Field()
    baseSalary: number;

    @Field()
    bonus: number;
}
