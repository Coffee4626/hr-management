import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { DepartmentService } from './department.use-cases';
import { DepartmentFactoryService } from './department-factory.service';
@Module({
  imports: [DataServicesModule],
  providers: [DepartmentService, DepartmentFactoryService],
  exports: [DepartmentService, DepartmentFactoryService],
})
export class DepartmentModule {}
