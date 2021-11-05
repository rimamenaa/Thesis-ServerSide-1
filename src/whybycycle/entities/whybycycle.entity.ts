
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WhybycycleDocument =Whybycycle & Document;

@Schema()
export class Whybycycle {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  photo: string;

  @Prop()
  createdAt: Date;
}

export const WhybycycleSchema = SchemaFactory.createForClass(Whybycycle);
