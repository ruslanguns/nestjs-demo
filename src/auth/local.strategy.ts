import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, pwd: string): Promise<any> {
    try {
      const user = await this.authService.validateUser(username, pwd);
      if (!user) {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
