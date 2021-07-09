import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ type: String, required: true })
  login: string;

  @Prop({ type: String, required: true, default: '123' })
  password: string;

  @Prop({ type: Boolean, required: false, default: false })
  active: boolean;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
