import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.use-cases';
import { EmployeeFactoryService } from './employee-factory.service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
@Module({
    imports: [ DataServicesModule ],
    providers: [EmployeeService, EmployeeFactoryService],
    exports: [EmployeeService, EmployeeFactoryService]
})
export class EmployeeModule {}
