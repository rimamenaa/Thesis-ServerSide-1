import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
  @Prop({ required: true })
  Name: string;

  @Prop({ required: true })
  Email: string;

  @Prop({ required: true })
  Situation: string;

  @Prop({ required: true })
  BikeCount: string;

  @Prop({ required: true })
  City: string;

  @Prop({ required: true })
  Status: string;

  @Prop({ required: true })
  Incoming: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
