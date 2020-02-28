import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, pwd: string) {
    const user = await this.userService.findOne(username);
    if (user && user.password === pwd) {
      return {
        password: user.password,
        ...user,
      };
    }
    return null;
  }
}
