import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import * as dotenv from 'dotenv';
import config from './ormConfig';

dotenv.config({ path: '.env' });

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
