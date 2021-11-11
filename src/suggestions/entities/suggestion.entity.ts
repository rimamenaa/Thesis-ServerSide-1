import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuggestionsDocument = Suggestions & Document;

@Schema()
export class Suggestions {
  @Prop({ required: false })
  photo: string;

  @Prop({ required: false })
  location: string;

  @Prop({ required: false })
  duration: string;

  @Prop({ required: false })
  Distance: string;

  @Prop({ required: false })
  description: string;
}

export const SuggestionsSchema = SchemaFactory.createForClass(Suggestions);
