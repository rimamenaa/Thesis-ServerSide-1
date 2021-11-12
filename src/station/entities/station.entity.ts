import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { truncate } from 'fs/promises';
import { Document } from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
  @Prop({ required: true })
  Name: String;
  @Prop({ required: true })
  Email: String;
  @Prop({ required: true })
  Situation: String;
  @Prop({ required: true })
  Incoming: String;
  @Prop({ required: true })
  City: String;
  @Prop({ required: true })
  Status: String;
  @Prop({ required: true })
  BikeCount: String;
  @Prop({ required: false })
  CreatedAt: Date;
}

export const StationSchema = SchemaFactory.createForClass(Station);
