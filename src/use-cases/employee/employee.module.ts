import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.use-cases';
import { EmployeeFactoryService } from './employee-factory.service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { EmployeeResolver } from 'src/resolvers/employee.resolver';
@Module({
    imports: [ DataServicesModule ],
    providers: [EmployeeService, EmployeeFactoryService, EmployeeResolver],
    exports: [EmployeeService, EmployeeFactoryService, EmployeeResolver]
})
export class EmployeeModule {}
