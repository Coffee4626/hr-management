import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PositionDocument = Position & Document;

@Schema()
export class Position {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    baseSalary: number;

    @Prop({ required: true })
    bonus: number;
}

export const PositionSchema = SchemaFactory.createForClass(Position);