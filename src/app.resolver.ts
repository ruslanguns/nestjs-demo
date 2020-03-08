import { Request } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query()
  getHello(): string {
    return this.appService.getHello();
  }

  @Mutation(() => String, { name: 'Login', description: 'The login method' })
  async login(@Request() req) {
    //return req.user;
    return 'null';
  }

  @Query(returns => String)
  async getProfile() {
    return 'null';
  }
}
