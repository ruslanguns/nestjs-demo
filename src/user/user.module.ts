import { Module } from '@nestjs/common';
import { UserResolver } from './resolver/user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
