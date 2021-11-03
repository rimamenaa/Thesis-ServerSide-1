import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BicycleDocument = Bicycle & Document;

@Schema()
export class Bicycle {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const BicycleSchema = SchemaFactory.createForClass(Bicycle);
