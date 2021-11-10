import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PiDocument = Pi & Document;

@Schema()
export class Pi {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const PiSchema = SchemaFactory.createForClass(Pi);
