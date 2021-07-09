/*
https://docs.nestjs.com/providers#services
*/
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { AuthInterface } from '../interfaces/auth.interface';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
 
  constructor(
    @Inject('AUTH_MODEL')
    private authModel: Model<AuthInterface>,
  ){}


  async create(authDto: AuthDto): Promise<AuthInterface> {
    const crateAuth = new this.authModel(authDto);
    return crateAuth.save();
  }


  async findAll(): Promise<AuthInterface[]> {
    return this.authModel.find().exec();
  }
}
