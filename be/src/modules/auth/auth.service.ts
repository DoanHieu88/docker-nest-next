import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { SignInDto, SignupDTO } from './auth.dto';
import {
  CONFIRM_PASSWORD_NOT_MATCH,
  EMAIL_IS_EXIST,
} from 'src/common/constant/exception-constant';
import { hashPassword, isHashPass } from 'src/common/utils/function-until';
import { AuthType } from 'src/common/enum';
import { auditCreate } from 'src/common/utils/audits';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUpAdmin(payload: SignupDTO) {
    const emailExit = await this.usersRepository.findOne({
      where: {
        email: payload.email,
      },
    });
    if (emailExit) throw new BadRequestException(EMAIL_IS_EXIST);
    if (payload.password !== payload.confirmPassword)
      throw new BadRequestException(CONFIRM_PASSWORD_NOT_MATCH);

    payload.password = await hashPassword(payload.password);

    const audit = {
      ...auditCreate,
      roleType: AuthType.Admin,
    };

    await this.usersRepository.save({
      ...audit,
      ...payload,
    });
    return { message: 'create success' };
  }

  async signInAdmin(payload: SignInDto) {
    const user = await this.usersRepository.findOne({
      where: {
        email: payload.email,
      },
    });
    if (!user) throw new UnauthorizedException();
    const isHash = await isHashPass(payload.password, user.password);
    if (!isHash) throw new UnauthorizedException();

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  private encode() {}
}
