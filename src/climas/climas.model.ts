import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Climas extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const ClimasSchema = SchemaFactory.createForClass(Climas);