import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IRequestContext } from 'src/lib';
import {
  AddUserInput,
  GetUserArgs,
  LoginInput,
  SignupInput,
  User,
} from '../entity/user.entity';
import { UserService } from '../user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User, { nullable: true })
  async me(@Context() ctx: IRequestContext): Promise<User | undefined> {
    try {
      const userId = ctx.req['userId'];
      if (!userId) {
        return undefined;
      }
      return await this.userService.findOne(userId);
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(returns => [User])
  async users(): Promise<User[]> {
    try {
      const users = await this.userService.findAll();
      return users;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(returns => User)
  async user(@Args() { id }: GetUserArgs): Promise<User> {
    try {
      const user = await this.userService.findOne(id);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(returns => User)
  async addUser(
    @Args('addUserInput') addUserInput: AddUserInput,
  ): Promise<User> {
    try {
      const user = await this.userService.addUser(addUserInput);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => User)
  async signup(
    @Args('signupInput') signupInput: SignupInput,
  ): Promise<User | null> {
    try {
      const user = await this.userService.signup(signupInput);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  /* @Mutation(returns => User)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<User> {
    try {
      const user = await this.userService.authenticate(loginInput);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  } */
}
