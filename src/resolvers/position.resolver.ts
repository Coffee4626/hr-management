import { Resolver, Query, Mutation, Args, Field, InputType } from '@nestjs/graphql';
import { PositionModel, PositionUpdateModel } from 'src/frameworks/graphQL/model/position-model';
import { PositionService } from 'src/use-cases/position/position.use-cases';
@InputType()
class CreatePositionInput {
    @Field()
    name: string;

    @Field()
    baseSalary: number;

    @Field()
    bonus: number;
}
@InputType()
class UpdatePositionInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    baseSalary?: number;

    @Field({ nullable: true })
    bonus?: number;
}
@Resolver(() => PositionModel)
export class PositionResolver {
    constructor(private positionService: PositionService) {}

    @Query(() => [PositionModel])
    async getAllPositions() {
        return this.positionService.getAllPositions();
    }

    @Query(() => PositionModel)
    async getPositionById(@Args('id', { type: () => String }) id: string) {
        return this.positionService.getPositionById(id);
    }

    @Mutation(() => PositionModel)
    async createPosition(@Args('createPositionInput') createPositionInput: CreatePositionInput) {
        return this.positionService.createPosition(createPositionInput);
    }

    @Mutation(() => PositionUpdateModel)
    async updatePosition(
        @Args('id', { type: () => String }) id: string,
        @Args('updatePositionInput') updatePositionInput: UpdatePositionInput) {
        return this.positionService.updatePosition(id, updatePositionInput);
    }

    @Mutation(() => Boolean)
    async deletePosition(@Args('id', { type: ()=> String }) id: string) {
        return this.positionService.deletePosition(id);
    }
}