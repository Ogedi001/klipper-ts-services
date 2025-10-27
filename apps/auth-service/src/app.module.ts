import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
//import { UsersModule } from './modules/users/users.module';
//import { VerificationModule } from './modules/verification/verification.module';
//import { RolesModule } from './modules/roles/roles.module';
//import { PrismaService } from './database/prisma.service';
//import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    AuthModule,
    //UsersModule,
    //VerificationModule,
    //RolesModule,
  ],
  controllers: [],
  providers: [
    // PrismaService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
