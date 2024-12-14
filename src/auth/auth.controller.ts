import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Login
  @Post('login')
  async login() {
    console.log('Login');
  }

  // Refresh
  @Post('refresh')
  async refreshTokens() {
    console.log('Refresh');
  }
}
