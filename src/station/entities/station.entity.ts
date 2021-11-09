import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
  @Prop({ required: false })
  Name: string;

  @Prop({ required: false })
  Email: string;

  @Prop({ required: false })
  Situation: string;

  @Prop({ required: false })
  Incoming: string;

  @Prop({ required: false })
  City: string;

  @Prop({ required: false })
  Status: string;

  @Prop({ required: false })
  BikeCount: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
