import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuggestionsDocument = Suggestions & Document;

@Schema()
export class Suggestions {
  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  distance: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const SuggestionsSchema = SchemaFactory.createForClass(Suggestions);
