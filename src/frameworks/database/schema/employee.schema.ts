import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Department, Position } from './index';
import * as mongoose from 'mongoose';

export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Position', required: true })
    position: Position;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true })
    department: Department;

    @Prop({ required: true })
    hoursWorked: number;

    @Prop({ required: true })
    penalties: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);