import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { UserResolver } from 'src/user/resolver/user.resolver';

@Module({
  imports: [UserModule],
  providers: [AuthorService, AuthorResolver, UserService, UserResolver],
})
export class AuthorModule {
 
}
