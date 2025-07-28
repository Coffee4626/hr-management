import { Field, InputType } from '@nestjs/graphql';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DepartmentModel, DepartmentUpdateModel } from 'src/frameworks/graphQL/model/department-model';
import { DepartmentService } from 'src/use-cases/department/department.use-cases';
@InputType()
class CreateDepartmentInput {
    @Field()
    name: string;

    @Field()
    manager: string;
}
@InputType()
class UpdateDepartmentInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    manager?: string;
}
@Resolver(() => DepartmentModel)
export class DepartmentResolver {
    constructor(private departmentService: DepartmentService) {}

    @Query(() => [DepartmentModel])
    async getAllDepartments() {
        return this.departmentService.getAllDepartments();
    }

    @Query(() => DepartmentModel)
    async getDepartmentById(@Args('id', { type: () => String }) id: string) {
        return this.departmentService.getDepartmentById(id);
    }

    @Mutation(() => DepartmentModel)
    async createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput) {
        return this.departmentService.createDepartment(createDepartmentInput);
    }

    @Mutation(() => DepartmentUpdateModel)
    async updateDepartment(
        @Args('id', { type: () => String } ) id: string,
        @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput) {
        return this.departmentService.updateDepartment(id, updateDepartmentInput);
    }

    @Mutation(() => DepartmentModel)
    async deleteDepartment(@Args('id', { type: ()=> String }) id: string) {
        return this.departmentService.deleteDepartment(id);
    }
}