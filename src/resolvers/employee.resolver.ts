import { Field, InputType } from '@nestjs/graphql';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeModel, EmployeeUpdateModel } from 'src/frameworks/graphQL/model/employee-model';
import { EmployeeService } from 'src/use-cases/employee/employee.use-cases';
@InputType()
class CreateEmployeeInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    positionId: string;

    @Field()
    departmentId: string;

    @Field()
    hoursWorked: number;

    @Field()
    penalties: number;
}
@InputType()
class UpdateEmployeeInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    positionId?: string;

    @Field({ nullable: true })
    departmentId?: string;

    @Field({ nullable: true })
    hoursWorked?: number;

    @Field({ nullable: true })
    penalties?: number;
}
@Resolver(() => EmployeeModel)
export class EmployeeResolver {
    constructor(private employeeService: EmployeeService) {}

    @Query(() => [EmployeeModel])
    async getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @Query(() => EmployeeModel)
    async getEmployeeById(@Args('id', { type: ()=> String }) id: string) {
        return this.employeeService.getEmployeeById(id);
    }

    @Mutation(() => EmployeeModel)
    async createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
        return this.employeeService.createEmployee(createEmployeeInput);
    }

    @Mutation(() => EmployeeUpdateModel)
    async updateEmployee(
        @Args('id', { type: ()=> String}) id: string,
        @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
        return this.employeeService.updateEmployee(id, updateEmployeeInput);
    }

    @Mutation(() => EmployeeModel)
    async deleteEmployee(@Args('id', { type: ()=> String }) id: string) {
        return this.employeeService.deleteEmployee(id);
    }
}