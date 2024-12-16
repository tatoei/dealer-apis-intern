import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://toeiisararawee:toeiisararawee@cluster0.sv1c0.mongodb.net/',
    ),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
