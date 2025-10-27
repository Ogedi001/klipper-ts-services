// src/modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
//import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

//import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    // PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'klippa_secret_key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, /*JwtStrategy*/],
  exports: [AuthService],
})
export class AuthModule {}
