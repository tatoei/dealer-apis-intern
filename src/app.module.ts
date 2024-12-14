import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  providers: [AuthService, AuthModule],
  controllers: [AuthController],
  exports: [AuthService], // หากต้องการให้โมดูลอื่นใช้งาน AuthService
})
export class AuthModule {}
