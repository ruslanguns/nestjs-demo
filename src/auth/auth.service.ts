import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    //private readonly jwtService: any,
  ) {}

  async validateUser(email: string, username: string, password: string) {
    const user = await this.userService.authenticate({
      username,
      email,
      password,
    });

    if (user) {
      return user
    }
    return null;
  }

  async login(user: any) {
    console.log('[authService] - user:', user)
    try {
      return {
        /* accessToken: this.jwtService.sign({
          username: user.username,
          sub: user.userId,
          aud: process.env.JWT_AUD,
          iss: process.env.JWT_ISS,
          iat: Math.floor(Date.now() / 1000) - 30,
        }), */
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
