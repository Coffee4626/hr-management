import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDataServices } from './mongo-data-services.service';
import { Employee, EmployeeSchema, Position, PositionSchema, Department, DepartmentSchema } from './schema/';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Employee.name, schema: EmployeeSchema },
            { name: Position.name, schema: PositionSchema },
            { name: Department.name, schema: DepartmentSchema }
        ]),
        MongooseModule.forRoot('mongodb+srv://binhyb2:erv4gfgQgxiOWLvg@hr-management.r1vnxvf.mongodb.net/?retryWrites=true&w=majority&appName=HR-management')
    ],
    providers: [{
        provide: IDataServices,
        useClass: MongoDataServices
    }],
    exports: [IDataServices]
})

export class MongoDataServicesModule {}