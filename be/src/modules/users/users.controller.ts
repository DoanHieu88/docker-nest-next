import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Auth } from '../auth/auth.decorator';
import { AuthType } from 'src/common/enum';

@Controller('users')
@ApiTags('user')
export class UsersController {
  @UseGuards(AuthGuard)
  @Auth(AuthType.Admin)
  @ApiBearerAuth()
  @Get()
  async hello() {
    return 'hello';
  }
}
