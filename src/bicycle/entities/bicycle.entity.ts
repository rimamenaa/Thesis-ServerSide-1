import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type BicycleDocument = Bicycle & Document;

@Schema()
export class Bicycle {
  @Prop({ required: false })
  category: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  photo: string;
}

export const BicycleSchema = SchemaFactory.createForClass(Bicycle);
