import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { DepartmentService } from './department.use-cases';
import { DepartmentFactoryService } from './department-factory.service';
import { DepartmentResolver } from 'src/resolvers/department.resolver';
@Module({
  imports: [DataServicesModule],
  providers: [DepartmentService, DepartmentFactoryService, DepartmentResolver],
  exports: [DepartmentService, DepartmentFactoryService, DepartmentResolver],
})
export class DepartmentModule {}
