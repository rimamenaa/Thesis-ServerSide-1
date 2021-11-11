import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { truncate } from 'fs/promises';
import { Document } from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
  @Prop({ required: false })
  Name: String;
  @Prop({ required: false })
  Email: String;
  @Prop({ required: false })
  Situation: String;
  @Prop({ required: false })
  Incoming: String;
  @Prop({ required: false })
  City: String;
  @Prop({ required: false })
  Status: String;
  @Prop({ required: false })
  BikeCount: String;
}

export const StationSchema = SchemaFactory.createForClass(Station);
