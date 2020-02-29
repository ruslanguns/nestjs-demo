import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // For each strategy, Passport will call the verify function 
  // (implemented with the validate() method in @nestjs/passport)
  async validate(email:string, username: string, pwd: string): Promise<User> {
    try {
      const user = await this.authService.validateUser(email, username, pwd);
      if (!user) {
        throw new UnauthorizedException();
      }
      return user; // with this, passport adds user to the request obj as req.user
    } catch (err) {
      throw new Error(err);
    }
  }
}
