import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    manager: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);