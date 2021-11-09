import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
  @Prop({ required: false })
  location: string;

  @Prop({ required: false })
  numberOfBikes: number;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false })
  contact: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
