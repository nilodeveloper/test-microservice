/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Get, Header } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { AuthInterface } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  @Post('store')
  @Header('content-type', 'application/json')
  store(user: AuthDto) {
    return this.userService.create(user);
  }

  @Get()
  @Header('content-type', 'application/json')
  findAll() {
    return this.userService.findAll();
  }
}
