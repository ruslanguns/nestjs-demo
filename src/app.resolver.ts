import { Request, UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { AppService } from './app.service';
import { User } from './user/entity/user.entity';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query()
  getHello(): string {
    return this.appService.getHello();
  }

  @Mutation(returns => User, { name: 'Login', description: 'The login method' })
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return req.user;
  }
}
