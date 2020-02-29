import { Request, UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { CurrentUser } from './decorators/user.decorator';
import { GqlAuthGuard } from './guard/gql-auth.guard';
import { User } from './user/entity/user.entity';
import { UserService } from './user/user.service';

@Resolver()
export class AppResolver {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Query()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Mutation(() => String, { name: 'Login', description: 'The login method' })
  async login(@Request() req) {
    //return req.user;
    return await this.authService.login(req.user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(returns => User)
  async getProfile(@CurrentUser() user: User) {
    return await this.userService.findOne(user.id);
  }
}
