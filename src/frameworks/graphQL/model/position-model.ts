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
@ObjectType()
export class PositionUpdateModel {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    baseSalary?: number;

    @Field({ nullable: true })
    bonus?: number;
}