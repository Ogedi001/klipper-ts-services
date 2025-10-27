// src/modules/auth/auth.controller.ts
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { type LoginDto, LoginSchema } from './dto';
import { ZodValidationPipe } from '@klipper-ts-services/common';

//import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //   @Post('register')
  //   async register(@Body() dto: RegisterDto) {
  //     return this.authService.register(dto);
  //   }

  @Post('login')
  @UsePipes(new ZodValidationPipe(LoginSchema))
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    return this.authService.login(user);
  }

  //@UseGuards(JwtAuthGuard)
  // @Post('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
