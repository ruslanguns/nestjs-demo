import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  canActivate() {
    return true;
  }
  handleRequest(err: any, user: any, info: any, ctx: any, status?: any) {
    console.log('[handleReq] user', user)
    console.log('[handleReq] info', info)
    console.log('[handleReq] ctx', ctx)
    console.log('[handleReq] err', err)
    return info;
  }

  getRequest(ctx: ExecutionContext) {
    const ct = GqlExecutionContext.create(ctx);
    return ct.getContext().req;
  }
}
