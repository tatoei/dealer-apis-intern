import { Module } from '@nestjs/common';
@Module({
  providers: [],
  controllers: [],
  exports: [], // หากต้องการให้โมดูลอื่นใช้งาน AuthService
})
export class AuthModule {}
