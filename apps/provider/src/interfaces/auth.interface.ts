import { Document } from 'mongoose';

export interface AuthInterface extends Document {
  readonly  login: string;
  readonly  password: string;
}
