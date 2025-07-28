import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeModule } from './use-cases/employee/employee.module';
import { DepartmentModule } from './use-cases/department/department.module';
import { PositionModule } from './use-cases/position/position.module';
import { DepartmentController } from './controllers/department.controller';
import { PositionController } from './controllers/position.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
@Module({
  imports: [EmployeeModule, 
            PositionModule, 
            DepartmentModule,
            DataServicesModule,        
            ],
            
  controllers: [ 
                EmployeeController, 
                PositionController, 
                DepartmentController],
  providers: [],
})
export class AppModule {}
