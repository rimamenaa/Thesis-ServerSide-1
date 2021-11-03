import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  numberOfBikes: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  contact: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
