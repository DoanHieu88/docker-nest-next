import { SetMetadata } from '@nestjs/common';
import { AuthType } from 'src/common/enum';

export const ROLES_KEY = 'auth';
export const Auth = (...auth: AuthType[]) => SetMetadata(ROLES_KEY, auth);
