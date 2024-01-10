import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignupDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up-admin')
  async SignUpAdmin(@Body() payload: SignupDTO) {
    return await this.authService.signUpAdmin(payload);
  }

  @Post('sign-in-admin')
  async signInAdmin(@Body() payload: SignInDto) {
    return await this.authService.signInAdmin(payload);
  }
}
